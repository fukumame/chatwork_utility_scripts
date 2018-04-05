const buttonHTML = '<input type="button" value="TO/REを無効化" class="button" />';
const replaceToText = function () {
  const taskContentTextArea = $('#_taskNameInput');
  const orgText = taskContentTextArea.val();
  let replacedText = orgText.replace(/\[To\:.*\]/g, 'TO ');
  replacedText = replacedText.replace(/\[返信.*\]/g, 'RE ');
  replacedText = replacedText.replace(/\[rp.*\]/g, 'RE ');
  taskContentTextArea.val(replacedText);
};
$(buttonHTML).appendTo('div.addTaskContainer__submitContainer')
  .click(replaceToText)
  .css({'margin-top':'5px'});


const shortenButtonHTML = '<input type="button" value="TOを短縮する" class="button" />';
const shortenToDescription = function () {
  const messageArea = $('#_chatText');
  const orgMessage = messageArea.val();
  let replacedMessage = orgMessage.replace(/(\[To\:[0-9]+\])(.+)(\n)?/mg, '$1');
  // 最後に改行を入れる
  replacedMessage = replacedMessage.replace(/(\[To\:.+\])/, '$1\n');
  messageArea.val(replacedMessage)
};
$(shortenButtonHTML).prependTo('div.chatInput__submitContainer')
  .click(shortenToDescription);