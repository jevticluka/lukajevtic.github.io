console.log("test");

let putanja = window.location.pathname;

if (putanja == "/index.html" || putanja == "/") {
  index();
} else if (putanja == "/about.html") {
  console.log("about!");
  about();
} else if (putanja == "/products.html") {
  products();
} else if (putanja == "/contact.html") {
  contact();
} else if (putanja == "/author.html") {
  author();
}
// PAGES
function index() {
  navigation();
  cover();
  gallery();
  features();
  partners();
  footer();
  stats();
  testimonials();
  modal();
}
function about() {
  console.log("about");
  navigation();
  altCover("about");
  features();
  stats();
  testimonials();

  partners();
  footer();
  modal();
}
function products() {
  navigation();
  altCover("product");
  gallery();
  footer();
  modal();
}
function contact() {
  navigation();
  altCover("contact");
  contactCheck();
  footer();
  modal();
}
function author() {
  navigation();
  altCover("author");
  footer();

  $(document).ready(() => {
    $(".read-more").hide();
    $(".primary-btn").click(() => {
      $(".read-more").slideToggle();
      if ($(".primary-btn").text() == "Read More") {
        $(".primary-btn").text("Read Less");
      } else {
        $(".primary-btn").text("Read More");
      }
    });
  });
}

function navigation() {
  // RENDEROVANJE NAVIGACIJE UZ POMOC NODOVA
  let navbar = document.querySelector("nav");
  navbar.innerHTML = "";
  let navbarElemsWrap = document.createElement("div");
  navbarElemsWrap.setAttribute("class", "container-fluid");
  let navbarBrand = document.createElement("a");
  navbarBrand.setAttribute("class", "navbar-brand d-flex align-items-center");
  navbarBrand.setAttribute("href", "index.html");
  let brandImg = document.createElement("img");
  brandImg.setAttribute("alt", "logo");
  brandImg.setAttribute("src", "img/logo-icon.png");
  let logoText = document.createTextNode(" FEECOF");
  navbarBrand.appendChild(brandImg);
  navbarBrand.appendChild(logoText);
  navbar.appendChild(navbarBrand);
  let buttonToggler = document.createElement("button");
  buttonToggler.setAttribute("class", "navbar-toggler");
  buttonToggler.setAttribute("type", "button");
  let iconToggler = document.createElement("span");
  iconToggler.setAttribute("class", "navbar-toggler-icon");
  buttonToggler.appendChild(iconToggler);

  navbar.appendChild(buttonToggler);

  let navMenu = document.createElement("div");
  navMenu.setAttribute("class", "collapse navbar-collapse justify-content-end");
  navMenu.setAttribute("id", "navbarNavDropdown");

  let navUl = document.createElement("ul");
  navUl.setAttribute("class", "navbar-nav");

  let navInfo = [
    [
      "index.html",
      "about.html",
      "products.html",
      "contact.html",
      "author.html",
    ],
    ["Home", "About", "Products", "Contact", "Author"],
  ];
  for (let i in navInfo[0]) {
    let liItem = document.createElement("li");
    liItem.setAttribute("class", "nav-item");
    let navLink = document.createElement("a");
    navLink.setAttribute("class", "nav-link");
    if (putanja.includes(navInfo[0][i])) {
      navLink.classList.add("active");
    }
    navLink.setAttribute("href", navInfo[0][i]);
    let itemText = document.createTextNode(navInfo[1][i]);
    navLink.appendChild(itemText);
    liItem.appendChild(navLink);

    navUl.appendChild(liItem);

    navMenu.appendChild(navUl);
  }
  navbar.appendChild(navMenu);

  // PRIKAZIVANJE DROPDOWN MENIJA SA JQUERY-ijem
  $(document).ready(() => {
    $(".navbar-toggler").click(() => {
      $("#navbarNavDropdown").slideToggle();
    });
  });
}

