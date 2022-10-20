var x;
document.getElementById("hello").addEventListener("click", function (e) {
  e.preventDefault();
  var arr = [];
  var vi = $("#vi").val();
  // var api = "AIzaSyDXlPnVE2rcL72ajMUUdekmd3co6qRf_MI";
  var api = "AIzaSyDwE0wBmelnNY4bkLGF3t6olDtHsddmKLQ";
  var url =
    "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=" +
    api +
    "&videoId=" +
    vi +
    "&maxResults=100";

  $.get(url, function (data) {
    arr = arr.concat(data.items);
    var npt = data.nextPageToken;
    if (npt == undefined) {
      x={"items":arr};
      console.log(x);
      for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
      }
    } else {
      url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          url = url + "&pageToken=" + npt;
      $.get(url, function (d) {
        arr = arr.concat(data.items);
        npt = d.nextPageToken;
        if (npt == undefined) {
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        } else{
          x={"items":arr};
          console.log(x);
          for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].snippet.topLevelComment.snippet.textDisplay);
          }
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
        }
      });
    }
  });
  console.log("hello");
});
