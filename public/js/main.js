"use strict";

// Smooth Scroll Starts
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});
// Smooth Scroll Ends


/*=============== nav ber section hamburger menu start ===============*/
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const hamburgerCross = document.getElementById("hamburger-cross");
  const mobileMenu = document.getElementById("mobile-menu");

  // Open menu when clicking the hamburger icon
  hamburgerMenu.addEventListener("click", function () {
    console.log("Opening menu...");
    mobileMenu.classList.add("show-menu");
  });

  // Close menu when clicking the cross icon
  hamburgerCross.addEventListener("click", function () {
    console.log("Closing menu...");
    mobileMenu.classList.remove("show-menu");
  });

  // Hide menu when resizing to desktop view
  window.addEventListener("resize", function () {
    if (window.innerWidth > 770) {
      console.log("Hiding menu on desktop resize...");
      mobileMenu.classList.remove("show-menu");
    }
  });
});
/*=============== nav ber section hamburger menu start ===============*/

/*=============== researches section tab start ===============*/
const tabButtons = document.querySelectorAll(".tab-btn");
tabButtons.forEach((tab) => {
  tab.addEventListener("click", () => tabClicked(tab));
});
function tabClicked(tab) {
  tabButtons.forEach((tab) => {
    tab.classList.remove("active");
  });
  tab.classList.add("active");
  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => {
    content.classList.remove("show");
  });
  const contentId = tab.getAttribute("content-id");
  const contentSelected = document.getElementById(contentId);
  if (contentSelected) {
    contentSelected.classList.add("show");
  } else {
    console.error(`No element found with ID: ${contentId}`);
  }
}
/*=============== researches section tab end ===============*/

/*=============== achievements section tab start ===============*/
const tabs = document.querySelectorAll(".tab");
function tabify(tab) {
  const tabList = tab.querySelector(".tab__list");
  if (tabList) {
    const tabItems = [...tabList.children];
    const tabContent = tab.querySelector(".tab__content");
    const tabContentItems = [...tabContent.children];
    let tabIndex = 0;
    tabIndex = tabItems.findIndex((item, index) => {
      return [...item.classList].indexOf("is--active") > -1;
    });
    tabIndex > -1 ? (tabIndex = tabIndex) : (tabIndex = 0);
    function setTab(index) {
      tabItems.forEach((x, index) => x.classList.remove("is--active"));
      tabContentItems.forEach((x, index) => x.classList.remove("is--active"));
      tabItems[index].classList.add("is--active");
      tabContentItems[index].classList.add("is--active");
    }
    tabItems.forEach((x, index) =>
      x.addEventListener("click", () => setTab(index))
    );
    setTab(tabIndex);
    tab.querySelectorAll(".tab").forEach((tabContent) => tabify(tabContent));
  }
}
tabs.forEach(tabify);
/*=============== achievements section tab end ===============*/

/*===============  nav ber dropdown start ===============*/
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    const clickedElement = event.target.closest(".dropdown-btn");
    if (!clickedElement) return; // Ignore clicks outside dropdown buttons
    clickedElement.classList.toggle("active");
    const dropdownContent = clickedElement.nextElementSibling;
    if (!dropdownContent) return; // Safety check
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });
});
/*===============  nav ber dropdown end ===============*/

