import gc
import json
import numpy as np
import pandas as pd
import torch

from transformers import AutoTokenizer, AutoModelForSequenceClassification


class Classifier:

    def __init__(self, file):
        f = open(file)
        data = json.load(f)
        comment = {'text': [], 'time': [], 'author': []}
        for idx in range(len(data['items'])):
            comment['text'].append(data['items'][idx]['snippet']['topLevelComment']['snippet']['textOriginal'])
            comment['time'].append(data['items'][idx]['snippet']['topLevelComment']['snippet']['updatedAt'])
            comment['author'].append(data['items'][idx]['snippet']['topLevelComment']['snippet']['authorDisplayName'])

        self.comment = comment

    def segregator(self, probs):
        probs = probs.detach().numpy()
        probs[:, 0] += probs[:, 1]
        probs[:, 2] += probs[:, 1]
        indexes = np.argmax(probs, axis=1).reshape(-1, 1)
        positive = np.where(indexes == 2, 1, 0)
        gc.collect()
        return positive

    def model(self):
        model = AutoModelForSequenceClassification.from_pretrained(
            "mrm8488/distilroberta-finetuned-financial-news-sentiment-analysis", num_labels=3)
        tokenizer = AutoTokenizer.from_pretrained("mrm8488/distilroberta-finetuned-financial-news-sentiment-analysis")
        inputs = tokenizer(self.comment['text'], padding=True, truncation=True, return_tensors="pt")
        outputs = model(inputs["input_ids"])
        probs = torch.softmax(outputs.logits, axis=1)
        del outputs, inputs, model, tokenizer
        gc.collect()
        return probs

    def divider(self, classes):
        df = pd.DataFrame(self.comment)
        positives = df[classes == 1]
        negatives = df[classes == 0]
        dict1 = {'text': list(positives['text'].to_numpy()), 'time': list(positives['time'].to_numpy()),
                 'author': list(positives['author'].to_numpy())}
        dict2 = {'text': list(negatives['text'].to_numpy()), 'time': list(negatives['time'].to_numpy()),
                 'author': list(negatives['author'].to_numpy())}
        dictout = {'positive': dict1, 'negative': dict2}
        gc.collect()
        return dictout

    def returner(self):
        probs = self.model()
        gc.collect()
        classes = self.segregator(probs)
        gc.collect()

        out = self.divider(classes)
        gc.collect()
        json_object = json.dumps(out, indent=4)
        with open("outputjson.json", "w") as outfile:
            outfile.write(json_object)

        return "outputjson.json"
