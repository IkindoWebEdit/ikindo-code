
//document.addEventListener('contextmenu', e => {
//    var elements = document.querySelectorAll(':focus');
//    if (elements.length > 0){
//        e.preventDefault();
//        elements.forEach(element => {
//            console.log(element);
//        });
//    }
//  });

var showingSourceCode = false;
var isInEditMode = true;

var oldStyle;
var oldElement;
var toolBoxHTML = "<div><button onclick=\"execCmd('bold');\"><i class=\"fa fa-bold\"><\/i><\/button><button onclick=\"execCmd('italic');\"><i class=\"fa fa-italic\"><\/i><\/button><button onclick=\"execCmd('underline');\"><i class=\"fa fa-underline\"><\/i><\/button><button onclick=\"execCmd('strikeThrough');\"><i class=\"fa fa-strikethrough\"><\/i><\/button><button onclick=\"execCmd('justifyRight');\"><i class=\"fa fa-align-right\"><\/i><\/button><button onclick=\"execCmd('justifyCenter');\"><i class=\"fa fa-align-center\"><\/i><\/button><button onclick=\"execCmd('justifyLeft');\"><i class=\"fa fa-align-right\"><\/i><\/button><button onclick=\"execCmd('justifyFull');\"><i class=\"fa fa-align-justify\"><\/i><\/button><button onclick=\"execCmd('cut');\"><i class=\"fa fa-cut\"><\/i><\/button><button onclick=\"execCmd('copy');\"><i class=\"fa fa-copy\"><\/i><\/button><button onclick=\"execCmd('indent');\"><i class=\"fa fa-indent\"><\/i><\/button><button onclick=\"execCmd('outdent');\"><i class=\"fa fa-dedent\"><\/i><\/button><button onclick=\"execCmd('subscript');\"><i class=\"fa fa-subscript\"><\/i><\/button><button onclick=\"execCmd('superscript');\"><i class=\"fa fa-superscript\"><\/i><\/button><button onclick=\"execCmd('undo');\"><i class=\"fa fa-undo\"><\/i><\/button><button onclick=\"execCmd('redo');\"><i class=\"fa fa-repeat\"><\/i><\/button><button onclick=\"execCmd('insertUnorderedList');\"><i class=\"fa fa-list-ul\"><\/i><\/button><button onclick=\"execCmd('insertOrderedList');\"><i class=\"fa fa-list-ol\"><\/i><\/button><button onclick=\"execCmd('insertParagraph');\"><i class=\"fa fa-paragraph\"><\/i><\/button><button onclick=\"execCommandWithArg('createLink', prompt('Enter a URL', 'http:\/\/'));\"><i class=\"fa fa-link\"><\/i><\/button><button onclick=\"execCmd('unlink');\"><i class=\"fa fa-unlink\"><\/i><\/button><button onclick=\"toggleSource();\"><i class=\"fa fa-code\"><\/i><\/button><button onclick=\"closeEditWindow();\"><i class=\"fa fa-times\"></i><\/button><br><select onchange=\"execCommandWithArg('fontName', this.value);\">    <option value=\"Arial\">Arial<\/option>    <option value=\"Comic Sans MS\">Comic Sans MS<\/option>    <option value=\"Courier\">Courier<\/option>    <option value=\"Georgia\">Georgia<\/option>    <option value=\"Tahoma\">Tahoma<\/option>    <option value=\"Times New Roman\">Times New Roman<\/option>    <option value=\"Verdana\">Verdana<\/option><\/select><select onchange=\"execCommandWithArg('fontSize', this.value);\">    <option value=\"1\">1<\/option>    <option value=\"2\">2<\/option>    <option value=\"3\">3<\/option>    <option value=\"4\">4<\/option>    <option value=\"5\">5<\/option>    <option value=\"6\">6<\/option>    <option value=\"7\">7<\/option>   <\/select>    Fore Color: <input type=\"color\" onchange=\"execCommandWithArg('foreColor', this.value);\"\/>    Background: <input type=\"color\" onchange=\"execCommandWithArg('hiliteColor', this.value);\"\/><\/div>";
var disablehighlight = 0;
var disableaddbtn = 0;
var parentEl;
var oldBtn;
var modal = document.getElementById("myModal");

