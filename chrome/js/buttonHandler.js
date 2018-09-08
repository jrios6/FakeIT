document.getElementById("realButton").addEventListener("click", realButtonFunction);
document.getElementById("fakeButton").addEventListener("click", fakeButtonFunction);

function getNewHeadline() {
  var questionLabel = false;
  $.ajax({
    type: "GET",
    url: 'http://localhost:5000/headline',
    success: function(result) {
      console.log(result);
      $('#headlineInsert').text(result.headline);
      questionLabel = result.label == 'r';
      chrome.storage.sync.set({ questionLabel });
    },
  });
}

function incrementScore() {
  chrome.storage.sync.get('questionScore', function(response) {
    questionScore = response.questionScore + 1;
    chrome.storage.sync.set({ questionScore });
    $('#headlineScore').text(questionScore);
  });
}

function getScore() {
  chrome.storage.sync.get('questionScore', function(response) {
    $('#headlineScore').text(response.questionScore);
  });
}

function realButtonFunction(){
  chrome.storage.sync.get(['questionHeadline', 'questionLabel'], function(response){
    if (response.questionLabel == true) {
      alert('Good job! You are on your way to become a true master :)');
      incrementScore()
    } else {
      alert('Sorry, you got it wrong!');
    }

    getNewHeadline()
  });
}

function fakeButtonFunction() {
  chrome.storage.sync.get(['questionHeadline', 'questionLabel'], function(response){
    if (response.questionLabel == false) {
      alert('Good job! You are on your way to become a true master :)');
      incrementScore()
    } else {
      alert('Sorry, you got it wrong!');
    }
    getNewHeadline()
  });
}

$(document).ready(function () {
  getNewHeadline()
  getScore()
});
