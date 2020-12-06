window.onload = function() {
  var a =document.getElementById('box');
  a.style.transform = "translate(500px)";
  a.style.transitionDuration="1s";
    document.querySelector('span').animate(
    [
        { opacity: '0' },
        { opacity: '1' }   
      ], {
        duration: 5000,
        easing: 'ease-out',
        fill: 'forwards',
      }
  );

  
  
}