function cover() {
  let coverInfo = [
    [
      "Get Discount On All Flavour",
      "Get Discount On All Flavour",
      "Get Discount On All Flavour",
    ],
    [
      "Buy Best Quality Coffee",
      "Buy Best Quality Coffee",
      "Buy Best Quality Coffee",
    ],
    ["VIEW MORE", "VIEW MORE", "VIEW MORE"],
    ["cover-1.jpg", "cover-2.jpg", "cover-3.jpg"],
  ];

  let coverInner = ``;

  for (let i in coverInfo[1]) {
    coverInner += `
                  <div class="carousel-ite_m carousel-element  h-100">
                    <div class="carousel-text">
                      <div>
                        <h2
                          class="text-white text-center primary-font tracking-in-expand"
                        >
                          ${coverInfo[0][i]}
                        </h2>
                        <h1
                          class="text-white fw-bold text-center text-white fade-in-top"
                        >
                          ${coverInfo[1][i]}
                        </h1>
                        <p class="text-uppercase text-center mt-5 fade-in-bottom">
                          <a href="about.html" class="primary-btn">${coverInfo[2][i]}</a>
                        </p>
                      </div>
                    </div>
                    <img
                      src="img/${coverInfo[3][i]}"
                      class="d-block h-100 w-100"
                      alt="cover"
                    />
                  </div>`;
  }
  sliderCover = document.querySelector("#sliderCover");
  sliderCover.innerHTML = coverInner;

  let coverItems = document.querySelectorAll(".carousel-element");
  let tren = 0;
  setInterval(() => {
    // console.log(coverItems[tren]);
    // coverItems[tren].setAttribute("style", "opacity:0");
    // setTimeout(() => {
    //   coverItems[tren].setAttribute("style", "display:none");
    // }, 300);
    coverItems[tren].setAttribute("style", "display:none");
    coverItems[++tren].setAttribute("style", "display:block");
    if (tren == 2) tren = 0;
  }, 5000);
}

function features() {
  let featuresInfo = [
    ["ph:coffee-light", "iconoir:delivery-truck", "bx:support"],
    ["Lots Of Coffee", "Free Delivery", "Support 24/7"],
    [
      "The largest selection of coffee",
      "Within a radius of 10 miles",
      "We are available all the time",
    ],
  ];

  let featuresInner = ``;

  for (let i in featuresInfo[1]) {
    featuresInner += `<div class="col-sm-4">
                        <div class="feature">
                          <span
                            class="iconify display-1 text-black bg-white p-3 rounded-circle"
                            data-icon="${featuresInfo[0][i]}"
                          ></span>
                          <div class="feature-text">
                            <h6 class="primary-font text-white fw-bold">${featuresInfo[1][i]}</h6>
                            <p class="text-muted primary-font fw-5 mb-0">
                              ${featuresInfo[2][i]}
                            </p>
                          </div>
                        </div>
                      </div>`;
  }

  featuresItems.innerHTML = featuresInner;
}

function gallery() {
  let galleryInfo = [
    ["featured-1.jpg", "Thai Large Cherries", "$30.00"],
    ["featured-2.jpg", "Circular Saws", "$25.00"],
    ["featured-3.jpg", "Ornare Sed Consequat", "$20.00"],
    ["featured-4.jpg", "Aliquam Lobortis", "$40.00"],
  ];

  let galleryInner = ``;

  for (let i in galleryInfo) {
    galleryInner += `<div class="col-lg-3 col-md-6 col-sm-6 col-6">
                        <a
                          href="#"
                          class="featured-link text-decoration-none primary-font"
                        >
                          <img
                            src="img/${galleryInfo[i][0]}"
                            alt="featured img"
                            class="img-fluid"
                          />
                          <h5 class="fw-bold fs-6 mt-2 text-dark">${galleryInfo[i][1]}</h5>
                          <h6 class="fw-bold mt-2 secondary-color">${galleryInfo[i][2]}</h6></a
                        >
                      </div>`;
  }

  galleryWrap.innerHTML = galleryInner;

  let forma = document.forms[0];

  forma.sort.addEventListener("change", () => {
    let value = forma.sort.options[forma.sort.selectedIndex].value;
    if (value != 0) {
      let val = parseFloat(
        galleryInfo[2][1].slice(1, galleryInfo[2][1].length)
      );
      // console.log(val);
      if (value == "lowest") {
        galleryInfo.sort(
          (a, b) =>
            parseFloat(a[2].slice(1, galleryInfo[2].length)) -
            parseFloat(b[2].slice(1, galleryInfo[2].length))
        );
      }
      if (value == "highest") {
        galleryInfo.sort(
          (a, b) =>
            parseFloat(b[2].slice(1, galleryInfo[2].length)) -
            parseFloat(a[2].slice(1, galleryInfo[2].length))
        );
      }
      let galleryInner = ``;

      for (let i in galleryInfo) {
        galleryInner += `<div class="col-lg-3 col-md-6 col-sm-6 col-6">
                            <a
                              href="#"
                              class="featured-link text-decoration-none primary-font"
                            >
                              <img
                                src="img/${galleryInfo[i][0]}"
                                alt="featured img"
                                class="img-fluid"
                              />
                              <h5 class="fw-bold fs-6 mt-2 text-dark">${galleryInfo[i][1]}</h5>
                              <h6 class="fw-bold mt-2 secondary-color">${galleryInfo[i][2]}</h6></a
                            >
                          </div>`;
      }
      galleryWrap.innerHTML = galleryInner;
    }
    $(document).ready(function () {
      $(".featured-link").click(function (e) {
        e.preventDefault();
        console.log("Novi item");
        $("#testModal").modal("toggle");
        let index = $(".featured-link").index(this);
        $(".modal-body img").attr("src", `/img/${galleryInfo[index][0]}`);
        $(".modal-body h5").text(galleryInfo[index][1]);
        $(".modal-body h6").text(galleryInfo[index][2]);
      });
    });
  });
  $(document).ready(function () {
    $(".featured-link").click(function (e) {
      e.preventDefault();
      console.log("Novi item");
      $("#testModal").modal("toggle");
      let index = $(".featured-link").index(this);
      $(".modal-body img").attr("src", `/img/${galleryInfo[index][0]}`);
      $(".modal-body h5").text(galleryInfo[index][1]);
      $(".modal-body h6").text(galleryInfo[index][2]);
    });
  });
}