document.addEventListener("mouseover", e => {
  addbtn(e);

  highlight(e);
  // // highlight the mouseenter target
  // element = document.getElementById("EditField");
  // if (element != null) {
  //   if (element.contains(e.target) || element == e.target) {
  //     return;
  //   }
  // }
  // oldStyle = e.target.style;
  // e.target.style.boxShadow = "inset 0px 0px 0px 2px #C22222"
  // e.target.style.borderRadius = "7px";
  // // reset the color after a short delay
}, false);


function highlight(e){
    // highlight the mouseenter target
  element = document.getElementById("EditField");
  if (element != null) {
    if (element.contains(e.target) || element == e.target) {
      return;
    }
  }
  if (disablehighlight === 0){
    oldStyle = e.target.style;
    e.target.style.boxShadow = "inset 0px 0px 0px 2px #C22222"
    e.target.style.borderRadius = "7px";
    // reset the color after a short delay
  }

}

document.addEventListener("mouseout", e => {
  // highlight the mouseenter target
  if (disablehighlight === 0){
      e.target.style = oldStyle;
  }

});

document.addEventListener('contextmenu', e => {
  mouseOverElement = e.target;
  if (typeof TextField !== 'undefined') {
    closeEditWindow();
  }
  mouseOverElement.style = oldStyle;
  if (mouseOverElement != null) {
    e.preventDefault();
    disableaddbtn = 1;
    insertEditorTextBox(mouseOverElement);
  }
});

document.addEventListener("keydown", e => {
  if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && (e.key == "s" || e.key == "S")) {
    e.preventDefault();
    console.log("Saving...");
  }
  element = document.getElementById("EditField");
  if (element != null) {
  if(e.key == "Escape"){
    closeEditWindow();
    }
  }
});


function saveDocument() {
  alert("Hallo");
}

function execCmd(command) {
  TextField.document.execCommand(command, false, null);
}

function execCommandWithArg(command, arg) {
  if (arg != null) {
    TextField.document.execCommand(command, false, arg);
  }
}

function toggleSource() {
  if (showingSourceCode) {
    TextField.document.getElementsByTagName('body')[0].innerHTML = TextField.document.getElementsByTagName('body')[0].textContent;
    showingSourceCode = false;
  } else {
    TextField.document.getElementsByTagName('body')[0].textContent = TextField.document.getElementsByTagName('body')[0].innerHTML;
    showingSourceCode = true;
  }
}

function closeEditWindow() {
  tempValue = TextField.document.getElementsByTagName('body')[0].innerHTML;
  tempValue = tempValue.replace("<div>","<br>");
  tempValue = tempValue.replace("</div>"," ");
  disableaddbtn = 0;
  console.log(tempValue);
  oldElement.innerHTML = TextField.document.getElementsByTagName('body')[0].innerHTML;
  newdiv.replaceWith(oldElement);
}

function insertEditorTextBox(element) {
  newdiv = document.createElement("div")
  newdiv.id = "EditField";
  oldElement = element;
  var textBox = document.createElement("iframe");
  var toolBox = document.createElement("div");
  toolBox.style.width = "1200px"
  textBox.name = "TextField";
  toolBox.innerHTML = toolBoxHTML;
  newdiv.appendChild(toolBox);
  newdiv.appendChild(textBox);
  element.replaceWith(newdiv);
  TextField.document.designMode = 'On';
  TextField.document.getElementsByTagName('body')[0].innerHTML = element.innerHTML;
}

document.getElementById("modalclose").onclick = function(){
  var modalActive = 0;
  console.log(modalActive)
  disableaddbtn = 0;
}

