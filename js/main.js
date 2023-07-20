let subBtn = document.getElementById('subBtn')
let userMail = document.getElementById('userMail')
let emailValidation = document.getElementById('emailValidation')
let backToHomeBtn = document.getElementById('backToHomeBtn')
let successSection = document.getElementById('successSection')
let mainForm = document.getElementById('mainForm')
let userMailSuccess = document.getElementById('userMailSuccess')

let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function subToNewsLetter () {
  if (regex.test(userMail.value)) {
    userMailSuccess.innerHTML = userMail.value
    userMail.value = ``
    emailValidation.innerHTML = ``
    successSub()
    // console.log(localStorage.getItem("mail"))
  } else {
    emailValidation.innerHTML = 'Please Enter Valid Mail'
  }
}
function successSub () {
  successSection.style.display = 'flex'
  mainForm.style.display = 'none'
}
function backToHome () {
  successSection.style.display = 'none'
  mainForm.style.display = 'flex'
}
