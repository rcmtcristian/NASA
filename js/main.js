//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/




const menu = document.getElementById('menu');

Array.from(document.getElementsByClassName('nav-item'))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

document.querySelector('#button').addEventListener('click', getFetch)

let bool = true

const audioS = document.querySelector('.audio')
const vid = document.getElementById('back-video')

audioS.addEventListener('click', () => {
  audioS.classList.toggle('active')

  if (vid.muted === false) {
    return vid.muted = true;
  } else {
    vid.muted = false
  }

}
)


const ball = document.getElementById('ball')


window.onmousemove = e => {
  const x = e.clientX - ball.offsetWidth / 2,
    y = e.clientY - ball.offsetHeight / 2;

  ball.style.transform = ` translate(${x}px, ${y}px)`

  document.addEventListener("click", () => {
    ball.classList.add("expend");
    setTimeout(() => {
      ball.classList.remove("expend");
    }, 500);
  });



}



document.querySelector('#button').addEventListener('click', getFetch)


function getFetch() {
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=5vMi2cTrx5FxYQntPZBssT6KB1HGBS9SXShMc64y&date=${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      if (data.media_type === 'image') {

        document.getElementById('back-image').style.backgroundImage = `url('${data.hdurl}')`


        document.querySelector('iframe').style.display = 'none'

      } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url
        document.querySelector('iframe').style.display = 'block'

      }

      document.getElementById('des').textContent = data.explanation
      document.getElementById('title').textContent = data.title
      document.getElementById('author').textContent = data.copyright

    })
    .catch(err => {
      console.log(`error ${err}`)

    });
}