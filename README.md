# keyboard for amazfit devices

<<<<<<< HEAD
A simple keyboard for amazfit band 7, GTS 4, GTS 4 mini and GTS 3.
=======
A keyboard for amazfit band 7(GTS 4, GTS 4 mini and GTS 3 in the future).
>>>>>>> b141ee2f8ff7bd35b015cfe694489bed2a5fd9e6

## How to install

* Download the utils folder in your zepp os project.

## How it works

* The constructor accept one parameter: the coordinate "y" of the keyboard, this is for example if you want to display something before the keyboard. 
* You can use the file example.js(put in the page folder) to see the keyboard in action.

## How to use(example for band 7)

* Add this line to the page you want to display the keyboard:
 ```javascript
import { keyboard_band7 } from '../../utils/keyboard/keyboard_band7' //add or remove ../ depends of your folder location and replace "keyboard_band7" with the amazfit device you want.
```
* Create an instance:
 ```javascript
const keyboard = new keyboard_band7()
```
* Get text:
 ```javascript
keyboard.text_value
```
## Screenshot and videos
<h3><img align="center" src="https://user-images.githubusercontent.com/16562078/219973882-704b5727-1cbc-400c-b4f6-dcd7a2bb0a05.png"> Default</h3>

https://user-images.githubusercontent.com/16562078/219974414-38b557a4-6451-4e47-a76c-4f4a8877ab73.mp4

## Features
* Alphabetic keyboard.
* Numeric keyboard.
* Symbols keyboard.
* Support uppercase and lowercase letters.
* Symbols keyboard.

## Future updates
<<<<<<< HEAD
* Add more keyboard layouts.
=======
* Add more symbols.
* Support for GTS 4, GTS 4 mini and GTS 3.
>>>>>>> b141ee2f8ff7bd35b015cfe694489bed2a5fd9e6
* Improve the quality of the code.

Let me know if you have any ideas or recommendations.
