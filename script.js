
// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// C# progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 5,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// java progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// javascript progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 6,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // I-prevent ang default na pag-navigate ng link

    const target = document.querySelector(this.getAttribute('href')); // Hanapin ang target na element
    window.scrollTo({
      top: target.offsetTop - 100,  // Adjust kung may fixed header, i-subtract ang header height (100px halimbawa)
      behavior: 'smooth'
    });
  });
});

// for contacts section
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const message = document.getElementById('message').value;

  // Basic form validation (you can add more checks)
  if (!name || !email || !mobile || !message) {
    alert('Please fill in all the fields.');
    return;
  }

  // Log data to the console (in real use, you'd send this data to a server)
  console.log('Form submitted with:', { name, email, mobile, message });

  // Hide the form and show the confirmation message
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('confirmationMessage').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
  // Get all "Read More" buttons
  const buttons = document.querySelectorAll('.read-more-btn');
  
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the target description box using data-target attribute
      const targetId = button.getAttribute('data-target');
      const targetBox = document.getElementById(targetId);
      
      // Toggle visibility of the description box
      if (targetBox.style.display === 'none' || targetBox.style.display === '') {
        targetBox.style.display = 'block';
        button.textContent = 'Read Less'; // Change button text
      } else {
        targetBox.style.display = 'none';
        button.textContent = 'Read More'; // Change button text back
      }
    });
  });
});
