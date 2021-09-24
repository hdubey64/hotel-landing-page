const navSlide = () => {
   const burger = document.querySelector(".burger");
   const nav = document.querySelector(".nav-links");
   const navLinks = document.querySelectorAll(".nav-links li");

   burger.addEventListener("click", () => {
      //Toggle nav
      nav.classList.toggle("nav-active");
      //Animate Links
      navLinks.forEach((link, index) => {
         if (link.style.animation) {
            link.style.animation = "";
         } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
               index / 7 + 0.4
            }s`;
         }
      });
      // Bueger Animation
      burger.classList.toggle("toggle");
   });
};

navSlide();
function showTime() {
   var date = new Date();
   var h = date.getHours(); // 0 - 23
   var m = date.getMinutes(); // 0 - 59
   var s = date.getSeconds(); // 0 - 59
   var session = "AM";

   if (h == 0) {
      h = 12;
   }

   if (h > 12) {
      h = h - 12;
      session = "PM";
   }

   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;

   var time = h + ":" + m + ":" + s + " " + session;
   document.getElementById("MyClockDisplay").innerText = time;
   document.getElementById("MyClockDisplay").textContent = time;

   setTimeout(showTime, 1000);
}

showTime("");
