function Menu() {}

Menu.prototype.trigger = (options) => {

  let openingMenu = document.getElementById(options.menu)
  let triggeringElement = document.getElementById(options.trigger)

  triggeringElement.addEventListener(options.triggerEvent, (e) => {

    e.preventDefault()

    let fromClasses = options.from.split((' '))
    fromClasses.forEach((from) => {
      openingMenu.classList.add(from)
    })

    openingMenu.style.transform = 'scale(1)'
    openingMenu.setAttribute('tabindex', '-1')
    window.setTimeout(() => {
      openingMenu.focus()
    }, 100)

    openingMenu.addEventListener('blur', function() {

      this.style.opacity = '0'

      window.setTimeout(() => {
        this.style.transform = 'scale(0)'
        window.setTimeout(() => {
          this.style.opacity = '1'
        }, 100)
      }, 100)

    })

  })

}
