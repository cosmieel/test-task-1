import { addAction, removeAction } from './helpers'
import { mainAnim } from './mainAnim'

const buttons = document.querySelectorAll(".button-list__item")
const tabLinks = document.querySelectorAll(".tablinks")
const tabContent = document.querySelectorAll(".tabcontent")

export const openTabs = (el) => {

  const tabTarget = el.currentTarget
  const action = tabTarget.dataset.action

  console.log(tabTarget);
  console.log(action)
  
  tabLinks.forEach( el => removeAction(el, "active") )
  tabContent.forEach( el => removeAction(el, "active") )
  
  addAction(document.querySelector( `#${action}` ), "active")
  addAction(tabTarget, "active")
}

export const tabs = () => {
  tabLinks.forEach( el => el.addEventListener("click", openTabs) )

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openTabs)
    buttons[i].addEventListener('click', () => {
      addAction(tabLinks[i], "active")
    })
    buttons[i].addEventListener('click', mainAnim)
  }
}

