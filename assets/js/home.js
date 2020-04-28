
//To set the color of category cards
let category = document.getElementsByClassName('cat-design');
for (let i = 0; i < category.length; i++) {
  if (category[i].innerText == 'Personal') {
    category[i].style.backgroundColor = '#3D6CBC';
  } else if (category[i].innerText == 'College') {
    category[i].style.backgroundColor = '#F2A700';
  } else if (category[i].innerText == 'Work') {
    category[i].style.backgroundColor = '#9C00AE';
  }
}


