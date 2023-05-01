let layout = ["`","1","2","3","4","5","6","7","8","9","0","-", "=", "Backspace",
            "Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","line","DEL",
            "Caps Lock","A","S","D","F","G","H","J","K","L",";","'","ENTER",
            "Shift","~","Z","X","C","V","B","N","M",".",",","/","Up","Shift",
			      "Ctrl","Win","ALT"," ","Left","Down","Right"];

let Rus_layout = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
                 "Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","[","]","","DEL",
                 "CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э",";","'","ENTER",
                 "Shift","~","я","ч","с","м","и","т","ь","б","ю",".",",","/","Up","Shift",
                 "Ctrl","Win","ALT"," ","Left","Down","Right"];

let anotherColorKeys = ["`","DEL","Backspace", "Win","ALT", "Up", "Down", "Left", "Right", "Caps Lock", "ENTER",   "Ctrl", "Tab", "Shift", " "]

let bigKeys = ["Backspace", "Caps Lock", "Enter", "Cntrl", "Tab", "Shift",]

const body = document.querySelector('body')

//h1
let mainTitle = document.createElement('h1');
mainTitle.textContent = 'RSS Виртуальная клавиатура'
body.appendChild(mainTitle)

//fielfContainer
let fieldContainer = document.createElement('div');
fieldContainer.classList.add('field__container')
body.appendChild(fieldContainer)

//languageIcon
let languageIcon = document.createElement('img');
languageIcon.classList.add('language')
languageIcon.src = "/bristish.png"
body.appendChild(languageIcon)

// язык layout
let layoutLanguage = 'ENG'

//create textArea 
let textArea = document.createElement('textarea');
textArea.classList.add('keyboard__area')
fieldContainer.appendChild(textArea);

//container for keyboard
let keyboardContainer =   document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
fieldContainer.appendChild(keyboardContainer)

//line creation
function createLIne () {
  for (let i = 0; i < 5; i++) {
    let keyboardLine = document.createElement('div');
    keyboardLine.classList.add('keyboard-line')
    keyboardContainer.appendChild(keyboardLine)
  }
}

createLIne ()



//advice-block
let adviceBlock =   document.createElement('div');
adviceBlock.classList.add('advice')
adviceBlock.textContent = 'press CNTRL + ALT to change Language клавиутра сделана на MacOS'
fieldContainer.appendChild(adviceBlock);
let adviceBlock2 =   document.createElement('div');
adviceBlock2.classList.add('advice')
adviceBlock2.textContent = 'клавитура сделана на MacOS'
fieldContainer.appendChild(adviceBlock2);

const keyboardLines  = document.querySelectorAll(".keyboard-line")
//all keys 


function initKeys (start , end , line) {
  let curArray = (layoutLanguage == 'ENG') ? layout : Rus_layout;
  for (let i = start; i < end; i++) {
    let newKey = document.createElement('div');
    newKey.classList.add('key')
     if ( bigKeys.includes(curArray[i]) ) {
      newKey.classList.add('key-big') 
     }
     if (layout[i] === ' ' ) {
      newKey.classList.add('key-big2') 
     }
     if ( anotherColorKeys.includes(curArray[i]) ) {
      newKey.classList.add('key-another-color') 
     }
     newKey.textContent =`${curArray[i]}`;
     keyboardLines[line].appendChild(newKey)
  }
}
 

 //инициализация клавиатуры
initKeys (0,14 , 0)
initKeys (14,29 , 1)
initKeys (29,42, 2)
initKeys (42,56 , 3)
initKeys (56, 63, 4)

