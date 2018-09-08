'use strict';

function updateTime(prev) {
  var secondsLeft = 24*60*60 - Math.floor((Date.now()-prev)/1000);
  const hoursLeft =  Math.floor(secondsLeft / 3600);
  var minsLeft = Math.floor((secondsLeft - hoursLeft * 3600) / 60)
  //secondsDisplay = (secondsLeft - hoursLeft * 3600 - minsLeft * 60)
  if (minsLeft < 10) minsLeft = '0' + minsLeft;
  $('#time').text(`${hoursLeft}:${minsLeft}`);

  if (secondsLeft <= 0) {
    var notifOptions = {
      type: 'basic',
      iconUrl: '/img/magician.png',
      title: 'Time \'s up!',
      message: 'Here are the fake news you couldn\'t find',
    };
    chrome.notifications.create('timesUpNotif', notifOptions);
  }
}


function hideStatus() {
  setTimeout(function() {
    $('#status').text('');
  }, 3000);
}

function updateScores() {
  chrome.storage.sync.get(['score', 'time', 'points'], function(results){
    $('#score').text(`${results.score}/5`);
    $('#points').text(results.points);
    updateTime(results.time);
  });
}

var levelNames = ['Ogre', 'Swordsman', 'Viking', 'Magician', 'Grandmaster'];


$(document).ready(function () {
  updateScores();

  $('#checkHeadline').click(function(){
    var submission = $('#headline').val();
    chrome.storage.sync.get(['score', 'points', 'level', 'posts','remainingAttempts'], function(response){
      if (response.remainingAttempts == 0) {
        $('#status').text('You ran out of attempts! Here are the fake articles.');
        hideStatus();
      } else if (submission == response.posts[0].siteUrl) {
        if (response.posts[0].done) {
          $('#status').text('You have already entered this!');
          hideStatus();
        } else {
          var score = response.score + 1;
          var points = response.points + 50;
          var level = response.level

          if (score == 5) {
            level += 1
            $('#status').text(`Congrats for getting all 5 right! You are now a ${levelNames[level]}🎉`);
            $('#video').html('<video controls autoplay width-"400px"><source src="gm.mp4" type="video/mp4"></video>');
          } else {
            $('#status').text('Correct! You earned 50 points :)');
          }
          response.posts[0].done = true;
          chrome.storage.sync.set({ score, points, posts: response.posts, level });
          updateScores();
        }
      } else {
        var remainingAttempts = response.remainingAttempts - 1;
        chrome.storage.sync.set({ remainingAttempts });
        $('#status').text(`Wrong! You got ${remainingAttempts} remaining attempts today.`);
      }
    });
  });
});


function onWindowLoad() {
  var message = document.querySelector('#message');
  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
    console.log("hello");
  });

  // Get the input field
  var input = document.getElementById("headline");

  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function(event) {
      console.log("entered keyup event listener");
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("checkHeadline").click();
    }
  });

}

window.onload = onWindowLoad;
