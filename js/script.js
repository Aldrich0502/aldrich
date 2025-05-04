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

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
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

// php progress circular bar 
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

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
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
//for blog section read more and read less button
function toggleText(postId) {
  var popup = document.getElementById("popup");
  var readMore = document.querySelector('.read-more');
  var closeBtn = document.querySelector('.close-btn');
  var popupDetails = document.querySelector(".popup-details");

  // Change the content of the popup based on the post clicked
  if (postId === 1) {
    popupDetails.innerHTML = `
      <h4>How I Started in Web Development</h4>
      <p>
My journey into web development started with curiosity. As an Information Technology student at STI Alaminos, I was always fascinated by how websites and applications worked. When our instructor tasked us with creating our portfolios, I saw it as a perfect opportunity to dive deeper into the world of web development. I started with the basics: HTML, CSS, and JavaScript. With the guidance from my instructor and plenty of research on my own, I was able to build my first website. It wasn’t easy at first, but each challenge helped me grow as a web developer. This portfolio project was my first hands-on experience, and it sparked my passion for creating websites. Since then, I’ve been continuously learning and improving my skills to keep up with the ever-evolving field of web development.      </p>
    
      </p>
      <a href="javascript:void(0);" class="read-less" onclick="toggleText()">Read Less</a>
    `;
  } else if (postId === 2) {
    popupDetails.innerHTML = `
      <h4>Why I Chose IT as My Course</h4>
      <p>
I chose Information Technology because I’ve always been curious about how websites and apps work. Studying at STI Alaminos gave me the opportunity to explore that curiosity through hands-on projects like building a portfolio website and developing a payroll system with biometrics.

At first, I had no background in coding, but with the help of our instructor and my own research, I slowly learned HTML, CSS, and JavaScript. I realized that IT is not just about programming—it’s about solving real problems with technology.

Now, I enjoy creating websites and learning more every day. Choosing IT opened the door for me to become a future web developer, and I’m excited to keep growing in this field.      </p>
       </p>
      <a href="javascript:void(0);" class="read-less" onclick="toggleText()">Read Less</a>
    `;
  } else if (postId === 3) {
    popupDetails.innerHTML = `
      <h4>How I Overcame Challenges in My First Web Development Project</h4>
      <p>
Facing Bugs and Error Messages
One of the first challenges I encountered was debugging errors that I didn’t immediately understand. Error messages would often pop up in the browser or the console, and at first, I didn’t know how to fix them. But with the help of online resources and focusing on each error, I learned how to identify the root cause and fix it. This challenge taught me the importance of patience and persistence in coding.      </p>
      <p>
Design Challenges: Making the Site Look Good
Another challenge I faced was designing a visually appealing website. Since this was my first project, I had some difficulties adjusting the layout and design, especially when using CSS to get the proper alignment and spacing. However, I learned useful tips and tricks to improve the visual aesthetics of the site. I researched design trends and focused on making the design mobile-friendly.      </p>
      <a href="javascript:void(0);" class="read-less" onclick="toggleText()">Read Less</a>
    `;
  }

  if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "flex"; // Show the popup
    readMore.textContent = "Close"; // Change the button text to "Close"
  } else {
    popup.style.display = "none"; // Hide the popup
    readMore.textContent = "Read More"; // Reset button text
  }
}



