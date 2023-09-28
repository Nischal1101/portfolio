  var typed = new Typed('#element', {
      strings: ['React developer', 'Nodejs Developer' ,'NextJs developer'],
      typeSpeed: 50,
      loop:true,
    smartBackspace: true,
    });
const toggleBtn = document.getElementById('checkbox');
    const root = document.documentElement;
    

    toggleBtn.addEventListener('click', () => {
      
      if (root.getAttribute('data-theme') === 'light') {
  root.setAttribute('data-theme', 'dark');
  
}
else {
  root.setAttribute('data-theme', 'light');
      }
     } );
     const bars = document.getElementById('bars');
const bottomNav = document.querySelector('.bottom_nav');

bars.addEventListener('change', () => {
  if (bars.checked) {
    bottomNav.style.display = 'block';
  } else {
    bottomNav.style.display = 'none';
  }
});