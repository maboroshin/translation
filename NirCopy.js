/*
  Genelate .ini file from NirSoft's exe
  Please drug&drop to this script.
  Author: maboroshin
  License: MIT
  Version: 2020-10-27
*/
var VERSION = "1.10"; // NirSoft version;
var LANG = "ja"; // ini prefix


var WshShell = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var objArg = WScript.Arguments;

if (objArg.length == 0) {
  var currentFolder = fso.GetParentFolderName(WScript.ScriptFullName);
  debug("Please drug&drop .exe file to this script.");
}

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

  if (/exe/.test(ext)) {
    //debug(f.Name);
    var currentFolder = fso.GetParentFolderName(WScript.ScriptFullName);
    var fileNameHead = f.Name.replace(".exe", "") + "_lng";
    var fileNameExt = ".ini";
    var dir = "\\";

    var iniBase = fso.BuildPath(currentFolder, fileNameHead + fileNameExt);
    var iniTmp = fso.BuildPath(currentFolder, fileNameHead + ".tmp" + fileNameExt);
    var iniVersionEng = fso.BuildPath(currentFolder, fileNameHead + "." + VERSION + "." + "en" + fileNameExt);
    var iniVersionLang = fso.BuildPath(currentFolder, fileNameHead + "." + VERSION + "." + LANG + fileNameExt);

    if (fso.FileExists(iniBase)) {
      debug("Already exists:\n" + fso.getFileName(iniBase));
    }
    else {
      var exeBase = fso.BuildPath(currentFolder, f.Name);
      //debug("run:\n" + exeBase + " /savelangfile");
      WshShell.run(exeBase + " /savelangfile");
      
      while( ! isRunning(f.Name) )
        WScript.sleep(64);
      while (fso.FileExists(iniBase) == false) {
        WScript.sleep(16);
      }
      WScript.sleep(1500); // file is created and then appended to that file.
      
      var fileINI = fso.GetFile(iniBase);
      var size = 0;
      while (fileINI.size < 250 && fileINI.size != size) {
        WScript.sleep(300);
        size = new Number(fileINI.size);
      }
        WScript.sleep(1500);
      
      //debug("Convert\n" + iniBase + "\n" + iniTmp)
      //UTF8toANSI(iniBase, iniTmp);

      var isOverWrite = false;
      if (fso.FileExists(iniVersionEng))
        debug("Already exists:\n" + fso.getFileName(iniVersionEng));
      else
        fso.CopyFile(iniBase, iniVersionEng, isOverWrite);

      if (fso.FileExists(iniVersionLang))
        debug("Already exists:\n" + fso.getFileName(iniVersionLang));
      else
        fso.CopyFile(iniBase, iniVersionLang, isOverWrite);
    }
  }
  else
    debug("Not .exe file\n\n" + "This file: " + f.Name);

}

function UTF8toANSI(input, output) { // It doesn't work in Windows 10, it's in UTF-8. Also CreateTextFile(file false).
  var adodbstreamLoad = new ActiveXObject("ADODB.Stream");
  adodbstreamLoad.Open();
  adodbstreamLoad.Charset = "UTF-8"; // Load char code

  var adodbstreamSave = new ActiveXObject("ADODB.Stream");
  adodbstreamSave.Open();
  adodbstreamSave.Charset = "x-ansi"; // To convert 

  adodbstreamLoad.LoadFromFile(input);
  adodbstreamSave.WriteText(adodbstreamLoad.ReadText());
  adodbstreamLoad.Close();
  adodbstreamSave.SaveToFile(output, 2);
  adodbstreamSave.Close();
}

function wmiObj()
{
  return GetObject("winmgmts:");
}
function isRunning(appzName)
{
  var wmi = wmiObj();
  var w = wmi.InstancesOf("Win32_process");
  var e = new Enumerator(w);
  var rAppzName = new RegExp(appzName, "i");
  with (e)
    for (; !atEnd(); moveNext())
      if (rAppzName.test(item().Name))
        return true;
  return false;
}

function debug(s) {
  WScript.echo(s);
  WScript.quit();
}
