const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Hello World!', 'How are You today?', 'See You next time :)'];
let activeLetter = -10;
let activeText = 0;

const addLetter = () => {

  if (activeLetter >= 0) {
    spnText.textContent += txt[activeText][activeLetter];
  }

  activeLetter++;

  if (activeLetter === txt[activeText].length) {
    activeText++;

    if (activeText === txt.length) {
      return
    }


    return setTimeout(() => {
      activeLetter = -10;
      spnText.textContent = "";
      addLetter();
    }, 1000);

  }



  setTimeout(addLetter, 300);

}

addLetter();
const cursorAnimation = () => {
  spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);
