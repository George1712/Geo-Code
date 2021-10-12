// Landing ----------------------------------------------
// Fixed NavBar After Scroll
let nav = document.getElementById("nav");
//
window.addEventListener("scroll", function () {
  if (scrollY >= 140) {
    nav.style.cssText = "position: fixed; top: 0; background-color: #202020";
  } else {
    nav.style.cssText = "position: relative; background-color: none";
  }
});
// Make Toggle Menu Show Links Onclick
let toggle = document.getElementById("toggle");
let links = document.getElementById("links");
//
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active-toggle");
  if (toggle.classList.contains("active-toggle")) {
    links.style.display = "flex";
  } else {
    links.style.display = "none";
  }
});
// Give Nav-Links Active Class Onclick
let navLinks = links.querySelectorAll("li a");
//
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    let activeLink = document.getElementsByClassName("active-link");
    activeLink[0].classList.remove("active-link");
    if (activeLink.length < 1) {
      navLinks[i].classList.add("active-link");
    }
  });
}

// About ----------------------------------------------
// Control Shown Advantages By Adv-Boxes
let advBox = document.querySelectorAll(".adv-box");
let advContent = document.querySelectorAll(".adv-content");
//
for (let i = 0; i < advBox.length; i++) {
  advBox[i].addEventListener("click", function () {
    let active = document.getElementsByClassName("active-adv");
    active[0].classList.remove("active-adv");
    if (active.length < 1) {
      advBox[i].classList.add("active-adv");
    }
    //
    let showen = document.getElementsByClassName("showen-adv");
    showen[0].classList.remove("showen-adv");
    if (showen.length < 1) {
      advContent[i].classList.add("showen-adv");
    }
  });
}

// Services ----------------------------------------------
// Control Showen Paragraphs By Boxes
let chooseBox = document.querySelectorAll(".choose-boxes div");
let chooseContent = document.querySelectorAll(".choose-content p");
//
for (let i = 0; i < chooseBox.length; i++) {
  chooseBox[i].addEventListener("click", function () {
    let activeBox = document.getElementsByClassName("active-box");
    activeBox[0].classList.remove("active-box");
    if (activeBox.length < 1) {
      chooseBox[i].classList.add("active-box");
    }
    //
    let activeP = document.getElementsByClassName("active-p");
    activeP[0].classList.remove("active-p");
    if (activeP.length < 1) {
      chooseContent[i].classList.add("active-p");
    }
  });
}

// Works ----------------------------------------------
// Control Showen Images By Boxes
let workBox = document.querySelectorAll(".work-boxes .work-box");
let picsBox = document.querySelectorAll(".work-pics .pics");
//
for (let i = 0; i < workBox.length; i++) {
  workBox[i].addEventListener("click", function () {
    let activeWork = document.getElementsByClassName("active-work");
    activeWork[0].classList.remove("active-work");
    if (activeWork.length < 1) {
      workBox[i].classList.add("active-work");
    }
    //
    let activePics = document.getElementsByClassName("active-pics");
    activePics[0].classList.remove("active-pics");
    if (activePics.length < 1) {
      picsBox[i].classList.add("active-pics");
    }
  });
}
// Make Love React on Pics
let capIcons = document.querySelector(".work-pics");
let love = capIcons.getElementsByClassName("fa-heart");
//
for (let i = 0; i < love.length; i++) {
  love[i].addEventListener("click", function () {
    love[i].style.cssText = "color: red;";
  });
}

// Scroll To Top Button ----------------------------------------------
let scrollUp = document.querySelector(".scroll-up");
//
window.addEventListener("scroll", function () {
  if (scrollY >= 500) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
});
//
scrollUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
// 

// Scrolling and add active to Sections ----------------------------------------------
window.onscroll = function () {
  let activeLink = document.getElementsByClassName("active-link")
  if (window.scrollY < 450) {
    activeLink[0].classList.remove("active-link")
    document.querySelector(".links li a[href='#home']").classList.add("active-link")
  }if (window.scrollY >= 450) {
    activeLink[0].classList.remove("active-link")
    document.querySelector(".links li a[href='#about']").classList.add("active-link")
  }if (window.scrollY >= 2500) {
    activeLink[0].classList.remove("active-link")
    document.querySelector(".links li a[href='#services']").classList.add("active-link")
  }if (window.scrollY >= 4700) {
    activeLink[0].classList.remove("active-link")
    document.querySelector(".links li a[href='#works']").classList.add("active-link")
  }if (window.scrollY >= 6200) {
    activeLink[0].classList.remove("active-link")
    document.querySelector(".links li a[href='#team']").classList.add("active-link")
  }if (window.scrollY >= 8000) {
    activeLink[0].classList.remove("active-link")
    document.querySelector(".links li a[href='#prices']").classList.add("active-link")
  }if (window.scrollY >= 9200) {
    activeLink[0].classList.remove("active-link")
    document.querySelector(".links li a[href='#contact']").classList.add("active-link")
  }
}
// I Felt In Love With This Programming Lang
