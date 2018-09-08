$(function(){
  $('#saveLimit').click(functiom(){
    var limit = $('#limit').val();
    if(limit){
      chrome.storage.sync.set({'limit': limit}, function(){
        close();
      });
    }
  });

  $('#resetTotal').click(function(){
    chrome.storage.sync.set('limit': 0);
  });
});
