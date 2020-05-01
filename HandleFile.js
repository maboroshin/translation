/*
  File processing batch file for FolderChangesView (https://www.nirsoft.net/utils/folder_changes_view.html)
  - F9 -> Execute command mode: Execute command only when new item is added (新たにファイルが追加された場合)
  - Command: C:\anypath\HandleFile.js "%FullPath%"
  - Command Type: Command Prompt / Batch File
  or Specify the full path of the file as an argument. e.g. : "HandleFile.js D:\anyfile.zip"
  Author: maboroshin
  License: MIT
  Version: 2020-05-01
*/
var WshShell = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var objArg = WScript.Arguments;

//User Setting, You custumize also can custum processing().
var myDoc = WshShell.SpecialFolders("MyDocuments");
var myDocYM = myDoc + "\\xxx" + getYM();
var myDocMusic = myDoc + "\\xxmp3";
var myDownload = fso.GetParentFolderName(myDoc) + "\\Downloads";

if (objArg.length == 0) // quit (+debug)
  debug(
    "Arguments is nothing.\n\nDebug path:\n" +
    myDoc + "\n" + myDocYM + "\n" +
    myDownload + "\n");

var objFile = objArg.Item(0);
if (fso.FolderExists(objFile)) // If path is folder, quit
  WScript.quit();

var ext = fso.GetExtensionName( objFile );
//if (/tmp|crdownload/i.test(ext) == true)
  if (fso.FileExists(objFile)) {
    try {
      var f = fso.GetFile( objFile );
      processing(f, ext);
     } catch(e) {;}
  }

function processing(f, ext) {
  //debug(f.Name + "\nExt:  " + ext + "\nisExt " + (/exe|zip|7z|iso/.test(ext)) );
  if (f.Name == "___moveTest.txt") // for debug
    if (f.Size < 1000)
      f.Move( fso.BuildPath(myDoc, f.Name) );

  if (/ini/.test(ext)) {
    checkAndMove(f, 128, myDoc + "\\_ini", true);
  }

  if (/exe|zip|7z|iso|lng/.test(ext)) {
    if (f.name.indexOf("Notepad3Portable") != -1 && f.name.indexOf(".paf.exe.7z") != -1)
      f.name = f.name.replace(".7z", "");
    checkAndMove(f, 500, myDownload);
  }

  if (/mp4|flv/.test(ext)) {
    if ( (f.name.indexOf("VR") != -1 || f.name.indexOf("[VR]") != -1 ) ||
          f.name.indexOf("360VR") != -1 || f.name.indexOf("360vr") != -1)
      f.name = "[VR]" + f.name;
    checkAndMove(f, 1000000, myDocYM, true);
  }
    
  if (/mp3/.test(ext))
    checkAndMove(f, 10000, myDocMusic, true);
  
  // Small files are considered an error.
  function checkAndMove(f, minimumSize, folderTo, isCreateFolder) {
    WScript.sleep(640);
    if (isCreateFolder && fso.FolderExists(folderTo) == false)
      fso.CreateFolder(folderTo);
    if (minimumSize < f.Size)
      f.Move( fso.BuildPath(folderTo, f.Name) );
  }
}
  
/* Other Function */
function getYM() {
  var d = new Date();
  var YYYY = d.getYear()
  var MM = new String(d.getMonth()+1);
  if (MM < 10)
    MM = new String("0") + MM;
  return new String(YYYY) + MM;
}
function debug(s) {
  WScript.echo(s); WScript.quit();
}
