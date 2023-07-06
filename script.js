const title = 'Front-end Developer';
const letters = title.split('');
let string = '';
let count = 0;
const introTitle = document.querySelector('.intro__title');

// let interval = setInterval(() => {
//     if (count === letters.length - 1) {
//         clearInterval(interval);
//     }
//     string += letters[count];
//     introTitle.innerHTML = string;
//     count++;
// }, 75);

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

// const html = document.querySelector('.html');
// const html = document.querySelector('.html');

// const rect = html.getBoundingClientRect();

// document.body.onmousemove = function(e) {
//     html.style.left = rect.left - e.clientX / 15 + 'px';
//     html.style.top = rect.top - e.clientY / 10 + 'px';
// }

// const icons = document.querySelectorAll('.moving__icon');

// document.body.onmousemove = function(e) {
//     icons.forEach((icon) => {
//         icon.style.left = e.clientX - 500 + 'px';
//         icon.style.top = e.clientY + 100 + 'px';
//     });
// }

const icons = document.querySelectorAll('.moving__icon');

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

document.body.onmousemove = function(e) {
    icons.forEach((el, index) => {
        if (el.classList.contains('move__left')) {
            el.style.left = coords[index].left - e.clientX / 50 + 'px';
            el.style.top = coords[index].top - e.clientY / 50 + 'px';
        } else {
            el.style.left = coords[index].left + e.clientX / 50 + 'px';
            el.style.top = coords[index].top + e.clientY / 50 + 'px';
        }
    });
}

// console.log(coords);


const items = document.querySelectorAll('.nav__link .first');

items.forEach((item) => {
    // const symbs = item.textContent.toLowerCase().split('');
    const symbs = item.textContent.split('');
    item.innerHTML = '';
    for (let i = 0; i < symbs.length; i++) {
        const span = document.createElement('span');
        span.setAttribute('data-content', symbs[i]);
        item.append(span);
    }
    const spans = document.querySelectorAll('.nav__link .first span');
    spans.forEach(span => {
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

const about = document.querySelector('.about');

setTimeout(() => {
    about.classList.add('active');
}, 3500);

const see = document.querySelector('.see');

setTimeout(() => {
    see.classList.add('active');
}, 4200);

const inner = document.querySelector('.inner');

const appearingLetters = document.querySelectorAll('.about__prof span');

const left = document.querySelector('.left');

about.addEventListener('click', function() {
    inner.style.marginLeft = '-100vw';
    appearingLetters.forEach((item, index) => {
        setTimeout(() => {
          item.style.animation = 'letterAppearing 1s ease';
        }, (index + 1) * 200);
        setTimeout(() => {
          item.style.opacity = '1';
        }, (index + 1) * 200);
    });
    left.style.animation = 'backgroundMove 1s ease .3s';
    setTimeout(() => {
        left.style.backgroundPositionX = '40%';
    }, 1300);
});

const developerLetters = document.querySelectorAll('.about__prof span');

developerLetters.forEach((letter) => {
    letter.addEventListener('mouseover', function() {
        letter.style.color = '#5e6bc7';
        letter.style.animation = 'pump .7s ease';
    });
});

developerLetters.forEach((letter) => {
    letter.addEventListener('mouseleave', function() {
        letter.style.color = '#fff';
        letter.style.animation = '';
    });
});

// about.addEventListener('click', function() {
//     inner.style.marginLeft = '-100vw';
//     appearingLetters.forEach((item, index) => {
//         setTimeout(() => {
//           item.style.animation = 'letterAppearing 1s ease';
//         }, (index + 1) * 200);
//         setTimeout(() => {
//           item.style.opacity = '1';
//         }, (index + 1) * 200);
//     });
// });

const back = document.querySelector('.arrow__left');

back.addEventListener('click', function() {
    inner.style.marginLeft = '0';
});



// const workSee = document.querySelector('.work__see');
// const work = document.querySelector('.work');

// let leftOffset = 0;

// workSee.addEventListener('click', function() {
//     leftOffset = -100;
//     work.style.marginLeft = '-100vw';
// });

// work.addEventListener('wheel', function() {
//     if (leftOffset <= -300) {
//         leftOffset = -300;
//         work.style.marginLeft = leftOffset + 'vw';
//     } else {
//         leftOffset += -100;
//         console.log(leftOffset);
//         work.style.marginLeft = leftOffset + 'vw';
//     }
// });

// work.addEventListener('wheel', function(e) {
//     // e.preventDefault();
//     let direction = e.deltaY;
//     console.log(leftOffset);
//     if (direction > 0 && leftOffset > -300) {
//         e.preventDefault();
//         setTimeout(() => {
//             leftOffset += -100;
//             work.style.marginLeft = leftOffset + 'vw';
//         }, 300);
//     } else if (direction < 0 && leftOffset < 0) {
//         e.preventDefault();
//         setTimeout(() => {
//             leftOffset += 100;
//             console.log(leftOffset);
//             work.style.marginLeft = leftOffset + 'vw';
//         }, 300);
//     }
//     // if (leftOffset <= -300) {
//     //     leftOffset = -300;
//     //     work.style.marginLeft = leftOffset + 'vw';
//     // } else {
//     //     leftOffset += -100;
//     //     console.log(leftOffset);
//     //     work.style.marginLeft = leftOffset + 'vw';
//     // }
// });












const contactTitle = document.querySelector('.contact__title');

setTimeout(() => {
    contactTitle.classList.add('active');
}, 700);

const contactText = document.querySelector('.contact__text');

setTimeout(() => {
    contactText.classList.add('active');
}, 700);

const contactForm = document.querySelector('.contact__form');

setTimeout(() => {
    contactForm.style.opacity = '1'
}, 1000);











const aboutLinks = document.querySelectorAll('.else');
const socialsLogo = document.querySelectorAll('.socials__logo');
const outroSocials = document.querySelectorAll('.outro__socials');

aboutLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        socialsLogo.classList.add('out');
        outroSocials.style.top = '-20%';
    });
});





























