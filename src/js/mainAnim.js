import { addAction, removeAction } from './helpers'


export const main = document.querySelector(".main")
export const mainSect = document.querySelector(".main-section")
export const tabsSect = document.querySelector(".tabs-section")

const tabsSectAddActive = () => { addAction(tabsSect, "active") }, 
      fadeOut = () => { addAction(mainSect, "remove") }, 
      fadeIn = () => { removeAction(tabsSect, "remove") }, 
      drop = () => { addAction(main, "remove") }

export const mainAnim = () => {
  drop()
  
  setTimeout( () => { fadeOut() }, 500 )
  
  tabsSectAddActive()
  
  setTimeout( () => { fadeIn() }, 1000 )
}