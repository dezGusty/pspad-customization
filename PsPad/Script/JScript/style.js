/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Code Formatter for PSPad
Filename :     style.js

Created :      10 june 2008
Created by :   Marcio (a.k.a. Marshall)
One Target - Simple Solutions

Instalation :
AStyle.exe need to be installed in a directory named "Styler".
Doc files need to be installed in a directory named "Styler\doc".
The JS (style.js) will need to be installed in a directory named "Script\JScript".

Note :
This script has been tested on all Windows Versions.
You may distribute this script freely, but please keep this header intact.

About Artistic Style :
See more information on the website of author : http : // astyle.sourceforge.net /

Modified by :  Augustin Preda
Date:          2017.04: 
Changes:       customized styles to own liking; updated timings.


 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var module_name = "Code Formatter for PSPad";
var module_ver = "3.2.2";
var module_desc = "Code Formatter for PSPad"
var module_copyright = "Marcio (a.k.a. Marshall)\nOne Target - Simple Solutions\n\ncontains modifications by Augustin Preda";

var fs = new ActiveXObject("Scripting.FileSystemObject");
var wsh = new ActiveXObject("WScript.Shell");
var menu_name = "AStyle";
var editor = newEditor();

function Init() {
   addMenuItem("gus-allman style", menu_name, "Agus", "CTRL+ALT+g");
   addMenuItem("java style",  menu_name, "Ajava", "CTRL+ALT+j");
   addMenuItem("your own code",  menu_name, "Apersonal", "CTRL+ALT+p");
   addMenuItem("About Artistic Style", menu_name, "AStyleInfo");
   addMenuItem("Edit this script", menu_name, "editMe");
   addMenuItem("About Code Formatter", menu_name, "About");
   return;
}

function editMe() {
   editor.openFile(moduleFileName(module_name));
}

function About() {
   var VN = "--- Code Formatter Information ---\nModule: " + module_desc +
   "\nVersion: " + module_ver + "\n\nCreated by: " + module_copyright;
   echo(VN);
}

function MyPath() {
   var Path = modulePath();
   if (Path.length == 0) {
      echo("The path to this script file could not be retrieved");
      return "Not Found";
   }
   return Path.substr(0, Path.lastIndexOf("\\Script\\JScript\\")) + "\\";
}

function StyleCmd(tip){
   try {
      editor.assignActiveEditor();
      editor.saveFile();
      var myFile = editor.fileName();
      if (fs.FileExists(MyPath() + "\\Styler\\AStyle.exe")) {
         command  = MyPath() + "Styler\\AStyle.exe " + tip + " --options=none --suffix=none " + myFile;
         logClear();
         var oExec = wsh.Exec(command);
         var stdOut = oExec.StdOut;
         while ( ! stdOut.AtEndOfStream) {
            logAddLine(stdOut.ReadLine().replace(/[\r\n]/g, ''));
         }
         while (oExec.Status == 0) {
            sleep(200);
         }
         editor.reloadFile();
      }
      else {
         echo ("This script needs AStyle installed in " + MyPath() + "\Styler\nDownload AStyle from http://astyle.sourceforge.net/" );
      }
   }
   catch(err) {
      txt = "There was an error on StyleCmd.\n\n";
      txt += "Error description: " + err.description + "\n\n";
      txt += "Click OK to continue.\n\n";
      echo(txt);
      return;
   }
}

function Agus(){
   StyleCmd("--style=allman --indent=spaces=2 --align-reference=type --indent-col1-comments --break-blocks --pad-header --pad-oper --add-brackets --mode=c");
}
function Ajava(){
   StyleCmd("--style=java");
}
function Apersonal(){
   try {
      var command = inputText("Please enter your code", "--style=allman");
      if (command != null && command != "") {
         StyleCmd(command);
      }
   }
   catch(err) {
      txt = "There was an error on Apersonal.\n\n";
      txt += "Error description: " + err.description + "\n\n";
      txt += "Click OK to continue.\n\n";
      echo(txt);
      return;
   }
}

function AStyleInfo(){
   try {
      if (fs.FileExists(MyPath() + "\\Styler\\doc\\index.html")) {
         command = MyPath() + "Styler\\doc\\index.html";
         command = command.replace(/ /g, '%20');
         command  = "%ProgramFiles%\\Internet Explorer\\iexplore.exe file:///" + command.replace(/\\/g,'/');
         var oExec = wsh.Exec(command);
         while (oExec.Status == 0) {
            sleep(200);
         }
      }
      else {
        var message = "This script needs AStyle documentation installed in " + MyPath() + "\Styler\nDownload AStyle from http://astyle.sourceforge.net/"; 
        if (fs.FileExists(MyPath() + "\\Styler\\AStyle.exe")) {
          message += "\n\nAStyle is present at [" + MyPath() + "\\Styler\\AStyle.exe]\n\n";
          
          // Augustin Preda, 2017.04.25: 
          // Using the Exec command has the unfortunate side-effect of a command prompt window appearing and dissappearing very quickly
          // The Run command can be executed in a hidden mode, but does not support streaming.
          // A possible compromise could be (as found here: https://www.computing.net/answers/programming/vbs-hide-exec/21488.html)
          // to use 2 scripts
          // 
          // The trick is to use two scripts. The first script calls CSCRIPT.EXE to run the second script in a hidden console window.
          // It's in this hidden second script you can do your work.
          // Consider the following example:
          // A.vbs
          // 
          // CreateObject("WScript.Shell").Run "cscript B.vbs", 0, True
          // 
          // B.vbs
          // 
          // Set i = CreateObject("WScript.Shell").Exec("cmd /c dir c:\ /a/s")
          // CreateObject("Scripting.FileSystemObject").OpenTextFile( _
          // "out.txt", 2, True).WriteLine i.StdOut.ReadAll
          
          if (true) {
            // Exec mode.
            command = MyPath() + "\\Styler\\AStyle.exe --version";
            var oExec = wsh.Exec(command);
            var stdOut = oExec.StdOut;
            while ( ! stdOut.AtEndOfStream) {
              message += stdOut.ReadLine().replace(/[\r\n]/g, '');
            }
            while (oExec.Status == 0) {
              sleep(200);
            }
          } else {
            // RUn mode.
            // TODO: implement later...
          }
          
        }
        
        echo(message);
      }
   }
   catch(err) {
      txt = "There was an error on AStyleInfo.\n\n";
      txt += "Error description: " + err.description + "\n\n";
      txt += "Click OK to continue.\n\n";
      echo(txt);
      return;
   }
}