// function plus(e) {
//     e.preventDefault();
//   document.body.removeEventListener('wheel', plus);
//   setTimeout(() => {
//     e.preventDefault();
//     console.log('plus');
//     return document.body.addEventListener('wheel', plus);
//   }, 1000);
// }

// document.body.addEventListener('wheel', plus);



















// let eventAllow = true;

// document.body.addEventListener('wheel', function(e) {
//   e.preventDefault();
//   if (eventAllow) {
//     eventAllow = false;
//     setTimeout(() => {
//       console.log('wheel');
//       return eventAllow = true;
//     }, 1000);
//   } else {
//     return;
//   }
// });

// const wrapper = document.querySelector('.wrapper');

// wrapper.addEventListener('wheel', allowWheel);


// function allowWheel(e) {
//     e.preventDefault();
//     wrapper.removeEventListener('wheel', allowWheel);
//     setTimeout(() => {
//         e.preventDefault();
//         console.log('wheel allowed');
//         return wrapper.addEventListener('wheel', allowWheel);
//     }, 1000);
// }


const wrapper = document.querySelector('.wrapper');

let allowWheel = true;
let offTop = window.scrollY;

// wrapper.addEventListener('wheel', function(e) {
//     e.preventDefault();
//     if (!allowWheel) {
//         console.log('нельзя пока');
//     } else if (allowWheel) {
//         allowWheel = false;
//         setTimeout(() => {
//             let direction = e.deltaY;
//             console.log('событие поймано', window.scrollY, offTop);
//             if (direction > 0) {
//                 offTop += window.screen.height;
//                 window.scrollTo(0, offTop);
//             } else if (direction) {
//                 offTop +- window.screen.height;
//                 window.scrollTo(0, offTop);
//             }
//             return allowWheel = true;
//         }, 1000);
//     }
// });

wrapper.addEventListener('wheel', function(e) {
    e.preventDefault();
    if (!allowWheel) {
        console.log('нельзя пока');
    } else if (allowWheel) {
        allowWheel = false;
        setTimeout(() => {
            // console.log(e.wheelDelta);
            let dir = e.wheelDelta < 0 ? 'down' : 'up';
            // if (offTop >= window.screen.height * 3) {
            //     return offTop = window.screen.height * 3;
            // } else if (offTop <= window.screen.height / 3) {

            // }
            if (dir === 'down') {
                if (offTop >= 3240) {
                    return offTop = 3240;
                } else {
                    console.log('down');
                    offTop += window.screen.height;
                    window.scrollTo(0, offTop);
                    console.log('прокрутка', offTop);
                }
            } else if (dir === 'up') {
                if (offTop <= 0) {
                    return offTop = 0;
                } else {
                    console.log('up');
                    offTop -= window.screen.height;
                    window.scrollTo(0, offTop);
                    console.log('прокрутка', offTop);
                }
            }
            return allowWheel = true;
        }, 800);
    }
});