function partners() {
  let partnersInfo = [
    "partner-1.svg",
    "partner-2.svg",
    "partner-3.svg",
    "partner-4.svg",
    "partner-5.svg",
    "partner-6.svg",
  ];

  let partnerInner = ``;
  for (let i in partnersInfo) {
    partnerInner += `<div
                      class="col-11 item d-flex justify-content-center align-items-center"
                    >
                      <img src="img/${partnersInfo[i]}" alt="partner" class="img-fluid" />
                    </div>`;
  }
  partnerWrap.innerHTML = partnerInner;

  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
}

function footer() {
  let footerInfo = [
    [
      [
        "col-lg-4 col-md-12 d-flex align-items-center",
        "primary-font text-white small m-0",
      ],
      ["© 2022 Feecof, All Rights Reserved"],
    ],
    [
      ["col-lg-4 col-md-12", "primary-font text-center m-0 footer-shortcuts"],
      [
        "index.html",
        "about.html",
        "contact.html",
        "products.html",
        "author.html",
      ],
      ["Home", "About", "Contact", "Products", "Author"],
    ],
    [
      [
        "col-lg-4 col-md-12 d-flex align-items-center justify-content-end",
        "primary-font footer-social m-0",
      ],
      [
        "https://facebook.com",
        "https://instagram.com",
        "sitemap.xml",
        "documentation.pdf",
      ],
      [
        "carbon:logo-facebook",
        "carbon:logo-instagram",
        "cil:sitemap",
        "fluent-mdl2:documentation",
      ],
    ],
  ];

  let footerInner = ``;

  for (let i in footerInfo) {
    footerInner += ` <div class="${footerInfo[i][0][0]}">`;
    if (i == 0) {
      footerInner += `<p class="${footerInfo[i][0][1]}">
                        ${footerInfo[i][1]}
                      </p>`;
    }
    if (i == 1) {
      footerInner += ` <p class="${footerInfo[i][0][1]}">`;
      for (let j in footerInfo[i][1]) {
        footerInner += `<a href="${footerInfo[i][1][j]}" class="text-decoration-none text-white mx-3">
                          ${footerInfo[i][2][j]}
                        </a>`;
      }
      footerInner += ` </p>`;
    }
    if (i == 2) {
      footerInner += ` <p class="${footerInfo[i][0][1]}">`;
      for (let j in footerInfo[i][1]) {
        footerInner += `<a href="${footerInfo[i][1][j]}"
                        class="text-decoration-none text-white mx-3"
                      >
                        <span
                          class="iconify fs-5"
                          data-icon="${footerInfo[i][2][j]}"
                        ></span>
                      </a>`;
      }
      footerInner += ` </p>`;
    }
    footerInner += `</div>`;
  }
  footerWrap.innerHTML = footerInner;
}

