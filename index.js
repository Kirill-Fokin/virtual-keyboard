//  alert('Minimal scope: выполнено \n Basic scope: cмена языка выполненj, но не работает запоминание при рефреше стр, клики мышкой обрабатываются\n extra scope: анимации присутствуют; \n  Technical requirements: ES6 используется: стрелочные ф-ии обрытные ковычки, линтер включен, требования к репозиторию и коммитам выполнены  есть некоторые баги, которые постараюсь пофиксить, и доделать запоминание при рефреше');

let layout = ["`","1","2","3","4","5","6","7","8","9","0","-", "=", "Backspace",
            "Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","DEL",
            "CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter",
            "Shift","~","z","x","c","v","b","n","m",".",",","/","↑","Shift",
			      "Ctrl","Win","Alt"," ","Alt","←","↓","→"];

let Rus_layout = ["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
"Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","DEL", "CapsLock",
"CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter",
"Shift","я","ч","с","м","и","т","ь","б","ю",".","↑","Shift",
"Ctrl","Win","Alt"," ","Alt","←","↓","→","Ctrl"

];

let layoutCaps = ["`","1","2","3","4","5","6","7","8","9","0","-", "=", "Backspace",
            "Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\","DEL",
            "CapsLock","A","S","D","F","G","H","J","K","L",";","'","Enter",
            "Shift","~","Z","X","C","V","B","N","M",".",",","/","↑","Shift",
			      "Ctrl","Win","Alt"," ","Alt","←","↓","→"];

let Rus_layotCaps = ["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
"Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Ч","Ъ","\\","DEL", "CapsLock",
"CapsLock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Enter",
"Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",".","↑","Shift",
"Ctrl","Win","Alt"," ","Alt","←","↓","→","Ctrl"

];

localStorage.setItem('language', 'ENG');



// let layoutLanguage = localStorage.getItem('language')
let curArray = layout;
let bigKeys = ["Backspace", "CapsLock", "Enter", "Cntrl", "Tab", "Shift",]

let anotherColorKeys = ["`","DEL","Backspace", "Win","Alt", "↑", "↓", "←", "→", "CapsLock", "Enter", "Ctrl", "Tab", "Shift", " "]

const body = document.querySelector('body')
let keys  = document.querySelectorAll('.key')
// язык layout

let capsEnaible = false;


let mainTitle = document.createElement('h1');
mainTitle.textContent = 'RSS Виртуальная клавиатура'
body.appendChild(mainTitle)

//fielfContainer
let fieldContainer = document.createElement('div');
fieldContainer.classList.add('field__container')
body.appendChild(fieldContainer)


let languageIcon = document.createElement('img');
languageIcon.classList.add('language')
languageIcon.src = "assets/bristish.png"
body.appendChild(languageIcon)



//create textArea 
let textArea = document.createElement('textarea');
textArea.classList.add('keyboard__area')
fieldContainer.appendChild(textArea);

let keyboardContainer =   document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
fieldContainer.appendChild(keyboardContainer)

//line creation
function createLine () {
  for (let i = 0; i < 5; i++) {
    let keyboardLine = document.createElement('div');
    keyboardLine.classList.add('keyboard-line')
    keyboardContainer.appendChild(keyboardLine)
  }
}

createLine ()

//advice-block
let adviceBlock =   document.createElement('div');
adviceBlock.classList.add('advice')
adviceBlock.textContent = 'press cntrl + ALT to change Language клавиутра сделана на MacOS'
fieldContainer.appendChild(adviceBlock);
let adviceBlock2 =   document.createElement('div');
adviceBlock2.classList.add('advice')
adviceBlock2.textContent = 'клавитура сделана на MacOS'
fieldContainer.appendChild(adviceBlock2);
let keyboardLines  = document.querySelectorAll(".keyboard-line")
//key creation


function initKeys (start , end , line) {
  // let curArray = (layoutLanguage == 'ENG') ? layout : Rus_layout;

  // capsEnaible === false ? curArray: curArray  += `Caps`
  if (  localStorage.getItem('language') == "ENG") {
    if (capsEnaible === false) {
        curArray = layout
    } else {
      curArray = layoutCaps
    }
  } else {
    if (capsEnaible === false) {
       curArray = Rus_layout;
    } else {
       curArray = Rus_layotCaps
    }
  }

  for (let i = start; i < end; i++) {
      let newKey = document.createElement('div');
      newKey.classList.add('key')
      if ( bigKeys.includes(curArray[i]) ) {
        newKey.classList.add('key-big') 
      }
      if (layout[i] == ' ' ) {
        newKey.classList.add('key-big2') 
      }
      if ( anotherColorKeys.includes(curArray[i]) ) {
       newKey.classList.add('key-another-color') 
      }
      newKey.textContent =`${curArray[i]}`;
      keyboardLines[line].appendChild(newKey)
  }
}
  changeLangueage()

let keyboardLine  = document.querySelector('.keyboard-line')



