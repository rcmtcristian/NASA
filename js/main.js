
const menu = document.getElementById('menu');

Array.from(document.getElementsByClassName('nav-item'))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

document.querySelector('#button').addEventListener('click', getFetch)


function getFetch() {
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=5vMi2cTrx5FxYQntPZBssT6KB1HGBS9SXShMc64y&date=${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.explanation)
      if (data.media_type === 'image') {
        document.getElementById('back-image').style.backgroundImage = `url('${data.hdurl}')`
        document.querySelector('iframe').style.display = 'none'
        document.querySelector('img').style.display = 'block'
      } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url
        document.querySelector('img').style.display = 'none'
        document.querySelector('iframe').style.display = 'block'
        
      }

      document.getElementById('des').textContent = "wowo"
      document.getElementsByClassName('dess').textContent = data.explanation
      
    })
    .catch(err => {
      console.log(`error ${err}`)

    });
}