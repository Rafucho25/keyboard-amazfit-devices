import { keyboard_band7 } from '../../utils/keyboard/keyboard_band7' //add or remove ../ depends of your folder location

Page({
  build() {

    const keyboard = new keyboard_band7()

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 5,
      y: 300,
      w: 184,
      h: 50,
      radius: 12,
      normal_color: 0x0986D4,
      press_color: 0x3CA4CE,
      text: 'Presioname',
      text_size: 20,
      click_func: (button_widget) => {
        hmUI.showToast({
          text: keyboard.text_value 
        })
      }
    })
  }
})