//обработка кликов по клавишам 
fieldContainer.addEventListener('click', function getGray(e) {
  if ((e.target.classList.contains('key'))|| (e.target.classList.contains('key-another-color'))) {
    let target = e.target
    target.classList.add('key-animation')
    target.classList.add('gray')
    setTimeout(function getOriginalColor(e){
    target.classList.remove('gray')
    target.classList.remove('key-animation')
    }, 300 )
   if (target.textContent == 'Backspace') {
    textArea.textContent =  (textArea.textContent).slice(0, -1)
   } else if (target.textContent == 'Tab') {
    textArea.textContent += '    '
    textArea.textContent =  (textArea.textContent).slice(0, -1)
   } else if (target.textContent == 'Alt') {
      console.log('ничего')
   } else if (target.textContent == 'Shift') {
    console.log('ничего')
   } else if (target.textContent == 'Enter') {
    textArea.textContent += '\n '
  } else if (target.textContent == 'ControlLeft') {
    textArea.textContent += '\n '
    
   } else if (target.textContent == 'Ctrl') {
    console.log('ничего   ')
   } else if (target.textContent == 'CapsLock') {
    console.log('ничего ')
   } else if (target.textContent == 'Win') {
    console.log('ничего ')
   } else if (target.textContent == 'DEL') {
    console.log('ничего ')
   }
   else{
    textArea.textContent += target.textContent
   }
  } 
}
)


function changeLangueage() {
  keyboardLines.forEach(el => keyboardContainer.removeChild(el))
  createLine ()
  if ( localStorage.getItem('language') === 'ENG') {
    localStorage.language = 'RUS';

   keyboardLines  = document.querySelectorAll(".keyboard-line")
   //инициализация клавиатуры 
   initKeys (0,14 , 0)
   initKeys (14,30 , 1)
   initKeys (30,43, 2)
   initKeys (43,56 , 3)
   initKeys (56, 64, 4)

  //  languageIcon.src = "assets/russian.png"
  } else { 
    localStorage.language = 'ENG';
   keyboardLines  = document.querySelectorAll(".keyboard-line")
      //инициализация клавиатуры 
   initKeys (0,14 , 0)
   initKeys (14,29 , 1)
   initKeys (29,42, 2)
   initKeys (42,56 , 3)
   initKeys (56, 64, 4)
   }
  //  console.log(layoutLanguage);

  //  languageIcon.src = "assets/brisish.png"
   
}

fieldContainer.addEventListener('click', function getName(e) {
  if (e.target.classList.contains('key')) {
    console.log(e.target.textContent)
  }  
})

//запись в текстареа, того, что набрано клавишами
document.addEventListener('keydown', function getKek(e) {
  console.log(e.key)
    if (bigKeys.includes(e.key)) {
      console.log('ehhfff')
    } else {
      if (e.key == 'ArrowUp') {
        textArea.textContent += '↑'
      }
      else if (e.key == 'ArrowLeft') {
        textArea.textContent += '←'
      }
      else if (e.key == 'Control') {
        textArea.textContent += ''
      }
      else if (e.key == 'ArrowRight') {
        textArea.textContent += '→'
      }
        else if (e.key == 'ArrowDown') {
          textArea.textContent += '↓'
        }
        else if (e.key == 'Alt') {
          console.log('Нажали на alt')
        }
        else if (e.key == ' ') {
          textArea.textContent += ' '
        }
       
      else { 
        if (e.key !== 'Meta') {
      textArea.textContent += e.key
        }
      }
    }

   keys  = document.querySelectorAll('.key')
  keys.forEach(el => {
   if(el.textContent == e.key) {
    el.style.backgroundColor = 'gray'
    setTimeout(() => {
      !el.classList.contains('key-another-color') ?
      el.style.backgroundColor = 'rgb(19, 19, 19)': el.style.backgroundColor = 'rgb(46, 46, 46';
    }, 400)
   }
  })
})

function runOnKeys() {
  let pressed = new Set();
  document.addEventListener('keydown', function(event) {
    console.log(event.code)
    pressed.add(event.code);
    let codes = ['AltLeft', 'ControlLeft']
    for (let code of codes) { 
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    changeLangueage()
  });
  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });
}

runOnKeys()

// change Language 


document.addEventListener('keydown', function isCaps(e) {
  if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') { 
 
    keys.forEach(el => {
      if(el.textContent == e.key) {
       el.classList.add('red')
    console.log('нажато')
      }})
      changeLangueage()
  } 

} )


document.addEventListener('keyup', function isCaps(e) {
  if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
    localStorage.language = localStorage.language == 'ENG' ? 'RUS' : 'ENG'  
    keys.forEach(el => {
      if(el.textContent == e.key) {
       el.classList.remove('red')
    console.log(e.code)
      }})
      
      changeLangueage()
  } 
  else if (e.code == 'CapsLock') {
    if (e.code == 'CapsLock') {  
      localStorage.language = localStorage.language == 'ENG'? 'RUS': 'ENG'
      if (capsEnaible == false) {
        keys.forEach(el => {
          if(el.textContent == e.code) {
           el.classList.add('red')
          } })
          changeLangueage()
          capsEnaible = true;
      } else {
        keys.forEach(el => {
          if(el.textContent == e.code) {
           el.classList.remove('red')
          } })
          changeLangueage()
          capsEnaible = false;

      }
    }
   
  } 
} )



languageIcon.addEventListener('click', runOnKeys)

// document.addEventListener('click', (e) => console.log(e.code))


setInterval(function(){
  var focusbox;
  focusbox = document.getElementById("part_to_search");
  focusbox.focus();
 }, 10);
