// navigation bar effect on scroll

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY >0);
});

// emoji section
const typed= new Typed(".text", {
    strings:["Front-End Developer" , "Back-End Developer" , "UI/UX Designer" , "App Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// service section
const serviceModels = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".fa-xmark");

var model = function(modalClick){
    serviceModels[modalClick].classList.add("active");
}

learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        model(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModels.forEach((modalView) => {
            modalView.classList.remove("active");
    });
});
});


// project section
const portfolioModels = document.querySelectorAll(".portoflio-model");
const imgCard = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".fa-xmark");

var portfolioModel = function(modalClick){
    portfolioModels[modalClick].classList.add("active");
}

imgCard.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModel(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtns) => {
    portfolioCloseBtns.addEventListener("click", () => {
        portfolioModels.forEach((portfoliomodalView) => {
            portfoliomodalView.classList.remove("active");
    });
});
});


const ModalCloseBtns = document.querySelectorAll(".fa-xmark");

ModalCloseBtns.forEach((CloseBtn) => {
    CloseBtn.addEventListener("click", () => {
        serviceModels.forEach((modalView) => {
            modalView.classList.remove("active");
    });
});
});

// menu higlight
window.addEventListener("scroll",() =>{
    const section = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    section.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
            
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

// resposive menu 

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItems) => {
    navItems.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
