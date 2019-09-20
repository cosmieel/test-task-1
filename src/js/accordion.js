import { mainSect } from './mainAnim'

const details = document.querySelectorAll("details");
const body = document.querySelector("BODY");

export default function accordion() {
  for (let i = 0; i < details.length; i++) {
    details[i].addEventListener("toggle", limiter);
    details[i].addEventListener("toggle", toggleClass);
  }
}

const toggleClass = () => {
  body.classList.toggle("active-mobile")
  mainSect.classList.toggle("active-mobile")
}

const limiter = event => {

  if (!event.target.open) {
    return
  } 
    
  const details = event.target.parentNode.children;

  for (let i = 0; i < details.length; i++) {
    if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) 
      continue;
    details[i].removeAttribute("open");
  }
}
