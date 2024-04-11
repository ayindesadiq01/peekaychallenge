'use strict';
const addBtn = document.querySelector('.add-btn');
let titleField = document.querySelector('.title-box');
let authorField = document.querySelector('.author-box');
let bookBox = document.querySelector('.list-boxes')

let listArray = [];

bookBox.innerHTML = '';

window.addEventListener('load', function(){
  let storedData = localStorage.getItem('listArray');
  if(storedData) {
    listArray = JSON.parse(storedData)
    console.log(listArray)
  }
})

const bookFtn = function() {

  let bookObj = {
    title: titleField.value,
    author: authorField.value
  }

  listArray.push(bookObj)

  // Save data to local Storage
  localStorage.setItem('listArray', JSON.stringify(listArray))

  const bookList = `
  <div class="list-box">
    <p>
    <span class="title">${bookObj.title}</span> 
    by 
    <span class="author">${bookObj.author}</span>
    </p>
    
    <button class="remove-btn">Remove</button>
  </div>
  `

  bookBox.insertAdjacentHTML('afterbegin', bookList)
}



// addBtn.addEventListener('click', bookFtn);
addBtn.addEventListener('click', function(){
  if(!titleField.value || !authorField.value){
    document.querySelectorAll('input').forEach(inP => inP.style.border = '1px solid red')
  } else if(titleField.value && authorField.value) {

    document.querySelectorAll('input').forEach(inP => inP.style.border = '1px solid grey')

    console.log(bookBox)

    bookFtn();
  }
});







