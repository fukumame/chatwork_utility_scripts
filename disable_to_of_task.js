$(function(){
  var buttonHTML = '<input type="button" value="TO/REを無効化する" />';
  var replaceToText = function () {
    var taskContentTextArea = $('#_taskNameInput');
    var orgText = taskContentTextArea.val();
    var replacedText = orgText.replace(/\[To\:.*\]/g, 'TO ');
    replacedText = replacedText.replace(/\[返信.*\]/g, 'RE ')
    taskContentTextArea.val(replacedText);
  };
  $(buttonHTML).appendTo('div.addTaskContainer__submitContainer').click(replaceToText);
});

$(function(){
  var buttonHTML = '<input type="button" value="TOを短縮する" />';
  var shortenToDescription = function () {
    var messageArea = $('#_chatText');
    var orgMessage = messageArea.val();
    var replacedMessage = orgMessage.replace(/(\[To\:[0-9]+\])(.+)(\n)/mg, '$1');
    // 最後に改行を入れる
    replacedMessage = replacedMessage.replace(/(\[To\:.+\])/, '$1\n');
    messageArea.val(replacedMessage)
  };
  $(buttonHTML).prependTo('div.chatInput__submitContainer').click(shortenToDescription)
});
