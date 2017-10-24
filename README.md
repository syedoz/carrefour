# Project Description

This project is built using SASS as css preprocessor, You can find CSS source files in SASS folder.
The compressed output from SASS is in css folder which is linked to HTML file.

#Login form features

Login form textfileds has placeholders which uses pure css animations.
That works only if the filed is empty.

Validation :

If the filed is left empty it will show an error as shown in design.
The error will disappear as soon as user starts typing in the textbox.

Login Authentication:

Form uses login credentials from file creds.php located in login/ folder.
It sends request via ajax to the file and return error or success message.

If credentials are wrong it will show an error at the bottom of form and the error will disappear as soon as user start to type in textbox.

All the jquery code is in script.js file and every line of code is commented to show what certain code block is for.

#Layout

The page is fully responsive (tested on devices and different browsers).
I've used bootstrap for framework and media queries to adapt responsiveness.

#Search

Search bar has a CSS animation which opens text filed once user click on search icon.
If the search filed has text it will remain open if it is empty it will get closed once user move focus from textbox.

#Qualities
- Because of preprocessor usage the css file is fully compressed and faster to load.
- I've used CSS Animations which are lighter and smooth than jQuery/JS animation.
- Instead of using any validation plugin I've done it in jquery with a small chunck of code, That helped in page speed and avoided extra usage of plugin.