
var showingSourceCode = false;
var isInEditMode = true;

var oldStyle;
var oldElement;
var toolBoxHTML = "<div class=\"toolbar\"><ul class=\"tool-list\"><li class=\"tool\">                     <button type=\"button\" data-command='bold' class=\"tool--btn\">                         <i class=\"fas fa-bold \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='italic' class=\"tool--btn\">                         <i class=\"fas fa-italic \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='underline' class=\"tool--btn\">                         <i class=\"fas fa-underline \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='strikeThrough' class=\"tool--btn\">                         <i class=\"fas fa-strikethrough \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='justifyRight' class=\"tool--btn\">                         <i class=\"fas fa-align-right \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='justifyCenter' class=\"tool--btn\">                         <i class=\"fas fa-align-center \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='justifyLeft' class=\"tool--btn\">                         <i class=\"fas fa-align-left \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='justifyFull' class=\"tool--btn\">                         <i class=\"fas fa-align-justify \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='cut' class=\"tool--btn\">                         <i class=\"fas fa-cut \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='copy' class=\"tool--btn\">                         <i class=\"fas fa-copy \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='indent' class=\"tool--btn\">                         <i class=\"fas fa-indent \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='outdent' class=\"tool--btn\">                         <i class=\"fas fa-outdent \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='subscript' class=\"tool--btn\">                         <i class=\"fas fa-subscript \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='superscript' class=\"tool--btn\">                         <i class=\"fas fa-superscript \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='undo' class=\"tool--btn\">                         <i class=\"fas fa-undo \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='redo' class=\"tool--btn\">                         <i class=\"fas fa-redo \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='insertUnorderedList' class=\"tool--btn\">                         <i class=\"fas fa-list-ul \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='insertOrderedList' class=\"tool--btn\">                         <i class=\"fas fa-list-ol \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='insertParagraph' class=\"tool--btn\">                         <i class=\"fas fa-paragraph \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command=\"createlink\" class=\"tool--btn\">                         <i class=\"fas fa-link \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command='unlink' class=\"tool--btn\">                         <i class=\"fas fa-unlink \"></i>                     </button>                 </li>                 <li class=\"tool\">                     <button type=\"button\" data-command=\"toggleSource\" class=\"tool--btn\">                         <i class=\"fas fa-code \"></i>                     </button>                 </li>                                 <li class=\"tool\">                     <select data-command=\"fontName\" class=\"tool--sel\">                         <option value=\"Arial \">Arial</option>                         <option value=\"Comic Sans MS \">Comic Sans MS</option>                         <option value=\"Courier \">Courier</option>                         <option value=\"Georgia \">Georgia</option>                         <option value=\"Tahoma \">Tahoma</option>                         <option value=\"Times New Roman \">Times New Roman</option>                         <option value=\"Verdana \">Verdana</option>                     </select>                 </li>                 <li class=\"tool\">                     <select data-command=\"fontSize\" class=\"tool--sel\">                         <option value=\"1 \">1</option>                         <option value=\"2 \">2</option>                         <option value=\"3 \">3</option>                         <option value=\"4 \">4</option>                         <option value=\"5 \">5</option>                         <option value=\"6 \">6</option>                         <option value=\"7 \">7</option>                     </select>                 </li>      <li class=\"tool\">  <button type=\"button\" data-command=\"closeEditWindow\" class=\"tool--btn\">       <i class=\"fas fa-check \"></i>              </button>          </li>        </ul>         </div>   ";
var textBoxHTML = " <div contenteditable=\"true\" id=\"output\"></div>";
var disablehighlight = 0;
var disableaddbtn = 0;
var parentEl;
var oldBtn;
var modal = document.getElementById("myModal");

document.addEventListener("mouseover", e => {
  addbtn(e);
  highlight(e);
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
  if (typeof(oldBtn) != 'undefined' && oldBtn != null){
    oldBtn.remove();
  }
  let mouseOverElement = e.target;
  if ($(mouseOverElement).hasClass("addedBtn")){
    e.preventDefault();
    return;
  }
  output = document.getElementById("output");
  if (output !== null ) {
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
  var output = document.getElementById("output");
  disableaddbtn = 0;
  oldElement.innerHTML = output.innerHTML;
  newdiv.replaceWith(oldElement);
}

function insertEditorTextBox(element) {
  newdiv = document.createElement("div")
  newdiv.id = "EditField";
  oldElement = element;
  var textBox = document.createElement("div");
  var toolBox = document.createElement("div");
  toolBox.innerHTML = toolBoxHTML;
  textBox.innerHTML = textBoxHTML;
  newdiv.appendChild(toolBox);
  newdiv.appendChild(textBox);
  element.replaceWith(newdiv);

let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');
let selects = document.getElementsByClassName('tool--sel');

for (let sel of selects) {
    console.log(sel);
    sel.addEventListener('change', () => {
        let cmd = sel.dataset['command'];
        let val = sel.value ;
        document.execCommand(cmd, false, val);
    })
}
for (let btn of buttons) {
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];
        if (cmd === 'createlink') {
            let url = prompt("Enter the link here: ", "http:\/\/");
            document.execCommand(cmd, false, url);
        } else if (cmd == 'toggleSource') {
            toggleSource();
        } else if (cmd == 'closeEditWindow') {
            closeEditWindow();
        } else {
            document.execCommand(cmd, false, null);
        }
    })
}

