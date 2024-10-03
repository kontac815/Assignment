'use strict'
let userNameInput = document.getElementById('user-name');
let yourBirthdayInput = document.getElementById('birthday');
let fortuneButton = document.getElementById('submit');
let resultDivision = document.getElementById('result-area');
let year = null;
let month = null;
let day = null;
const luckyList = [
  '「大吉」',
  '「中吉」',
  '「小吉」',
  '「吉」',
  '「凶吉」',
  '「大凶」',
];



fortuneButton.addEventListener(
  'click',
  ()=>{
    const userName = userNameInput.value
    const yourBirthday = yourBirthdayInput.value
    if (userName.length === 0 | yourBirthday.length === 0){
      return;
    }

    resultDivision.innerText = '';
    const headerDivision = document.createElement('div');
    headerDivision.setAttribute('class', 'card-header text-bg-light');
    headerDivision.innerText = '占い結果';

    const bodyDivision = document.createElement('div');
    bodyDivision.setAttribute('class', 'card-body');

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'card-text');

    const result = lucky(userName, yourBirthday);

    paragraph.innerText = result;
    bodyDivision.appendChild(paragraph);
    
    resultDivision.setAttribute('class', 'card');

    resultDivision.appendChild(headerDivision);
    resultDivision.appendChild(bodyDivision);
    
    console.log(result)
    
  }

)

function lucky(userName, yourBirthday){
  year = new Date(yourBirthday).getFullYear();
  month = new Date(yourBirthday).getMonth();
  day = new Date(yourBirthday).getDate();
  let sumBirthday = year + month + day;
  let sumChar = null;
  
  for (let i = 0; i < userName.length; i++){
    sumChar = sumChar + userName.charCodeAt(i);
  }

  //誕生日の合計と文字コードの合計と現在の西暦を足す
  let sumAll = sumBirthday + sumChar + new Date().getFullYear();
  let remainder = sumAll % luckyList.length;
  let result =  luckyList[remainder];
  result = userName + 'の今年の運勢は' + result + 'です！'
  return result;
}
userNameInput.addEventListener(
  'keydown',
  event => {
    if(event.code === 'Enter'){
      fortuneButton.dispatchEvent(new Event('click'))
    }
  }
)

yourBirthdayInput.addEventListener(
  'keydown',
  event => {
    if(event.code === 'Enter'){
      fortuneButton.dispatchEvent(new Event('click'))
    }
  }
)