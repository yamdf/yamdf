
/*
  ____________________________________________________________________________________

  NORMAL TEXTFIELDS
  ____________________________________________________________________________________

*/

let textfields = Array.prototype.slice.call(
  document.querySelectorAll('.textfield')
)

textfields.forEach((element) => {

  if(element.getElementsByTagName('input')[0].value !== '')
    element.getElementsByTagName('label')[0].classList.add('focused')

  let border = document.createElement('div')
  border.setAttribute('class', 'border')

  element.appendChild(border)

  element.getElementsByTagName('input')[0].addEventListener('focus', () => {

    element.getElementsByTagName('label')[0].classList.remove('focused')
    element.getElementsByTagName('label')[0].classList.add('active')
    element.getElementsByClassName('border')[0].classList.add('active')

  })

  element.getElementsByTagName('input')[0].addEventListener('blur', () => {

    element.getElementsByTagName('label')[0].classList.remove('active')
    if(element.getElementsByTagName('input')[0].value !== '')
      element.getElementsByTagName('label')[0].classList.add('focused')
    element.getElementsByClassName('border')[0].classList.remove('active')

  })



})
