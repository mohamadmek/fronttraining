const button = document.querySelector('.liquid-button');
button.addEventListener('click', () => {
 let count = 0;
 const counter = () => {
  if(count < 100) {
   count ++;
   button.innerText = count + '%';
   button.style.animation = 'wave 5500ms ease-in-out forwards';
  } else {
   clearInterval(animation);
   button.innerHTML = 'done';
  }
 }
 const animation = setInterval(counter, 40);
});