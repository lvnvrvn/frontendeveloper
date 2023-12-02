const title = "Front-end Developer";
const letters = title.split("");
let string = "";
let count = 0;
const introTitle = document.querySelector(".intro__title");

setTimeout(() => {
  let interval = setInterval(() => {
    if (count === letters.length - 1) {
      clearInterval(interval);
    }
    string += letters[count];
    introTitle.innerHTML = string;
    count++;
  }, 75);
}, 700);

const icons = document.querySelectorAll(".moving__icon");

function defineRect(el) {
  const rect = el.getBoundingClientRect();
  return rect;
}

const coords = [];

for (let icon of icons) {
  let iconCoords = {};
  iconCoords.left = defineRect(icon).left;
  iconCoords.top = defineRect(icon).top;
  coords.push(iconCoords);
}

document.body.onmousemove = function (e) {
  icons.forEach((el, index) => {
    if (el.classList.contains("move__left")) {
      el.style.left = coords[index].left - e.clientX / 50 + "px";
      el.style.top = coords[index].top - e.clientY / 50 + "px";
    } else {
      el.style.left = coords[index].left + e.clientX / 50 + "px";
      el.style.top = coords[index].top + e.clientY / 50 + "px";
    }
  });
};

const items = document.querySelectorAll(".nav__link .first");

items.forEach((item) => {
  const symbs = item.textContent.split("");
  item.innerHTML = "";
  for (let i = 0; i < symbs.length; i++) {
    const span = document.createElement("span");
    span.setAttribute("data-content", symbs[i]);
    item.append(span);
  }
  const spans = document.querySelectorAll(".nav__link .first span");
  spans.forEach((span) => {
    let interval = setInterval(() => {
      const index = Math.floor(Math.random() * (symbs.length - 1 - 0) + 0);
      span.innerHTML = symbs[index];
    }, 50);
    const time = Math.floor(Math.random() * (3 - 1) + 0) * 1000;
    setTimeout(() => {
      clearInterval(interval);
      span.innerHTML = span.dataset.content;
    }, time);
  });
});

const about = document.querySelector(".about");

setTimeout(() => {
  about.classList.add("active");
}, 3500);

const see = document.querySelector(".see");

setTimeout(() => {
  see.classList.add("active");
}, 4200);

const inner = document.querySelector(".inner");

const appearingLetters = document.querySelectorAll(".about__prof span");

const left = document.querySelector(".left");

const socialsLogo = document.querySelectorAll(".socials__logo");

about.addEventListener("click", function () {
  inner.style.marginLeft = "-100vw";
  appearingLetters.forEach((item, index) => {
    setTimeout(() => {
      item.style.animation = "letterAppearing 1s ease";
    }, (index + 1) * 200);
    setTimeout(() => {
      item.style.opacity = "1";
    }, (index + 1) * 200);
  });
  left.style.animation = "backgroundMove 1s ease .3s";
  setTimeout(() => {
    left.style.backgroundPositionX = "40%";
  }, 1300);
  setTimeout(() => {
    socialsLogo.forEach((social, index) => {
      setTimeout(() => {
        social.classList.add("active");
      }, index * 300);
    });
  }, 500);
});

const developerLetters = document.querySelectorAll(".about__prof span");

developerLetters.forEach((letter) => {
  letter.addEventListener("mouseover", function () {
    letter.style.color = "#5e6bc7";
    letter.style.animation = "pump .7s ease";
  });
});

developerLetters.forEach((letter) => {
  letter.addEventListener("mouseleave", function () {
    letter.style.color = "#fff";
    letter.style.animation = "";
  });
});

const back = document.querySelector(".arrow__left");

back.addEventListener("click", function () {
  inner.style.marginLeft = "0";
});

const wrapper = document.querySelector(".wrapper");

let allowWheel = true;

const documentHeight = document.body.clientHeight;
const blockHeight = window.innerHeight;
const workBlock = document.querySelector(".work");

