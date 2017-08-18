# pspad-customization
Customization files (syntax, colors, third party scripts) for PsPad

## Supported versions
- 4.6.2 (32bit)
- 5.0 (32bit)

## Package contents
The pspad-customization project contains several items, using various licenses:

### Color schemes
- adjusted_darkness
    - A dark theme. Initially started from the "Oceandepths" theme, this grew to look quite different in the end.
    - Author: Augustin Preda.
    - MIT license.
### Syntax highlighters
- wccoa
    - previously used as PVSS syntax highlighter
    - is used for syntax highlighting for SIMATIC WinCC OA script files.
        - (note: you can find out more about WinCC OA [here](http://etm.at/index_e.asp?id=2&amp;m0id=6))
    - Author: Augustin Preda.
    - MIT license.
- wccoa_cfg
    - previously used as PVSS INI syntax highlighter
    - is used for syntax highlighting for SIMATIC WinCC OA configuration files.
    - Author: Augustin Preda.
    - MIT license.
### Templates (for new files)
- wccoa
    - Author: Augustin Preda.
    - MIT license.
- wccoa_cfg
    - Author: Augustin Preda.
    - MIT license.
### Styler
- AStyle (binary)
    - Source:  http://astyle.sourceforge.net/
    - MIT license.
### Scripts
- AStyle integration
    - Source: http://www.pspad.com/files/pspad/rozsireni/241-AStyleForPSPad.zip
      - (note: for more extensions, go [here](http://www.pspad.com/en/pspad-extensions.php))
    - License: UNCLEAR. 
    - Contains modifications by Augustin Preda.
### General configuration files
These files are added mostly due to me being lazy. I want to use these files right out of the box for a new PsPad installation and have it configured just the way I like it.
- shortcut key definition file (KeyMap.ini)
- overall ini file (PSPad.ini)

## Installation
Take the contents of this archive and overwrite the contents of the PsPad installation directory.
You may skip the general configuration files.
### Scripts recompilation
For scripts, you may need to recompile them after you enter PsPad:
- [Scripts] --> [Recompile scripts]

### Important! 
:warning: If there is no [Scripts] menu in PsPad, you need to go to :
[Settings] --> [System integration] --> enable [Integrated scripting support (WSH)]

### Activating the wccoa syntax and color scheme
Launch PsPad and go to [Settings] --> [Highlighter Settings...] 
![Highlighter settings](https://dezgusty.github.io/pspad-customization/PsPad_Menu_Settings_Highlighters_Settings.png)

Select one of the available Syntax slots (marked in bold writing).
From the Specification tab, select the desired entry in "User Highlighters" (E.g. "wccoa").

![Highlighter wccoa specification](https://dezgusty.github.io/pspad-customization/PsPad_Highlighters_Settings_wccoa.png)

You can also customize the color, by using the Colors tab.
![Highlighter wccoa color](https://dezgusty.github.io/pspad-customization/PsPad_Highlighters_Settings_color.png)

### Usage
Run AStyle reformatter in PsPad: [CTRL] + [ALT] + [G]
