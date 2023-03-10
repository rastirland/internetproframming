
function toggleTransparent() {
    const circle = document.getElementById('circle');
    circle.classList.toggle('transparent');
  }
  
  function myLoadFunction() {

    
    const circle = document.getElementById('circle');

    //activates when hoover over click me
    // circle.addEventListener('mouseover', toggleTransparent);
    // circle.addEventListener('mouseout', toggleTransparent);
    // activates when clicked 
    circle.addEventListener('click', toggleTransparent);
  }
  document.addEventListener('DOMContentLoaded', myLoadFunction);








// modifying this to const circle, and using the myload function, used this as abasis for my solution. 
//     function clickFunction() {
//     var element = document.getElementById('myinput');
//     var div = document.getElementById('result');
//     div.firstChild.nodeValue = element.value;
//     }
//     function myLoadFunction() {
//     var element = document.getElementById('myinput');
//     // keyup is being looked for as an action listener
//     element.addEventListener('keyup', clickFunction);
//     }
//     document.addEventListener('DOMContentLoaded', myLoadFunction);