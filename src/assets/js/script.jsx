// active hamburger menu 
const menuIcon = document.querySelector(".menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon?.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist?.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist?.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon?.classList.remove("active");
    document.body.classList.remove("open");
});

// rotate text js code 
const text = document.querySelector(".text p");
if (text) {
    text.innerHTML = text.innerHTML.split("").map((char, i) =>
        `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
    ).join("");
}

// switch between about buttons 
const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contents.forEach(content => content.style.display = 'none');
        if (contents[index]) {
            contents[index].style.display = 'block';
        }
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// portfolio filter 
try {
    const mixer = mixitup('.portfolio-gallery', {
        selectors: {
            target: '.portfolio-box'
        },
        animation: {
            duration: 500
        }
    });
} catch (error) {
    console.warn('MixItUp not initialized:', error);
}

// Initialize swiperjs 
try {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
} catch (error) {
    console.warn('Swiper not initialized:', error);
}

// skill Progress bar 
const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");
let skillsPlayed = false;

function hasReached(el) {
    if (!el) return false;
    const topPosition = el.getBoundingClientRect().top;
    return window.innerHeight >= topPosition + el.offsetHeight;
}

function updateCount(num, maxNum) {
    if (!num) return;
    const currentNum = +num.innerText;
    
    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}

function skillsCounter() {
    if (!hasReached(first_skill)) return;
    skillsPlayed = true;
    
    sk_counters.forEach((counter, i) => {
        const target = +counter.dataset.target;
        const strokeValue = 465 - 465 * (target / 100);
        
        if (progress_bars[i]) {
            progress_bars[i].style.setProperty("--target", strokeValue);
        }
        
        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    });

    progress_bars.forEach(p => {
        if (p) {
            p.style.animation = "progress 2s ease-in-out forwards";
        }
    });
}

window.addEventListener("scroll", () => {
    if (!skillsPlayed) {
        skillsCounter();
    }
});

// side progress bar 
const calcScrollValue = () => {
    const scrollProgress = document.getElementById("progress");
    if (!scrollProgress) return;

    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);
    
    scrollProgress.style.display = pos > 100 ? "grid" : "none";
    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #e6006d ${scrollValue}%)`;
    
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
};

window.addEventListener("scroll", calcScrollValue);
window.addEventListener("load", calcScrollValue);

// active menu 
const menuLi = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll('section');

function activeMenu() {
    if (!sections.length || !menuLi.length) return;
    
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len]?.classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// scroll reveal
if (typeof ScrollReveal === 'function') {
    const sr = ScrollReveal({ 
        distance: "90px",
        duration: 2000,
        delay: 200,
    });

    sr.reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
    sr.reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
    sr.reveal('.about-content,.skills', { origin: "right" });
    sr.reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });
}
