
const menu = document.getElementById('menu');

Array.from(document.getElementsByClassName('nav-item'))
.forEach((item, index) => {
  item.onmouseover = () => {
    menu.dataset.activeIndex = index
  }
})