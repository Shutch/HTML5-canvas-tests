var navOpen = false;

function toggleNav() {
  if (navOpen) {
    document.getElementById("sidebar").className = "sidebar--closed";
    document.getElementById("sidebar-tab").className = "sidebar__tab--closed";
    document.getElementById("sidebar-icon").innerHTML = ">";
    navOpen = false;
  } else {
    document.getElementById("sidebar").className = "sidebar--open";
    document.getElementById("sidebar-tab").className = "sidebar__tab--open";
    document.getElementById("sidebar-icon").innerHTML = "<";
    navOpen = true;
  }
}
