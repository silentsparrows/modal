const searchIcon = document.getElementById("searchIcon");
const searchBar = document.querySelector(".input");

window.onload = function () {
  checkCloak();
}

try {
  searchIcon.style.marginTop = "43px";
  searchIcon.style.marginRight = "109px";

  searchBar.addEventListener("focus", () => {
    document.getElementById("searchIcon").style.marginRight = "269px";
    document.querySelector(".input").style.paddingLeft = "42px";
  });

  searchBar.addEventListener("blur", () => {
    document.querySelector(".input").style.textAlign = "left";
    document.querySelector(".input").removeAttribute("placeholder");
  });
} catch (error) {
  console.log(error);
}

lucide.createIcons();

function checkCloak() {
  var title = localStorage.getItem('cloakTitle');
  var icon = localStorage.getItem('cloakIcon');
  
  if (title) {
    document.title = title;
  } else {
    document.title = 'Modal';
  }
  if (icon) {
    document.querySelector("link[rel~='icon']").href = icon;
  } else {
    document.querySelector("link[rel~='icon']").href = '/assets/img/favicon.png';
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("selectedTheme", theme);
}

document.querySelectorAll(".theme-controller").forEach(function (element) {
  element.addEventListener("change", function () {
    applyTheme(this.value);
  });
});

const savedTheme = localStorage.getItem("selectedTheme");
if (savedTheme) {
  applyTheme(savedTheme);
  document.querySelector('.theme-controller[value="' + savedTheme + '"]',).checked = true;
} else {
  document.querySelector('.theme-controller[value="' + "sunset" + '"]',).checked = true;
}

function go(url) {
  location.href = url;
}