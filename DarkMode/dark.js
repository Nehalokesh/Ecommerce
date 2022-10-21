var content = document.getElementsByTagName('body')[0];

var toggle = document.getElementById('toggle');


toggle.addEventListener('click',()=>{
      toggle.classList.toggle('active')
     content.classList.toggle('night')
})