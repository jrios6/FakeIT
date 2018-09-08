'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.get(['score', 'time', 'points'], function(results){
    var score = 0;
    var time = 0;
    var points = 0;
    var level = 0;
    var questionScore = 0;
    if (results.score) score += results.score;
    if (results.time) time += results.time;
    if (results.points) points += results.points;
    if (results.level) level += results.level;
    if (results.questionScore) questionScore += results.questionScore;
    chrome.storage.sync.set({ score, time, points, level, questionScore });
  });

  $.ajax({
    type: "PUT",
    url: 'http://localhost:5000/article',
    data: JSON.stringify({ "category": "bs"}),
    contentType: "application/json ; charset=utf-8",
    success: function(result) {
      console.log(result);
      chrome.storage.sync.set({ posts: [result], time: Date.now(), score: 4, remainingAttempts: 5, level: 3 });
    },
    dataType: 'json'
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.facebook.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'm.facebook.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
