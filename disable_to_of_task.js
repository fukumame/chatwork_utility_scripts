var buttonHTML = '<input type="button" value="TO/RE 無効化" />';
var replaceToText = function () {
  var taskContentTextArea = $('#_taskNameInput');
  var orgText = taskContentTextArea.val();
  var replacedText = orgText.replace(/\[To\:.*\]/g, 'TO ');
  replacedText = replacedText.replace(/\[返信.*\]/g, 'RE ')
  taskContentTextArea.val(replacedText);
}
$(buttonHTML).appendTo('div.addTaskContainer__submitContainer')
.click(replaceToText);
