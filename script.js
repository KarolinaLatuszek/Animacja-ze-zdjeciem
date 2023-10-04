const icon = document.querySelector('.fa-arrow-down')
const btn = document.querySelector('.arrow')
const picture = document.querySelector('.item1')

console.log(icon, btn, picture);

function show(){
  picture.classList.toggle('show')

  if (picture.classList.contains('show')) {
    icon.style.rotate = '180deg'
}
else{
  icon.style.rotate = '0deg'
}
}
btn.addEventListener('click', show )

