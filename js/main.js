const menuIcon = document.querySelector("#menu-icon");
const navlinks = document.querySelector('.nav-links');

menuIcon.onclick =() => {
  navlinks.classList.toggle("active");
  navlinks.classList.toggle("visit-btn")
}



