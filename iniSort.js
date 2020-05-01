/* Sort the text in translated .ini file into its original order.
 Author: maboroshin
 Version: 0.4 (20200415) : incomplete
 License: MIT
 */
// At first, You set below, and these file with UTF-16LE
var SourceFile = "Default.lng";
var CompareFile = "Japanese.lng";


/* incomplete
var lenArg = WScript.Arguments.length;
if (lenArg == 2)
  drugAndDrop();
*/

var a = textToArray(SourceFile);
var b = textToArray(CompareFile);

//debug(a[5]);
//debug(b[5]);
var c = [];
var sEq = "=";

for (var i in a) {
  var isSameAll = false;
  var isSameName = false;
  var currentSection = "";
  var includeEq = (a[i].indexOf(sEq) != -1);

  if (includeEq === false) {
    if (a[i] === "") { // brank
      c.push(a[i]);
      continue;
    }
    else 
      for (var j in b)
        if (a[i] == b[j]) {
          isSameAll = true;
          break;
        }
  }
  else
    for (var j in b) {
      var tIndexName = a[i].split(sEq)[0];
      if (tIndexName == b[j].split(sEq)[0]) {
        isSameName = true;
        break;
      }
    }

  var sAt0 = a[i].charAt(0);
  if (sAt0 == "[" && /\]$/.test(a[i]) ) { // find Section
    if (isSameAll) {
      c.push( b.splice(j, 1) );
    }
    else {
      c.push(a[i]);
    }
    currentSection = a[i];
  } else  if (sAt0 == ";" ||
       sAt0 == "#" ) { // find Comment
    if (isSameAll)
      c.push( b.splice(j, 1) );
    else {
      c.push(a[i]);
      c.push( b.splice(j, 1) );
    }
  } else if (includeEq) {
    if (isSameName)
      c.push( b.splice(j, 1) );
    else
      c.push(tIndexName + sEq);
  } else {  // exception
    debug(a[i]);
  }
  
}

saveFile("Output.txt", c.join("\r\n"));

function debug(s) {
  WScript.echo(s);
  WScript.quit();
}
function textToArray(file) {
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var ioMode = 1; // 1:read 2:write 8:append
  var isCreate = false;
  var isUnicode = -1; // 0:ascii -1:unicode
  var a = [];
  with (fso.OpenTextFile(file, ioMode, isCreate, isUnicode)) {
    while (!AtEndOfStream)
      a.push(ReadLine());
    Close();
  }
  return a;
}
function saveFile(file, s) {
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  with (fso.CreateTextFile(file, true, -1))
    write(s), Close();
}


function drugAndDrop() { // incomplete
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var objArgs = WScript.Arguments;
  for (var i = 0; i < objArgs.length; i++) {
    var file = objArgs(i);
    debug(fso.GetAbsolutePathName(file));
  }
}
