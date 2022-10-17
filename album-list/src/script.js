let artist = document.querySelector('input[name="artist"]');
let album = document.querySelector('input[name="album"]');
let year = document.querySelector('input[name="year"]')
let button = document.querySelector('button');
let list = document.querySelector('ul')

function submit(){
const albumItem = document.createElement('li');

 albumItem.innerText = `${artist.value} ${album.value} ${year.value}`;  
list.appendChild(albumItem)
  artist.value = '';
  album.value = '';
  year.value = '';
  
}

button.addEventListener('click', submit);





