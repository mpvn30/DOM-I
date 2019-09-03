const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Selectors

const tags = document.getElementsByTagName('a');
console.log(tags);

function add(element, value){
  element.forEach((e, index) => e.innerText = value[index]);
}
// Navigation

let nav = document.querySelector('nav');
let addFirst = document.createElement('a');
let addLast = document.createElement('a');

nav.appendChild(addLast);
nav.prepend(addFirst);

let item = document.querySelectorAll('nav a');
let values = Object.values(siteContent['nav']);

add(item, values);
item.forEach((item) => item.style.color = "#green");

// CTA 

let ctaContent = document.querySelector('.cta-text h1');
ctaContent.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = siteContent['cta']['button'];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]['img-src']);

// Content

let contentHeader = document.querySelectorAll('.text-content h4');
let contentObjKey = Object.keys(siteContent['main-content']);
let headers = [];

contentObjKey.forEach((item) => {
  if (item.includes('h4')){
    headers.push(siteContent['main-content'][item]);
  }
});

add(contentHeader, headers);

let contentParagraphs = document.querySelectorAll('.text-content p');
let paragraphs = [];
contentObjKey.forEach((item) => {
  if (item.includes('content')) {
    paragraphs.push(siteContent['main-content'][item]);
  }
});


add(contentParagraphs, paragraphs);

let imageSnippets = document.getElementById('middle-img');
imageSnippets.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Contact

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerText = siteContent['contact']['contact-h4'];

let contactItem = document.querySelectorAll('.contact p');
let contactValue = Object.values(siteContent['contact']).splice(1, 3);

add(contactItem, contactValue);

// Footer

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];

