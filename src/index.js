import './style.css';
import logoIcon from './images/icons/logo-icon.png';
import breakfastIcon from './images/icons/breakfast-icon.png';
import vegetarianIcon from './images/icons/vegetarian-icon.png';
import dessertIcon from './images/icons/dessert-icon.png';
import heartEmptyIcon from './images/icons/heart-empty-icon.png';
import heartFilledIcon from './images/icons/heart-filled-icon.png';

// Select icon placeholders on page

const logoImg = document.getElementById('logo-icon');
const breakfastImg = document.getElementById('breakfast-icon');
const vegetarianImg = document.getElementById('vegetarian-icon');
const dessertImg = document.getElementById('dessert-icon');
const heartEmptyImgs = document.querySelectorAll('.heart-empty-icon');
const heartFilledImgs = document.querySelectorAll('.heart-filled-icon');

// Display icons

logoImg.src = logoIcon;
breakfastImg.src = breakfastIcon;
vegetarianImg.src = vegetarianIcon;
dessertImg.src = dessertIcon;
heartEmptyImgs.forEach((img) => {
  img.src = heartEmptyIcon;
});
heartFilledImgs.forEach((img) => {
  img.src = heartFilledIcon;
});