output.innerHTML = element.innerHTML;
}

document.getElementById("modalclose").onclick = function(){
  var modalActive = 0;
  console.log(modalActive)
  disableaddbtn = 0;
}

document.getElementById("addtablesection").onclick = function(){
  let prevDL;
    if (parentEl.className === "section"){
      prevDL = parentEl;
    } else{
      prevDL = getClosest(parentEl, '.section')
    }
    createSection(prevDL);
}

document.getElementById("addparagraphsection").onclick = function() {
  let prevDL;
  if (parentEl.className === "section") {
    if (parentEl.className === "section") {
      prevDL = parentEl;
    } else {
      //console.log("parentEl nodeName: " + parentEl.nodeName+ " classname: " + parentEl.className)
      prevDL = getClosest(parentEl, '.section');
      console.log(prevDL.nodeName);
    }
    //console.log("prevDL nodeName: " + prevDL.nodeName);
    createParagraphSection(prevDL);
  }
}

document.getElementById("addparagraph").onclick = function () {
  createParagraph();
}

function createParagraphSection(elbefore) {
  var div = document.createElement("div");
  div.className = "section"
  elbefore.parentNode.insertBefore(div, elbefore.nextSibling)
  var paragraph = document.createElement("p");
  paragraph.className = "col-sm-9";
  paragraph.textContent = "fillyourtexthere";
  div.appendChild(paragraph);
}

function createSection(elbefore) {
  let div = document.createElement("div");
  div.className = "section"
  let head = document.createElement("h1");
  head.className = "display-6 pb-2"
  head.textContent = "Testgebiet";
  let list = document.createElement("dl");
  list.className = "row";
  //list.textContent = "testliste";
  let artist = document.createElement("dt");
  artist.className = "col-sm-3"
  artist.textContent = "Testartist:";
  let names = document.createElement("dd");
  names.className = "col-sm-9";
  names.textContent = "Testname";
  elbefore.parentNode.insertBefore(div, elbefore.nextSibling)
  div.appendChild(head);
  head.parentNode.insertBefore(list, head.nextSibling);
  list.appendChild(artist);
  list.appendChild(names);
}

function createParagraph() {
  let paragraph = document.createElement("p");
  paragraph.className = "col-sm-9";
  paragraph.textContent = "fill";
  parentEl.parentNode.insertBefore(paragraph, parentEl.nextSibling);
}

let getClosest = function (elem, selector) {
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
};

function addbtn(e) {
  if (disableaddbtn === 0 && !$(e.target).hasClass('addedBtn')) {
    if (oldBtn != null) {
      oldBtn.remove();
    }
    let className = $(e.target).attr('class');
    parentEl = e.target;
    let btn = createbtn();
    if (parentEl) {
    }
    e.target.appendChild(btn);
    oldBtn = btn;
  }
}

$('#myModal').on("hide.bs.modal", function () {
  disableaddbtn = 0;
  disablehighlight = 0;
})

function createbtn() {
  let btn = document.createElement("BUTTON");
  btn.innerHTML = "+";
  btn.type = "button"
  btn.style.fontSize = "10px";
  btn.style.width = "100%";
  btn.style.height = "30px";
  btn.style.bottom = 0;
  btn.className = "addedBtn btn btn-info btn-lg";
  btn.setAttribute("data-toggle", "modal");
  btn.setAttribute("data-target", "#myModal");
  btn.id = "addBtn";
  btn.onclick = function () {
    disablehighlight = 1;
    disableaddbtn = 1;
    oldBtn.remove();
  }
  return btn;
}

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

var csrftoken = getCookie('csrftoken');
$.ajaxSetup({
  beforeSend: function (xhr, settings) {
    console.log(csrftoken);
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader("X-CSRFToken", csrftoken);
    }
  }
});

$("#createbackup").click(function () {
  let pageContent = document.getElementsByClassName("content")[0].outerHTML;
  let URLSegments = new URL(window.location.href).pathname.split('/');
  let pageTitle = URLSegments.pop() || URLSegments.pop(); // Handle potential trailing slash
  console.log(pageTitle);
  console.log(pageContent);
  $.ajax({
    type: "POST",
    url: "/visualeditor/create_backup/",
    data: 'title=' + pageTitle + '&' + 'content=' + pageContent,
    dataType: "text",
    success: function (response) {
      //Do something on success
    }
  });
});
