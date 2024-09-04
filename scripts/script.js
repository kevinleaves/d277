function loadNavbar() {
  fetch('/d277/components/navbar.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('navbar').innerHTML = data;
    });
}

window.onload = loadNavbar;