const documentWidth = document.body.clientWidth;
const blockWidth = workBlock.clientWidth / workBlock.children.length;
const workItem = document.querySelector(".work__item");
const workContainer = document.querySelector(".work__container");
let workOffset = +getComputedStyle(workContainer)
  .getPropertyValue("left")
  .slice(0, -2);

let contactBlock = document.querySelector(".contact");
let contactBlockCoords = contactBlock.getBoundingClientRect();

document.onscroll = function () {
  if (window.pageYOffset > contactBlockCoords.top - 500) {
    const arr = [...contactBlock.children];
    arr.forEach((child) => {
      child.classList.add("active");
    });
  }
};

const offsetVals = [0, 22, 42, 62];

window.onload = function () {
  checkTopOffset();
};

function checkTopOffset() {
  const offsetIndex = Math.ceil(
    document.documentElement.scrollTop / window.innerHeight
  );
  document.querySelector(".thumb").style.top = offsetVals[offsetIndex] + "px";
}

document.querySelectorAll(".about__link").forEach((item) => {
  item.addEventListener("click", function () {
    setTimeout(() => {
      checkTopOffset();
    }, 1000);
  });
});

document.querySelectorAll(".nav__link").forEach((item) => {
  item.addEventListener("click", function () {
    setTimeout(() => {
      checkTopOffset();
    }, 1000);
  });
});

document.querySelector(".here").addEventListener("click", function () {
  setTimeout(() => {
    checkTopOffset();
  }, 1000);
});

wrapper.addEventListener("wheel", function (e) {
  e.preventDefault();

  setTimeout(() => {
    checkTopOffset();
  }, 1000);

  let nowHere = e.target;

  if (!allowWheel) {
  } else if (allowWheel) {
    allowWheel = false;
    setTimeout(() => {
      let dir = e.wheelDelta < 0 ? "down" : "up";
      let offTop = window.scrollY;

      if (
        nowHere.classList.contains("work__item") ||
        nowHere.closest(".work__item")
      ) {
        if (dir === "down") {
          if (workOffset <= -blockWidth * 3) {
            offTop += blockHeight;
            window.scrollTo(0, offTop);
          } else {
            workOffset -= blockWidth;
            workContainer.style.left = workOffset + "px";
          }
        } else if (dir === "up") {
          if (workOffset >= 0) {
            offTop -= blockHeight;
            window.scrollTo(0, offTop);
          } else {
            workOffset += blockWidth;
            workContainer.style.left = workOffset + "px";
          }
        }
      } else {
        if (dir === "down") {
          if (offTop >= documentHeight - blockHeight) {
            offTop = documentHeight - blockHeight;
          } else {
            offTop += blockHeight;
            window.scrollTo(0, offTop);
          }
        } else if (dir === "up") {
          if (offTop <= 0) {
            offTop = 0;
          } else {
            offTop -= blockHeight;
            window.scrollTo(0, offTop);
          }
        }
      }
      return (allowWheel = true);
    }, 500);
  }
});

const workSee = document.querySelector(".work__see");

workSee.addEventListener("click", function () {
  workOffset -= blockWidth;
  workContainer.style.left = workOffset + "px";
});

document.querySelectorAll(".nav__point").forEach((item) =>
  item.addEventListener("click", function () {
    document.querySelector(".thumb").style.top = item.dataset.offset + "px";
  })
);

const contactText = document.querySelector(".contact__text");
const contactForm = document.querySelector(".contact__form");
const formItems = document.querySelectorAll(".form__item");
const formSendBtn = document.querySelector(".form__item__send");
const formSent = document.querySelector(".form__item__sent");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  contactForm.classList.add("sent");
  formItems.forEach((item) => (item.value = ""));
  formSent.classList.add("show");
  setTimeout(() => {}, 500);
  setTimeout(() => {
    formSent.classList.remove("show");
    contactForm.classList.remove("sent");
  }, 1000);
});
