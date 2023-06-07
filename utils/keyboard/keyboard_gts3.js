export class keyboard_gts3
{
    constructor(_y = 40){
        this.text_value = ''
        this.start_y = _y
        this.isKeyPressed = false
        this.isKeyCapPressed = false
        this.isKeyNumericPressed = false
        this.vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)
         
        hmUI.createWidget(hmUI.widget.STROKE_RECT, {
            x: 1,
            y: this.start_y,
            w: 191,
            h: 36,
            radius: 5,
            color: 0xffffff
        })

        const text_input = hmUI.createWidget(hmUI.widget.TEXT, {
            x: 3,
            y: this.start_y - 2,
            w: 191,
            h: 35,
            text_size: 24,
            color: 0xffffff
        })

        //Create groups
        const GROUP_LETTERS = hmUI.createWidget(hmUI.widget.GROUP)
        const GROUP_ALPHABET = hmUI.createWidget(hmUI.widget.GROUP)
        const GROUP_NUMERIC = hmUI.createWidget(hmUI.widget.GROUP)
        const GROUP_SYMBOLS = hmUI.createWidget(hmUI.widget.GROUP)
        
        const KEY_ABC = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "abc",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                if (this.isKeyPressed) {
                    this.isKeyPressed = false;
                    hideAllLettersButtons()
                } else {
                    this.isKeyPressed = true;
                    showABCButtons()
                }
            }
        })
        
        const KEY_DEF = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "def",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                if (this.isKeyPressed) {
                    this.isKeyPressed = false;
                    hideAllLettersButtons()
                } else {
                    this.isKeyPressed = true;
                    showDEFButtons()
                }
            }
        })
         
        const KEY_GHI = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: 'ghi',
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                if (this.isKeyPressed) {
                    this.isKeyPressed = false;
                    hideAllLettersButtons()
                } else {
                    this.isKeyPressed = true;
                    showGHIButtons()
                }
            }
        })
         
        const KEY_JKL = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "jkl",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                if (this.isKeyPressed) {
                    this.isKeyPressed = false;
                    hideAllLettersButtons()
                } else {
                    this.isKeyPressed = true;
                    showJKLButtons()
                }
            }
        })
        
        const KEY_MN = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "mnñ",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                if (this.isKeyPressed) {
                    this.isKeyPressed = false;
                    hideAllLettersButtons()
                } else {
                    this.isKeyPressed = true;
                    showMNButtons()
                }
            }
        })
        
        const KEY_OPQ = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "opq",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                if (this.isKeyPressed) {
                    this.isKeyPressed = false;
                    hideAllLettersButtons()
                } else {
                    this.isKeyPressed = true;
                    showOPQButtons()
                }
            }
        })

        const KEY_RST = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "rst",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                if (this.isKeyPressed) {
                    this.isKeyPressed = false;
                    hideAllLettersButtons()
                } else {
                    this.isKeyPressed = true;
                    showRSTButtons()
                }
            }
        })
        
        const KEY_UVW = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "uvw",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                if (this.isKeyPressed) {
                    this.isKeyPressed = false;
                    hideAllLettersButtons()
                } else {
                    this.isKeyPressed = true;
                    showUVWButtons()
                }
            }
        })
        
        const KEY_XYZ = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "xyz",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                if (this.isKeyPressed) {
                    this.isKeyPressed = false;
                    hideAllLettersButtons()
                } else {
                    this.isKeyPressed = true;
                    showXYZButtons()
                }
            }
        })
        
        const KEY_CAP = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "CAP",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                if (this.isKeyCapPressed) {
                    KEY_CAP.setProperty(hmUI.prop.MORE, {
                        normal_color: 0x333333,
                        press_color: 0x0986D4,
                        x: 146,
                        y: this.start_y + 60,
                        w: 45,
                        h: 45,
                        text: "CAP",
                        text_size: 20,
                    })
                    this.isKeyCapPressed =  false;
                    setKeysLowerCase(this.start_y);
                } else {
                    KEY_CAP.setProperty(hmUI.prop.MORE, {
                        normal_color: 0x0986D4,
                        press_color: 0x333333,
                        x: 146,
                        y: this.start_y + 60,
                        w: 45,
                        h: 45,
                        text: "CAP",
                        text_size: 20
                    })
                    this.isKeyCapPressed =  true;
                    setKeysUpperCase(this.start_y);
                }
            }
        })
        
        const KEY_NUMBER = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "123",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                showNumericsButon(this.start_y);
            }
        })
        
        const KEY_ALPHABETIC = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "ABC",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                hideNumericsButon(this.start_y);
                hideSymbolsButon(this.start_y);
            }
        })
        
        const KEY_SYMBOL = GROUP_LETTERS.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "!@#",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                showSymbolsButon(this.start_y);
            }
        })
        
        const KEY_SPACE = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 204,
            w: 141,
            h: 45,
            text: "SPACE",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter(' ', text_input);
            }
        })
        
        const KEY_DEL = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 204,
            w: 45,
            h: 45,
            text: "DEL",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0xAD3C23,
            click_func: () => {
                this.removeCharacter(text_input);
            }
        })
        
        const KEY_A = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "a",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideABCButtons();
                this.addCharacter('a', text_input);
            }
        })
    
        const KEY_B = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "b",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideABCButtons();
                this.addCharacter('b', text_input);
            }
        })
    
        const KEY_C = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "c",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideABCButtons();
                this.addCharacter('c', text_input);
            }
        })
        
        const KEY_D = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "d",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideDEFButtons()
                this.addCharacter('d', text_input);
            }
        })
    
        const KEY_E = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "e",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideDEFButtons()
                this.addCharacter('e', text_input);
            }
        })
    
        const KEY_F = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "f",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideDEFButtons()
                this.addCharacter('f', text_input);
            }
        })
        
        const KEY_G = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "g",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideGHIButtons();
                this.addCharacter('g', text_input);
            }
        })
    
        const KEY_H = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "h",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideGHIButtons();
                this.addCharacter('h', text_input);
            }
        })
    
        const KEY_I = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "i",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideGHIButtons();
                this.addCharacter('i', text_input);
            }
        })
        
        const KEY_J = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "j",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideJKLButtons()
                this.addCharacter('j', text_input);
            }
        })
    
        const KEY_K = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "k",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideJKLButtons()
                this.addCharacter('k', text_input);
            }
        })
    
        const KEY_L = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "l",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideJKLButtons()
                this.addCharacter('l', text_input);
            }
        })
    
        const KEY_M = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "m",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideMNButtons()
                this.addCharacter('m', text_input);
            }
        })
    
        const KEY_N = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "n",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideMNButtons()
                this.addCharacter('n', text_input);
            }
        })
    
        const KEY_ENE = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "ñ",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideMNButtons()
                this.addCharacter('ñ', text_input);
            }
        })
        
        const KEY_O = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "o",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideOPQButtons();
                this.addCharacter('o', text_input);
            }
        })
    
        const KEY_P = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "p",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideOPQButtons();
                this.addCharacter('p', text_input);
            }
        })
    
        const KEY_Q = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "q",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideOPQButtons();
                this.addCharacter('q', text_input);
            }
        })
        
        const KEY_R = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "r",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideRSTButtons();
                this.addCharacter('r', text_input);
            }
        })
    
        const KEY_S = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "s",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideRSTButtons();
                this.addCharacter('s', text_input);
            }
        })
    
        const KEY_T = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "t",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideRSTButtons();
                this.addCharacter('t', text_input);
            }
        })
        
        const KEY_U = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "u",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideUVWButtons()
                this.addCharacter('u', text_input);
            }
        })
    
        const KEY_V = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "v",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideUVWButtons()
                this.addCharacter('v', text_input);
            }
        })
    
        const KEY_W = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "w",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideUVWButtons()
                this.addCharacter('w', text_input);
            }
        })
        
        const KEY_X = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "x",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideXYZButtons();
                this.addCharacter('x', text_input);
            }
        })
    
        const KEY_Y = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "y",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideXYZButtons();
                this.addCharacter('y', text_input);
            }
        })
    
        const KEY_Z = GROUP_ALPHABET.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "z",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.isKeyPressed = false;
                hideXYZButtons();
                this.addCharacter('z', text_input);
            }
        })

        //Numeric keys 
        
        const KEY_ONE = GROUP_NUMERIC.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "1",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('1', text_input);
            }
        })
        
        const KEY_TWO = GROUP_NUMERIC.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "2",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('2', text_input);
            }
        })
         
        const KEY_THREE = GROUP_NUMERIC.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: '3',
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('3', text_input);
            }
        })
         
        const KEY_FOUR = GROUP_NUMERIC.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "4",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('4', text_input);
            }
        })
        
        const KEY_FIVE = GROUP_NUMERIC.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "5",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('5', text_input);
            }
        })
        
        const KEY_SIX = GROUP_NUMERIC.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "6",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('6', text_input);
            }
        })

        const KEY_SEVEN = GROUP_NUMERIC.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "7",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('7', text_input);
            }
        })
        
        const KEY_EIGHT = GROUP_NUMERIC.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "8",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('8', text_input);
            }
        })
        
        const KEY_NINE = GROUP_NUMERIC.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "9",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('9', text_input);
            }
        })
        
        const KEY_ZERO = GROUP_NUMERIC.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "0",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('0', text_input);
            }
        })

        //Symbols keys 
        
        const KEY_EXCLAMATION = GROUP_SYMBOLS.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "!",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('!', text_input);
            }
        })
        
        const KEY_AT = GROUP_SYMBOLS.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: "@",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('@', text_input);
            }
        })
         
        const KEY_NUMBER_SIGN = GROUP_SYMBOLS.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            text: '#',
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('#', text_input);
            }
        })
         
        const KEY_MONEY = GROUP_SYMBOLS.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "$",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('$', text_input);
            }
        })
        
        const KEY_PERCENT = GROUP_SYMBOLS.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "%",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('%', text_input);
            }
        })
        
        const KEY_QUESTION = GROUP_SYMBOLS.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            text: "?",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('?', text_input);
            }
        })

        const KEY_AMPERSAND = GROUP_SYMBOLS.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "&",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('&', text_input);
            }
        })
        
        const KEY_OPEN_PARENTHESIS = GROUP_SYMBOLS.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "(",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('(', text_input);
            }
        })
        
        const KEY_CLOSE_PARENTHESIS = GROUP_SYMBOLS.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: ")",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter(')', text_input);
            }
        })
        
        const KEY_SLASH = GROUP_SYMBOLS.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            text: "/",
            text_size: 20,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                this.addCharacter('/', text_input);
            }
        })

        //hide all the groups that contains the individual letter and numeric keys
        hideAllLettersButtons()
        GROUP_NUMERIC.setProperty(hmUI.prop.VISIBLE, false)
        KEY_ALPHABETIC.setProperty(hmUI.prop.VISIBLE, false)
        GROUP_SYMBOLS.setProperty(hmUI.prop.VISIBLE, false)

        function hideABCButtons(){
            KEY_A.setProperty(hmUI.prop.VISIBLE, false)
            KEY_B.setProperty(hmUI.prop.VISIBLE, false)
            KEY_C.setProperty(hmUI.prop.VISIBLE, false)
        }

        function showABCButtons(){
            KEY_A.setProperty(hmUI.prop.VISIBLE, true)
            KEY_B.setProperty(hmUI.prop.VISIBLE, true)
            KEY_C.setProperty(hmUI.prop.VISIBLE, true)
        }

        function hideABCButtons(){
            KEY_A.setProperty(hmUI.prop.VISIBLE, false)
            KEY_B.setProperty(hmUI.prop.VISIBLE, false)
            KEY_C.setProperty(hmUI.prop.VISIBLE, false)
        }

        function showDEFButtons(){
            KEY_D.setProperty(hmUI.prop.VISIBLE, true)
            KEY_E.setProperty(hmUI.prop.VISIBLE, true)
            KEY_F.setProperty(hmUI.prop.VISIBLE, true)
        }

        function hideDEFButtons(){
            KEY_D.setProperty(hmUI.prop.VISIBLE, false)
            KEY_E.setProperty(hmUI.prop.VISIBLE, false)
            KEY_F.setProperty(hmUI.prop.VISIBLE, false)
        }

        function showGHIButtons(){
            KEY_G.setProperty(hmUI.prop.VISIBLE, true)
            KEY_H.setProperty(hmUI.prop.VISIBLE, true)
            KEY_I.setProperty(hmUI.prop.VISIBLE, true)
        }

        function hideGHIButtons(){
            KEY_G.setProperty(hmUI.prop.VISIBLE, false)
            KEY_H.setProperty(hmUI.prop.VISIBLE, false)
            KEY_I.setProperty(hmUI.prop.VISIBLE, false)
        }

        function showJKLButtons(){
            KEY_J.setProperty(hmUI.prop.VISIBLE, true)
            KEY_K.setProperty(hmUI.prop.VISIBLE, true)
            KEY_L.setProperty(hmUI.prop.VISIBLE, true)
        }

        function hideJKLButtons(){
            KEY_J.setProperty(hmUI.prop.VISIBLE, false)
            KEY_K.setProperty(hmUI.prop.VISIBLE, false)
            KEY_L.setProperty(hmUI.prop.VISIBLE, false)
        }

        function showMNButtons(){
            KEY_M.setProperty(hmUI.prop.VISIBLE, true)
            KEY_N.setProperty(hmUI.prop.VISIBLE, true)
            KEY_ENE.setProperty(hmUI.prop.VISIBLE, true)
        }

        function hideMNButtons(){
            KEY_M.setProperty(hmUI.prop.VISIBLE, false)
            KEY_N.setProperty(hmUI.prop.VISIBLE, false)
            KEY_ENE.setProperty(hmUI.prop.VISIBLE, false)
        }

        function showOPQButtons(){
            KEY_O.setProperty(hmUI.prop.VISIBLE, true)
            KEY_P.setProperty(hmUI.prop.VISIBLE, true)
            KEY_Q.setProperty(hmUI.prop.VISIBLE, true)
        }

        function hideOPQButtons(){
            KEY_O.setProperty(hmUI.prop.VISIBLE, false)
            KEY_P.setProperty(hmUI.prop.VISIBLE, false)
            KEY_Q.setProperty(hmUI.prop.VISIBLE, false)
        }

        function showRSTButtons(){
            KEY_R.setProperty(hmUI.prop.VISIBLE, true)
            KEY_S.setProperty(hmUI.prop.VISIBLE, true)
            KEY_T.setProperty(hmUI.prop.VISIBLE, true)
        }

        function hideRSTButtons(){
            KEY_R.setProperty(hmUI.prop.VISIBLE, false)
            KEY_S.setProperty(hmUI.prop.VISIBLE, false)
            KEY_T.setProperty(hmUI.prop.VISIBLE, false)
        }

        function showUVWButtons(){
            KEY_U.setProperty(hmUI.prop.VISIBLE, true)
            KEY_V.setProperty(hmUI.prop.VISIBLE, true)
            KEY_W.setProperty(hmUI.prop.VISIBLE, true)
        }

        function hideUVWButtons(){
            KEY_U.setProperty(hmUI.prop.VISIBLE, false)
            KEY_V.setProperty(hmUI.prop.VISIBLE, false)
            KEY_W.setProperty(hmUI.prop.VISIBLE, false)
        }

        function showXYZButtons(){
            KEY_X.setProperty(hmUI.prop.VISIBLE, true)
            KEY_Y.setProperty(hmUI.prop.VISIBLE, true)
            KEY_Z.setProperty(hmUI.prop.VISIBLE, true)
        }

        function hideXYZButtons(){
            KEY_X.setProperty(hmUI.prop.VISIBLE, false)
            KEY_Y.setProperty(hmUI.prop.VISIBLE, false)
            KEY_Z.setProperty(hmUI.prop.VISIBLE, false)
        }

        function hideAllLettersButtons(){
            hideABCButtons()
            hideDEFButtons()
            hideGHIButtons()
            hideJKLButtons()
            hideMNButtons()
            hideOPQButtons()
            hideRSTButtons()
            hideUVWButtons()
            hideXYZButtons()
        }

        function setKeysUpperCase(_start_y){

            KEY_ABC.setProperty(hmUI.prop.MORE, {
                x: 2,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "ABC",
                text_size: 20
            })

            KEY_DEF.setProperty(hmUI.prop.MORE, {
                x: 50,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "DEF",
                text_size: 20,
            })
             
            KEY_GHI.setProperty(hmUI.prop.MORE, {
                x: 98,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: 'GHI',
                text_size: 20,
            })

            KEY_JKL.setProperty(hmUI.prop.MORE, {
                x: 2,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "JKL",
                text_size: 20
            })

            KEY_MN.setProperty(hmUI.prop.MORE, {
                x: 50,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "MNÑ",
                text_size: 20,
            })
             
            KEY_OPQ.setProperty(hmUI.prop.MORE, {
                x: 98,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: 'OPQ',
                text_size: 20,
            })

            KEY_RST.setProperty(hmUI.prop.MORE, {
                x: 2,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "RST",
                text_size: 20
            })

            KEY_UVW.setProperty(hmUI.prop.MORE, {
                x: 50,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "UVW",
                text_size: 20,
            })
             
            KEY_XYZ.setProperty(hmUI.prop.MORE, {
                x: 98,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: 'XYZ',
                text_size: 20,
            })
        
            KEY_A.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "A",
                text_size: 20,
            })
        
            KEY_B.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "B",
                text_size: 20,
            })
        
            KEY_C.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "C",
                text_size: 20,
            })
        
            KEY_D.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "D",
                text_size: 20,
            })
        
            KEY_E.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "E",
                text_size: 20,
            })
        
            KEY_F.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "F",
                text_size: 20,
            })
        
            KEY_G.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "G",
                text_size: 20,
            })
        
            KEY_H.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "H",
                text_size: 20,
            })
        
            KEY_I.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "I",
                text_size: 20,
            })
        
            KEY_J.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "J",
                text_size: 20,
            })
        
            KEY_K.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "K",
                text_size: 20,
            })
        
            KEY_L.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "L",
                text_size: 20,
            })
        
            KEY_M.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "M",
                text_size: 20,
            })
        
            KEY_N.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "N",
                text_size: 20,
            })
        
            KEY_ENE.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "Ñ",
                text_size: 20,
            })
        
            KEY_O.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "O",
                text_size: 20,
            })
        
            KEY_P.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "P",
                text_size: 20,
            })
        
            KEY_Q.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "Q",
                text_size: 20,
            })
        
            KEY_R.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "R",
                text_size: 20,
            })
        
            KEY_S.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "S",
                text_size: 20,
            })
        
            KEY_T.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "T",
                text_size: 20,
            })
        
            KEY_U.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "U",
                text_size: 20,
            })
        
            KEY_V.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "V",
                text_size: 20,
            })
        
            KEY_W.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "W",
                text_size: 20,
            })
        
            KEY_X.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "X",
                text_size: 20,
            })
        
            KEY_Y.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "Y",
                text_size: 20,
            })
        
            KEY_Z.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "Z",
                text_size: 20,
            })
        }

        function setKeysLowerCase(_start_y){

            KEY_ABC.setProperty(hmUI.prop.MORE, {
                x: 2,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "abc",
                text_size: 20,
            })

            KEY_DEF.setProperty(hmUI.prop.MORE, {
                x: 50,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "def",
                text_size: 20,
            })
             
            KEY_GHI.setProperty(hmUI.prop.MORE, {
                x: 98,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: 'ghi',
                text_size: 20,
            })

            KEY_JKL.setProperty(hmUI.prop.MORE, {
                x: 2,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "jkl",
                text_size: 20,
            })

            KEY_MN.setProperty(hmUI.prop.MORE, {
                x: 50,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "mnñ",
                text_size: 20,
            })
             
            KEY_OPQ.setProperty(hmUI.prop.MORE, {
                x: 98,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: 'opq',
                text_size: 20,
            })

            KEY_RST.setProperty(hmUI.prop.MORE, {
                x: 2,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "rst",
                text_size: 20,
            })

            KEY_UVW.setProperty(hmUI.prop.MORE, {
                x: 50,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "uvw",
                text_size: 20,
            })
             
            KEY_XYZ.setProperty(hmUI.prop.MORE, {
                x: 98,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: 'xyz',
                text_size: 20,
            })
        
            KEY_A.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "a",
                text_size: 20,
            })
        
            KEY_B.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "b",
                text_size: 20,
            })
        
            KEY_C.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "c",
                text_size: 20,
            })
        
            KEY_D.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "d",
                text_size: 20,
            })
        
            KEY_E.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "e",
                text_size: 20,
            })
        
            KEY_F.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "f",
                text_size: 20,
            })
        
            KEY_G.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "g",
                text_size: 20,
            })
        
            KEY_H.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "h",
                text_size: 20,
            })
        
            KEY_I.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 156,
                w: 45,
                h: 45,
                text: "i",
                text_size: 20,
            })
        
            KEY_J.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "j",
                text_size: 20,
            })
        
            KEY_K.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "k",
                text_size: 20,
            })
        
            KEY_L.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "l",
                text_size: 20,
            })
        
            KEY_M.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "m",
                text_size: 20,
            })
        
            KEY_N.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "n",
                text_size: 20,
            })
        
            KEY_ENE.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "ñ",
                text_size: 20,
            })
        
            KEY_O.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "o",
                text_size: 20,
            })
        
            KEY_P.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "p",
                text_size: 20,
            })
        
            KEY_Q.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 108,
                w: 45,
                h: 45,
                text: "q",
                text_size: 20,
            })
        
            KEY_R.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "r",
                text_size: 20,
            })
        
            KEY_S.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "s",
                text_size: 20,
            })
        
            KEY_T.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "t",
                text_size: 20,
            })
        
            KEY_U.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "u",
                text_size: 20,
            })
        
            KEY_V.setProperty(hmUI.widget.MORE, {
                x: 98,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "v",
                text_size: 20,
            })
        
            KEY_W.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "w",
                text_size: 20,
            })
        
            KEY_X.setProperty(hmUI.widget.MORE, {
                x: 2,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "x",
                text_size: 20,
            })
        
            KEY_Y.setProperty(hmUI.widget.MORE, {
                x: 50,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "y",
                text_size: 20,
            })
        
            KEY_Z.setProperty(hmUI.widget.MORE, {
                x: 146,
                y: _start_y + 60,
                w: 45,
                h: 45,
                text: "z",
                text_size: 20,
            })
        }

        function showNumericsButon(){
            GROUP_LETTERS.setProperty(hmUI.prop.VISIBLE, false)
            GROUP_NUMERIC.setProperty(hmUI.prop.VISIBLE, true)
            KEY_ALPHABETIC.setProperty(hmUI.prop.VISIBLE, true)

        }

        function hideNumericsButon(){
            GROUP_NUMERIC.setProperty(hmUI.prop.VISIBLE, false)
            GROUP_LETTERS.setProperty(hmUI.prop.VISIBLE, true)
            KEY_ALPHABETIC.setProperty(hmUI.prop.VISIBLE, false)
        }

        function showSymbolsButon(){
            GROUP_LETTERS.setProperty(hmUI.prop.VISIBLE, false)
            GROUP_SYMBOLS.setProperty(hmUI.prop.VISIBLE, true)
            KEY_ALPHABETIC.setProperty(hmUI.prop.VISIBLE, true)

        }

        function hideSymbolsButon(){
            GROUP_SYMBOLS.setProperty(hmUI.prop.VISIBLE, false)
            GROUP_LETTERS.setProperty(hmUI.prop.VISIBLE, true)
            KEY_ALPHABETIC.setProperty(hmUI.prop.VISIBLE, false)
        }
    }

    //events
    addCharacter(_value, text_input){
        
        this.vibrate.stop()
        this.vibrate.scene = 24
        this.vibrate.start()

        //if CAP key is enabled the letter will be in capital otherwise lower case
        this.isKeyCapPressed ? this.text_value += _value.toUpperCase() : this.text_value += _value;

        text_input.setProperty(hmUI.prop.MORE, {
            text: this.text_value,
        })
    }

    removeCharacter(text_input){
        
        this.vibrate.stop()
        this.vibrate.scene = 24
        this.vibrate.start()
        
        this.text_value = this.text_value.slice(0, -1);

        text_input.setProperty(hmUI.prop.MORE, {
            text: this.text_value,
        })
    }
}