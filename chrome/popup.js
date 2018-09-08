// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// let changeColor = document.getElementById('changeColor');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
//
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };

function updateTime(prev) {
  var secondsLeft = 24*60*60 - Math.floor((Date.now()-prev)/1000);
  const hoursLeft =  Math.floor(secondsLeft / 3600);
  var minsLeft = Math.floor((secondsLeft - hoursLeft * 3600) / 60)
  secondsLeft = (secondsLeft - hoursLeft * 3600 - minsLeft * 60)
  if (minsLeft < 10) minsLeft = '0' + minsLeft;
  $('#time').text(`${hoursLeft}:${minsLeft}`);
}


function updateScores() {
  chrome.storage.sync.get(['score', 'time', 'points'], function(results){
    $('#score').text(results.score);
    $('#points').text(results.points);
    updateTime(results.time);

    if (secondsLeft <= 0) {
      var notifOptions = {
        type: 'basic',
        iconUrl: '/img/viking.png',
        title: 'Time \'s up!',
        message: 'Here are the fake news you couldn\'t find',
      };
      chrome.notifications.create('timesUpNotif', notifOptions);
    };
  });
}


$(document).ready(function () {
  updateScores();
  $('#checkHeadline').click(function(){
    var submission = $('#headline').val();
    chrome.storage.sync.get("posts", function(response){
      if (submission == response.posts[0].siteUrl) {
        chrome.storage.sync.get(['score', 'points'], function(results){
          var score = results.score + 1;
          var points = results.points + 50;
          chrome.storage.sync.set({ score, points });
          updateScores();
        });
        $('#status').text('Correct! You earned 50 points :)');
        setTimeout(function() {
          $('#status').text('');
        }, 2500);
      } else {
        $('#status').text('Wrong! You got x remaining attempts today.');
        setTimeout(function() {
          $('#status').text('');
        }, 2500);
      }
    });
  });
});



  //
  // $('#spendAmount').click(functiom(){
  //   chrome.store.sync.get('total', function(budget){
  //     var newTotal = 0;
  //     if (budget.total) {
  //       newTotal += parseInt(budget.total);
  //     }
  //
  //     var amount = $('#amount').val();
  //     if(amount) {
  //       newTotal += parseInt(amount);
  //
  //       chrome.storage.sync.set({'total': newTotal}, function(){
  //         if (amount) {
  //           var notifOptions = {
  //             type: 'basic',
  //             iconUrl: 'icon48.png',
  //             title: 'Limit reached!',
  //             message: 'limit reached!'
  //           };
  //           chrome.notifications.create('limitNotif', notifOptions);
  //         }
  //       });
  //       $('#total').text(newTotal);
  //       $('#amount').val('');


// CODE for using jquery to retrieve input value, update chrome stoage and update text fields
// $(function(){
//   chrome.storage.sync.get(['total', 'limit'], function(budget){
//     $('#total').text(budget.total);

//   });
//


chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {

  }
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
