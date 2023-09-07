// const img = document.getElementById('img')
// fetch('https://api.thecatapi.com/v1/images/search')
//   .then(response => response.json())
//   .then(data => img.src = data[0].url)

const img = document.getElementById('img')

fetch('https://api.thecatapi.com/v1/images/search')
 .then(response => {
  if(response.ok){
    response.json().then(data=>img.src = data[0].url)
  }else{
    console.log('oups');
  }
 })
