
/*
  ____________________________________________________________________________________

  CHECKBOXES
  ____________________________________________________________________________________

*/

let selectionCheckboxes = Array.prototype.slice.call(
  document.querySelectorAll('input[type="checkbox"]:not(.switch)')
)

selectionCheckboxes.forEach((element) => {

  let checkboxContainer = document.createElement('div')
  checkboxContainer.setAttribute('class', 'checkbox-container')
  checkboxContainer.setAttribute('for', element.id)

  let checkedCheckbox = document.createElement('i')
  if(element.checked)
    checkedCheckbox.setAttribute('class', 'material-icons checked')
  else
    checkedCheckbox.setAttribute('class', 'material-icons checked hidden')

  let notCheckedCheckbox = document.createElement('i')
  if(element.checked)
    notCheckedCheckbox.setAttribute('class', 'material-icons not-checked hidden')
  else
    notCheckedCheckbox.setAttribute('class', 'material-icons not-checked')

  let checkedIcon = document.createTextNode('check_box')
  let notCheckedIcon = document.createTextNode('check_box_outline_blank')

  checkedCheckbox.appendChild(checkedIcon)
  notCheckedCheckbox.appendChild(notCheckedIcon)

  checkboxContainer.appendChild(checkedCheckbox)
  checkboxContainer.appendChild(notCheckedCheckbox)

  element.parentElement.insertBefore(checkboxContainer, element)

})


let selectionCheckboxContainers = Array.prototype.slice.call(
  document.querySelectorAll('.checkbox-container')
)

selectionCheckboxContainers.forEach((element) => {

  element.getElementsByClassName('checked')[0].addEventListener('click', () => {

    document.getElementById(element.getAttribute('for')).checked = false

    element.getElementsByClassName('checked')[0].style.fontSize = '0px'
    element.getElementsByClassName('checked')[0].style.top = '16px'
    element.getElementsByClassName('checked')[0].style.left = '16px'

    element.getElementsByClassName('not-checked')[0].style.fontSize = '24px'
    element.getElementsByClassName('not-checked')[0].style.top = '6px'
    element.getElementsByClassName('not-checked')[0].style.left = '6px'

  })

  element.getElementsByClassName('not-checked')[0].addEventListener('click', () => {

    document.getElementById(element.getAttribute('for')).checked = true

    element.getElementsByClassName('not-checked')[0].style.fontSize = '0px'
    element.getElementsByClassName('not-checked')[0].style.top = '16px'
    element.getElementsByClassName('not-checked')[0].style.left = '16px'

    element.getElementsByClassName('checked')[0].style.fontSize = '24px'
    element.getElementsByClassName('checked')[0].style.top = '6px'
    element.getElementsByClassName('checked')[0].style.left = '6px'

  })

})

/*
  ____________________________________________________________________________________

  SWITCHES
  ____________________________________________________________________________________

*/

let selectionSwitches = Array.prototype.slice.call(
  document.querySelectorAll('input[type="checkbox"].switch')
)

selectionSwitches.forEach((element) => {

  let switchContainer = document.createElement('div')
  if(element.checked)
    switchContainer.setAttribute('class', 'switch-container')
  else
    switchContainer.setAttribute('class', 'switch-container not-checked')
  switchContainer.setAttribute('for', element.id)

  let thumb = document.createElement('div')
  thumb.setAttribute('class', 'thumb')

  let track = document.createElement('div')
  track.setAttribute('class', 'track')

  switchContainer.appendChild(thumb)
  switchContainer.appendChild(track)

  element.parentElement.insertBefore(switchContainer, element)

})


let selectionSwitchContainers = Array.prototype.slice.call(
  document.querySelectorAll('.switch-container')
)

selectionSwitchContainers.forEach((element) => {

  element.getElementsByClassName('thumb')[0].addEventListener('click', () => {

    if(document.getElementById(element.getAttribute('for')).checked) {

      document.getElementById(element.getAttribute('for')).checked = false

      element.getElementsByClassName('thumb')[0].style.left = '8px'
      element.getElementsByClassName('thumb')[0].style.backgroundColor = '#fff'

      element.getElementsByClassName('track')[0].style.backgroundColor = 'rgba(0,0,0,0.38)'

    }
    else {

      document.getElementById(element.getAttribute('for')).checked = true

      element.getElementsByClassName('thumb')[0].style.left = '24px'
      element.getElementsByClassName('thumb')[0].style.backgroundColor = '#6200ee'

      element.getElementsByClassName('track')[0].style.backgroundColor = 'rgba(98,0,238,0.54)'

    }

  })

})
