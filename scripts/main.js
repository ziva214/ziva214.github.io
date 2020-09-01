let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img2.jpg') {
      myImage.setAttribute('src', 'images/img1.jpg');
    } else {
      myImage.setAttribute('src', 'images/img2.jpg');
    }
}

/*document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}


// 初始化代码：在页面初次读取时进行构造工作：
//if (!localStorage.getItem('name')) {
//  setUserName();
//} else {
//  let storedName = localStorage.getItem('name');
//  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
//}


myButton.onclick = function() {
   setUserName();
};