document.getElementById("addtablesection").onclick = function(){
    if (parentEl.className == "section"){
      prevDL = parentEl;

      // console.log("OP1");
    } else{
      console.log("parentEl nodeName: " + parentEl.nodeName+ " classname: " + parentEl.className)
      var prevDL = getClosest(parentEl, '.section')
      // console.log(prevDL.nodeName)
      // console.log("OP2");
    }
    createSection(prevDL);
}

document.getElementById("addparagraphsection").onclick = function(){
  if (parentEl.className == "section"){
      prevDL = parentEl;

      // console.log("OP1");
    } else{
      console.log("parentEl nodeName: " + parentEl.nodeName+ " classname: " + parentEl.className)
      var prevDL = getClosest(parentEl, '.section')
      // console.log(prevDL.nodeName)
      // console.log("OP2");
    }
  createParagraphSection(prevDL);
}

document.getElementById("addparagraph").onclick = function(){
  createParagraph();
}
function createParagraphSection(elbefore){
  var div = document.createElement("div");
  div.className = "section"
  elbefore.parentNode.insertBefore(div, elbefore.nextSibling)
  var paragraph = document.createElement("p");
  paragraph.className = "col-sm-9";
  paragraph.textContent="fillyourtexthere";
  div.appendChild(paragraph);
}

function createSection(elbefore) {
  var div = document.createElement("div");
  div.className = "section"
  var head = document.createElement("h1");
  head.className = "display-6 pb-2"
  head.textContent = "Testgebiet";
  var list = document.createElement("dl");
  list.className="row";
  //list.textContent = "testliste";
  var artist = document.createElement("dt");
  artist.className="col-sm-3"
  artist.textContent = "Testartist:";
  var names = document.createElement("dd");
  names.className = "col-sm-9";
  names.textContent = "Testname";
  elbefore.parentNode.insertBefore(div, elbefore.nextSibling)
  div.appendChild(head);
  head.parentNode.insertBefore(list, head.nextSibling);
  list.appendChild(artist);
  list.appendChild(names);
}

function createParagraph() {
  var paragraph = document.createElement("p");
  paragraph.className = "col-sm-9";
  paragraph.textContent="fill";
  parentEl.parentNode.insertBefore(paragraph, parentEl.nextSibling);
}

 var getClosest = function (elem, selector) {
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
      if ( elem.matches( selector ) ) return elem;
    }
    return null;
  };

function addbtn(e){
  // if(!$(modal).hasClass("show") && !$(e.target).hasClass('show') && disableaddbtn === 0) {
  //   if (!$(e.target).hasClass('addedBtn')) {
  //     if (!$(e.target).hasClass('popupbtn') && !$(e.target).hasClass('popup')) {
  if(disableaddbtn === 0 && !$(e.target).hasClass('addedBtn')){
            if (oldBtn != null) {
          oldBtn.remove();
        }
        var className = $(e.target).attr('class');
        //console.log(e.target.nodeName);
        parentEl = e.target;
        var btn = createbtn();

        if (parentEl){
                  // console.log(parentEl.nodeName);
        }

        e.target.appendChild(btn);
        oldBtn = btn;
  }
      // }
    // }
  // }
}

$('#myModal').on("hide.bs.modal", function() {
	disableaddbtn = 0;
	disablehighlight = 0;
})

function createbtn(){
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "+";
  btn.type = "button"
  btn.style.fontSize = "10px";
  btn.style.width = "100%";
  btn.style.height = "30px";
  btn.style.bottom = 0;
  btn.className = "addedBtn btn btn-info btn-lg";
  btn.setAttribute("data-toggle", "modal");
  btn.setAttribute("data-target", "#myModal");
  btn.id="addBtn";
  btn.onclick = function(){
    disablehighlight = 1;
    disableaddbtn = 1;
    oldBtn.remove();
  }
    return btn;
}