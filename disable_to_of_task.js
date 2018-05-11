$(document).ready(() => {
  const buttonHTML = '<input type="button" value="TO/REを無効化" class="button" />';
  const replaceToText =  () => {
    const taskContentTextArea = $('#_taskNameInput');
    const orgText = taskContentTextArea.val();
    let replacedText = orgText.replace(/\[To\:.*\]/g, 'TO ');
    replacedText = replacedText.replace(/\[返信.*\]/g, 'RE ');
    replacedText = replacedText.replace(/\[rp.*\]/g, 'RE ');
    taskContentTextArea.val(replacedText);
  };
  const appendDisableButton = () => {
    $(buttonHTML).appendTo('div.addTaskContainer__submitContainer')
      .click(replaceToText)
      .css({'margin-top':'5px'});
  };

  const shortenButtonHTML = '<input type="button" value="TOを短縮する" class="button" />';
  const shortenToDescription =  () => {
    const messageArea = $('#_chatText');
    const orgMessage = messageArea.val();
    let replacedMessage = orgMessage.replace(/(\[To\:[0-9]+\])(.+)(\n)?/mg, '$1');
    // 最後に改行を入れる
    replacedMessage = replacedMessage.replace(/(\[To\:.+\])/, '$1\n');
    messageArea.val(replacedMessage)
  };

  const appendShortenButton = () => {
    $(shortenButtonHTML).prependTo('div.chatInput__submitContainer')
      .click(shortenToDescription);
  };

  setTimeout(appendDisableButton, 3000);
  setTimeout(appendShortenButton, 3000);
});