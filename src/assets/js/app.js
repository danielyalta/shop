
// ======================== Main JS ======================== //
document.addEventListener("DOMContentLoaded", function (event) {


    // === Variables === //
    const header = document.getElementById('header');
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');
    // 




    // ============ Fixed-sticky Header ============ //  
    window.onscroll = function () { stickyfixed() };

    // Get the offset position of the navbar
    let sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyfixed() {
        if (window.pageYOffset > sticky) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }


    // ============ Burger Nav Toggle ============ //
    burger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        burger.classList.toggle("show");
        navMenu.classList.toggle("show");
    }


    // ============ Nav-link click: close burger ============ //    
    navLinks.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        burger.classList.remove("show");
        navMenu.classList.remove("show");
    }


    // ============ Smooth scrolling to Nav-links ============ //
    //     document.querySelectorAll('.nav__item a[href^="#"]')
    //         .forEach(trigger => {
    //             trigger.onclick = function (e) {
    //                 e.preventDefault();
    //                 let hash = this.getAttribute('href');
    //                 let target = document.querySelector(hash);
    //                 let headerOffset = 50;
    //                 let elementPosition = target.offsetTop;
    //                 let offsetPosition = elementPosition - headerOffset;

    //                 window.scrollTo({
    //                     top: offsetPosition,
    //                     behavior: "smooth"
    //                 });
    //             };
    //         });

    // });

    // ============ Smooth scrolling to Nav-links ============ //


    const introBtn = document.getElementById('introBtn')

    navLinks.forEach(trigger => {
        trigger.onclick = function (e) {
            e.preventDefault();
            let hash = this.getAttribute('href');
            let target = document.querySelector(hash);
            let headerOffset = 50;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        };
    });

});