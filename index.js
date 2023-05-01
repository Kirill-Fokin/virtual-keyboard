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
      
let bigKeys = ["Backspace", "Caps Lock", "Enter", "Cntrl", "Tab", "Shift",]

let anotherColorKeys = ["`","DEL","Backspace", "Win","ALT", "Up", "Down", "Left", "Right", "Caps Lock", "ENTER", "Ctrl", "Tab", "Shift", " "]


const body = document.querySelector('body')

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

// язык layout
let layoutLanguage = 'ENG'

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
adviceBlock.textContent = 'press CNTRL + ALT to change Language клавиутра сделана на MacOS'
fieldContainer.appendChild(adviceBlock);
let adviceBlock2 =   document.createElement('div');
adviceBlock2.classList.add('advice')
adviceBlock2.textContent = 'клавитура сделана на MacOS'
fieldContainer.appendChild(adviceBlock2);

let keyboardLines  = document.querySelectorAll(".keyboard-line")
//key creation


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

let keyboardLine  = document.querySelector('.keyboard-line')

fieldContainer.addEventListener('click', function getGray(e) {
  if (e.target.classList.contains('key')) {
    let target = e.target
    target.style.backgroundColor = "gray";
    if (target.classList.contains('key')) {
      target.classList.add('key-animation')
    }
    setTimeout(function getOriginalColor(e){
      if (target.classList.contains('.key-another-color')) {
        target.classList
      }
    target.style.backgroundColor = "rgb(19, 19, 19)";
    target.classList.remove('key-animation')
    }, 300 )
   if (target.textContent == 'Backspace') {
    textArea.textContent =  (textArea.textContent).slice(0, -1)
   } else {
    
    textArea.textContent += target.textContent
   }
  }
}
)







fieldContainer.addEventListener('click', function getName(e) {
  if (e.target.classList.contains('key')) {
    console.log(e.target.textContent)
  }  
})




//запись в текстареа, того, что набрано клавишами
document.addEventListener('keydown', function getKek(e) {
  console.log(e.key)
  textArea.textContent += e.key
  let keys  = document.querySelectorAll('.key')
  keys.forEach(el => {
   if(el.textContent == e.key.toUpperCase()) {
    el.style.backgroundColor = 'gray'
    
    setTimeout(() => {
      el.style.backgroundColor = 'black';
    }, 400)
   



   }
  })
 
})





// change Language 

languageIcon.addEventListener('click', function changeLangueage() {
  if (layoutLanguage === 'ENG') {

   layoutLanguage = 'RUS';
   } else { 
      layoutLanguage = 'ENG';
 
   }
   console.log(layoutLanguage);
   let keys = document.querySelectorAll('.key')

   keyboardLines.forEach(el => keyboardContainer.removeChild(el))
   createLine ()
      let newKey = document.createElement('div');
      newKey.classList.add('key')
       keyboardLines  = document.querySelectorAll(".keyboard-line")
      keyboardLines[1].classList.add('red')
      function initKeys (start , end , line) {
        let curArray = (layoutLanguage == 'rys') ? layout : Rus_layout;
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
      initKeys (56, 64, 4)

}
)





  