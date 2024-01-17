const features = document.getElementById("features");
const featuresMenu = document.getElementById("features-menu");
const iconFeatures = document.getElementById("icon-features");
const company = document.getElementById("company");
const companyMenu = document.getElementById("company-menu");
const iconCompany = document.getElementById("icon-company");
const iconMobileMenu = document.getElementById("icon-mobile-menu");
const headerNaMenu = document.getElementById("header-nav-menu");
const mask = document.getElementById("mask");
const container = document.getElementById("container");

// Function that toggles arrow icon in dropdown features menu
features.addEventListener("click", () => {
  featuresMenu.classList.toggle("show-menu");
  iconFeatures.classList.toggle("rotate");
});

// Function that toggles arrow icon in dropdown company menu
company.addEventListener("click", () => {
  companyMenu.classList.toggle("show-menu");
  iconCompany.classList.toggle("rotate");
});

// Function that shows and hides mobile menu
iconMobileMenu.addEventListener("click", () => {
  iconMobileMenu.classList.toggle("icon-close-menu");
  headerNaMenu.classList.toggle("show-mobile-menu");
  mask.classList.toggle("show-mask");
});
