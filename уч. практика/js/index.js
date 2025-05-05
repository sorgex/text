let project = {
    name: "",
    photo: "",
    text: ""
}


document.getElementById('shareBtn').addEventListener('click', async () => {
    try {
      await navigator.share({
        title: 'Сайт - портфолио',
        text: 'Посмотри этот сайт!',
        url: 'idnex.html',
        
      });
    } catch (err) {
      alert('Ошибка при попытке поделиться:');
    }
  });

  const innerCircle = document.querySelector('.cursor-circle');
  const outerCircle = document.querySelector('.cursor-outer');
  
  let mouseX = 0, mouseY = 0;
  let circleX = 0, circleY = 0;
  let outerX = 0, outerY = 0;
  const ease = 0.1; 
  const outerEase = 0.1; 
  

  function animate() {

      let dx = mouseX - circleX;
      let dy = mouseY - circleY;
      circleX += dx * ease;
      circleY += dy * ease;
      

      let outerDx = mouseX - outerX;
      let outerDy = mouseY - outerY;
      outerX += outerDx * outerEase;
      outerY += outerDy * outerEase;
      

      innerCircle.style.left = `${circleX}px`;
      innerCircle.style.top = `${circleY}px`;
      
      outerCircle.style.left = `${outerX}px`;
      outerCircle.style.top = `${outerY}px`;
      
      requestAnimationFrame(animate);
  }
  
  animate();
  
  document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
  });
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.getElementById('butns')) {
        innerCircle.style.width = '50px';
        innerCircle.style.height = '50px';
        innerCircle.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        innerCircle.style.transition = 'ease .05s';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.getElementById('butns')) {
        innerCircle.style.width = '35px';
        innerCircle.style.height = '35px';
        innerCircle.style.backgroundColor = 'rgba(0, 0, 0, 0.971)';
        innerCircle.style.transition = 'ease .05s';
    }
});



  document.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.onclick) {
          innerCircle.style.width = '50px';
          innerCircle.style.height = '50px';
          innerCircle.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          innerCircle.style.transition = 'ease .05s';
      }
  });
  
  document.addEventListener('mouseout', (e) => {
      if (e.getElementById === 'A' || e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.onclick) {
          innerCircle.style.width = '35px';
          innerCircle.style.height = '35px';
          innerCircle.style.backgroundColor = 'rgba(0, 0, 0, 0.971)';
          innerCircle.style.transition = 'ease .05s';
      }
  });




  

  document.addEventListener('mousedown', () => {
      innerCircle.style.width = '25px';
      innerCircle.style.height = '25px';
      innerCircle.style.transition = 'ease .1s';

  });
  
  document.addEventListener('mouseup', () => {
      innerCircle.style.width = '35px';
      innerCircle.style.height = '35px';
      innerCircle.style.transition = 'ease .1s';
  });



  