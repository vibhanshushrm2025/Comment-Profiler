from flask import Flask, request, jsonify
import x
import pickle
model = pickle.load(open('finalized_model.pkl', 'rb'))

app = Flask(__name__)



@app.route('/')
def home():
    return "Hello World"


@app.route('/predict', methods=['POST'])
def predict():
    link = request.form.get('link')
    cfilter = request.form.get('cfilter')
    y = x.hi(link)
    jsonify(y)
    return y


if __name__ == '__main__':
    app.run(debug=True)
