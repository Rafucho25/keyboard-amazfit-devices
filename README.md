# keyboard for amazfit devices

A simple keyboard for amazfit band 7(GTS 4, GTS 4 mini and GTS 3 in the future).

## How to install

* Download the utils folder in your zepp os project.

## How it works

* The constructor accept one parameter: the coordinate "y" of the keyboard, this is for example if you want to display something before the keyboard. 
* You can use the file example.js(put in the page folder) to see the keyboard in action 

## How to use(example for band 7)

* Add this line to the page you want to display the keyboard:
 ```javascript
import { keyboard_band7 } from '../../utils/keyboard/keyboard_band7' //add or remove ../ depends of your folder location 
```
* Create an instance:
 ```javascript
const keyboard = new keyboard_band7()
```
* Get text:
 ```javascript
keyboard.text_value
```

## Future updates
* Add numeric keyboard.
* Add symbols keyboard.
* Support for GTS 4, GTS 4 mini and GTS 3.
* Improve the quality of the code.

Let me know if you have any ideas or recommendations.