// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.method == "getLocalStorage") {
//       return new Promise((resolve, reject) => {
//         chrome.storage.sync.get(request.key, function(posts){
//           sendResponse({data: posts})
//           resolve("success");
//         });
//       );
//     } else {
//       sendResponse({});
//     }
//
// });

chrome.runtime.onInstalled.addListener(function() {
  $.ajax({
    type: "PUT",
    url: 'http://localhost:5000/article',
    data: JSON.stringify({ "category": "bs"}),
    contentType: "application/json ; charset=utf-8",
    success: function(result) {
      console.log(result);
      chrome.storage.sync.set({ posts: [result]});
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


// Update badge with value from chrome storage
// chrome.storage.onChanged.addListener(function(changes, storageName){
//   chrome.browserAction.setBadgeText({"text": changes.total.newValue.toString()});
// });
