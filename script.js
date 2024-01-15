const ul = document.getElementById("nav-element");
const navLinks = document.querySelectorAll("#nav-element a");

navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        link.style.fontSize = '15px';
        link.style.backgroundColor = 'rgba(255, 255, 255, 0.267)255, 255, 255, 0.26)';
    });

    link.addEventListener('mouseleave', () => {
        link.style.fontSize = '16px';
        link.style.backgroundColor = '';
    });
});

window.addEventListener('scroll', () => {
    const verticalScrollDs = window.scrollY;
    const navbarElement = document.getElementById("nav-element")
    if (verticalScrollDs < 700 && verticalScrollDs >= 0) {
        navbarElement.style.backgroundColor = 'rgb(89, 0, 131)';
    } else if (verticalScrollDs < 1000) {
        navbarElement.style.backgroundColor = 'rgb(20, 0, 131)';
    } else {
      navbarElement.style.backgroundColor = 'rgb(0, 57, 131)';
    }
  });
