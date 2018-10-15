function openHeaderMain() {
  document.getElementById("header-dropdown").style.width = "15vw";
  document.getElementById("body").style.marginLeft = "15vw";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeHeaderMain() {
  document.getElementById("header-dropdown").style.width = "0";
  document.getElementById("body").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

  function headerAngleRight()
{
    document.getElementById("angle-right-content").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.angle-right-img')) {
  
      var dropdowns = document.getElementsByClassName("angle-right-dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function headerUser()
{
    document.getElementById("user-icon-div").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.user-icon-img')) {
  
      var dropdowns = document.getElementsByClassName("user-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function headerAngleDown()
  {
      document.getElementById("angle-down-content-id").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.angle-down-img')) {
  
      var dropdowns = document.getElementsByClassName("angle-down-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function overviewBars()
  {
      document.getElementById("overview-bars-content-id").classList.toggle("show")  }

  window.onclick = function(event) {
    if (!event.target.matches('.bars-menu-class')) {
  
      var dropdowns = document.getElementsByClassName("overview-bars-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
var header = document.getElementById("header-div-2");
var btns = header.getElementsByClassName("default-icon");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-icon");
    current[0].className = current[0].className.replace("active-icon", "default-icon");
    this.className += " active-icon";
  });
}

var header = document.getElementById("nav-section-id");
var btns = header.getElementsByClassName("default");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

var header = document.getElementById("section-div-2-id");
var btns = header.getElementsByClassName("default-filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-filter");
    current[0].className = current[0].className.replace("active-filter", "");
    this.className += " active-filter";
  });
}
