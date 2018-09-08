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
$(function(){
  console.log('what');
  chrome.storage.sync.get(['score', 'time', 'points'], function(results){
    $('#score').text(results.score);
    $('#time').text(results.time);
    $('#points').text(results.points);

    if (results.time === 0) {
      var notifOptions = {
        type: 'basic',
        iconUrl: '/img/viking.png',
        title: 'Time \'s up!',
        message: 'Here are the fake news you couldn\'t find',
      };
      chrome.notifications.create('timesUpNotif', notifOptions);
    };
  });
});

$(document).ready(function () {
    $('#checkHeadline').click(function(){
      var submission = $('#headline').val();
      chrome.storage.sync.get("posts", function(response){
          if (submission == response.posts[0].siteUrl) {
            chrome.storage.sync.get(['score', 'points'], function(results){
              console.log('results', results);
              var score = results.score + 1;
              var points = results.points + 50;
              chrome.storage.sync.set({ score, points });
            });
            $('#status').text('Correct! You earned 50 points :)');
            setTimeout(function() {
              $('#status').text('');
            }, 2000);
          } else {
            $('#status').text('Wrong! You got x remaining attempts today.');
            setTimeout(function() {
              $('#status').text('');
            }, 2000);
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

}

window.onload = onWindowLoad;
