const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexBtn');
const bodyBg = document.querySelector('body');
const hex = document.querySelector('.hex');
var copyText;
hexBtn.addEventListener('click', getHex);

function getHex(){
  let hexCol = '#';
  for(var i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexCol += hexNumbers[random];
  }
  bodyBg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
  copyText = hex.innerHTML;
  //copyText.innerText;
  console.log(copyText);

}
function copyhex(){
  document.execCommand("copy");
  alert("Copied the color: "+ copyText);
}
