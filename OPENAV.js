function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.transform = "translateX(-250px)"; // Ubah efek pergesera
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.transform = "translateX(0)"; // Reset pergeseran
  document.body.style.backgroundColor = "white";
}