function stats() {
  let statsInfo = [
    ["250", "121", "321", "220"],
    [
      "Varieties of coffee",
      "Hours of testing",
      "coffee markets",
      "Coffee brands",
    ],
  ];

  let statsInner = ``;

  for (let i in statsInfo[0]) {
    statsInner += `<div class="col-sm-3 col-6">
                    <h1 class="text-center secondary-color primary-font display-4 stats-info">
                      ${statsInfo[0][i]}
                    </h1>
                    <p class="text-center text-capitalize primary-font">
                      ${statsInfo[1][i]}
                    </p>
                  </div>`;
  }

  statsWrap.innerHTML = statsInner;
  var okidac = false;
  window.addEventListener("scroll", () => {
    let visina = window.scrollY;

    if (visina > 1400 && visina < 2400 && okidac == false) {
      okidac = true;
      let elems = document.querySelectorAll(".stats-info");
      elems.forEach((element) => {
        console.log(element.innerHTML);
        let val = element.innerHTML;
        let tren = 0;

        setInterval(() => {
          if (tren <= val) {
            element.innerHTML = tren;
            tren++;
          }
        }, 13);
      });
    }
  });
}

function modal() {
  setInterval(() => {
    let currentDate = new Date();
    let endDate = new Date("2022-12-25");
    let ms = Math.abs(endDate - currentDate);
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor(daysms / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor(hoursms / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor(minutesms / 1000);
    if (currentDate > endDate) {
      $("#endOffer").html("Offer has ended! :(");
    } else {
      $("#endOffer").html(
        days + "d :" + hours + "h :" + minutes + "m :" + sec + "s"
      );
    }
  }, 1000);
  $(document).ready(() => {
    setTimeout(() => {
      $("#galleryModal").modal("show");
      console.log("first");
    }, 3000);
  });
}

function altCover(strana) {
  let coverPages = [
    ["about-bg", "products-bg", "contact-bg", "author-bg"],
    ["About Us", "Our Products", "Contact Us", "Author"],
    [
      "Every grain is important for a rich flavour.",
      "An almost endless choice",
      "Let's talk with a cup of coffee",
      "Creator of this place",
    ],
  ];
  let altCover = document.querySelector("#secondary-cover");
  if (strana == "about") {
    altCover.classList.add(`${coverPages[0][0]}`);
    altCover.querySelector("h1").innerHTML = coverPages[1][0];
    altCover.querySelector("h3").innerHTML = coverPages[2][0];
  } else if (strana == "product") {
    altCover.classList.add(`${coverPages[0][1]}`);
    altCover.querySelector("h1").innerHTML = coverPages[1][1];
    altCover.querySelector("h3").innerHTML = coverPages[2][1];
  } else if (strana == "contact") {
    altCover.classList.add(`${coverPages[0][2]}`);
    altCover.querySelector("h1").innerHTML = coverPages[1][2];
    altCover.querySelector("h3").innerHTML = coverPages[2][2];
  } else if (strana == "author") {
    altCover.classList.add(`${coverPages[0][3]}`);
    altCover.querySelector("h1").innerHTML = coverPages[1][3];
    altCover.querySelector("h3").innerHTML = coverPages[2][3];
  }
}

function contactCheck() {
  let contactInfo = [
    ["fontisto:email", "bi:house", "healthicons:phone-outline"],
    ["feecof@gmail.cosm", "Wall Street, 21", "060/1234-123"],
  ];
  let contactText = ``;
  for (let i in contactInfo[0]) {
    contactText += `<p class="primary-font">
                      <span
                        class="iconify primary-color fs-5 me-2"
                        data-icon="${contactInfo[0][i]}"
                      ></span>
                      ${contactInfo[1][i]}
                    </p>`;
  }
  contactInfoWrap.innerHTML = contactText;

  let contactSocial = [
    [
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
    ],
    [
      "carbon:logo-facebook",
      "carbon:logo-instagram",
      "ion:logo-rss",
      "ion:logo-twitter",
    ],
  ];

  let socialText = ``;

  for (let i in contactSocial[0]) {
    socialText += `<a href="${contactSocial[0][i]}" 
                class="text-decoration-none text-muted me-3">
                <span
                  class="iconify fs-6"
                  data-icon="${contactSocial[1][i]}"
                ></span>
              </a>`;
  }
  let contactSocialWrap = document.querySelector("#contactSocialWrap");
  contactSocialWrap.innerHTML = socialText;

  let formSubmit = document.querySelector("#formSubmit");

  formSubmit.addEventListener("click", () => {
    let brojGresaka = 0;
    let forma = document.forms[0];
    let regName = /^[A-ZČĆĐŠŽ][a-zćčšđž]{2,14}\s[A-ZĆČŠĐŽ][a-zćčšđž]{2,14}$/;
    let regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}\S+/;
    let regNum = /^06[0-9]{7,8}$/;
    if (!regName.test(forma.name.value)) {
      forma.name.nextElementSibling.innerHTML =
        "Invalid input. Try : Petar Peric";
      brojGresaka++;
    } else {
      forma.name.nextElementSibling.innerHTML = "";
    }
    if (!regEmail.test(forma.email.value)) {
      forma.email.nextElementSibling.innerHTML =
        "Bad input. Try : petar@test.com";
      brojGresaka++;
    } else {
      forma.email.nextElementSibling.innerHTML = "";
    }
    if (!regNum.test(forma.number.value)) {
      forma.number.nextElementSibling.innerHTML =
        "Invalid format. Try : 069123456";
      brojGresaka++;
    } else {
      forma.number.nextElementSibling.innerHTML = "";
    }
    if (forma.type.selectedIndex == 0) {
      forma.type.nextElementSibling.innerHTML = "Choose type of coffee!";
      brojGresaka++;
    } else {
      forma.type.nextElementSibling.innerHTML = "";
    }
    if (forma.continue.value == "") {
      forma.continue[0].parentElement.lastElementChild.innerHTML =
        "You have to choose contact.";
      brojGresaka++;
    } else {
      forma.continue[0].parentElement.lastElementChild.innerHTML = "";
    }
    if (forma.message.value == "") {
      forma.message.nextElementSibling.innerHTML =
        "You have to input a message!";
      brojGresaka++;
    } else {
      forma.message.nextElementSibling.innerHTML = "";
    }
    if (!forma.terms.checked) {
      console.log(forma.terms);
      forma.terms.nextElementSibling.nextElementSibling.innerHTML =
        "You didn't agree with terms of use!";
      brojGresaka++;
    } else {
      forma.terms.nextElementSibling.nextElementSibling.innerHTML = "";
    }

    if (brojGresaka == 0) {
      forma.reset();
      formSuccess.innerHTML = "Message sent! Expect reply soon!";
    }
  });
}

function testimonials() {
  let testimonialsInfo = [
    [
      `If you think you don't like coffee, you definitely haven't
    visited this place.`,
      `The best service ever and without a doubt the most delicious
    coffee.`,
      `For 6 months now, I have been coming every day to try a
    different flavour and I still can't decide which is the most
    beautiful.`,
    ],
    [`Dorian Gray`, "Lisa Miles", "Tony Stark"],
  ];

  let testimonialsInner = ``;

  for (let i in testimonialsInfo[0]) {
    testimonialsInner += `<div class="carousel-elem d-none tracking-in-expand ${
      i == 0 ? "active" : ""
    }">
                            <p class="text-center display-3">
                              <span
                                class="iconify primary-color"
                                data-icon="radix-icons:quote"
                              ></span>
                            </p>
                            <p class="text-center primary-font text-white fw-light">
                              ${testimonialsInfo[0][i]}
                            </p>
                            <h6
                              class="text-uppercase text-center fw-bold text-white primary-font"
                            >
                              ${testimonialsInfo[1][i]}
                            </h6>
                          </div>`;
  }
  testimonialsWrap.innerHTML = testimonialsInner;

  let testiElems = document.querySelectorAll(".carousel-elem");
  console.log(testiElems[0]);
  let tren = 0;
  testiElems[0].classList.remove("d-none");
  testimonialsNext.addEventListener("click", () => {
    tren++;
    console.log(tren);
    testiElems[2].classList.remove("d-none");
    for (let i = 0; i < testiElems.length; i++) {
      if (tren == i) {
        testiElems[i].classList.remove("d-none");
      } else {
        testiElems[i].classList.add("d-none");
      }
    }

    if (tren == 2) {
      tren = -1;
    }
  });
  testimonialsPrev.addEventListener("click", () => {
    tren--;
    if (tren < 0) tren = 2;
    console.log(tren);
    for (let i = 0; i < testiElems.length; i++) {
      if (tren == i) {
        testiElems[i].classList.remove("d-none");
      } else {
        testiElems[i].classList.add("d-none");
      }
    }
    if (tren == 0) tren = 2;
  });
}
