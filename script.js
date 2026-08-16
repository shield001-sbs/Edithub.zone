/* =========================================================
   EDITHUB.ZONE
   INTERACTIVE JAVASCRIPT
========================================================= */


/* =========================================================
   ALWAYS START FROM HOME
========================================================= */

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}


window.addEventListener("load", function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });

});


/* =========================================================
   INTRO SCREEN
========================================================= */

window.addEventListener("load", function () {

    const intro =
        document.getElementById("intro");


    setTimeout(function () {

        if (intro) {
            intro.classList.add("hide");
        }

    }, 1800);

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (!navbar) return;


    if (window.scrollY > 50) {

        navbar.classList.add(
            "navbar-scrolled"
        );

    } else {

        navbar.classList.remove(
            "navbar-scrolled"
        );

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.querySelector(".mobile-menu-btn");

const mobileMenu =
    document.querySelector(".mobile-menu");


if (
    mobileMenuButton &&
    mobileMenu
) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle(
                "active"
            );

        }
    );

}


document
    .querySelectorAll(".mobile-menu a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    });


/* =========================================================
   SMOOTH NAVIGATION + PAGE TRANSITION
========================================================= */

const transition =
    document.querySelector(
        ".page-transition"
    );


const navigationLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            if (transition) {

                transition.classList.add(
                    "active"
                );

            }


            setTimeout(function () {

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }, 250);


            setTimeout(function () {

                if (transition) {

                    transition.classList.remove(
                        "active"
                    );

                }

            }, 900);

        }
    );

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal, .service-card, .work-card, .pricing-card, .support-card"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function (element) {

        if (
            !element.classList.contains(
                "reveal"
            )
        ) {

            element.classList.add(
                "reveal"
            );

        }


        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   SERVICE CARD 3D TILT
========================================================= */

const serviceCards =
    document.querySelectorAll(
        ".service-card"
    );


serviceCards.forEach(function (card) {

    card.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 22;


            const rotateY =
                (centerX - x) / 22;


            card.style.transform =

                `perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-7px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "perspective(900px) " +
                "rotateX(0deg) " +
                "rotateY(0deg) " +
                "translateY(0)";

        }
    );

});


/* =========================================================
   WORK CARD 3D TILT
========================================================= */

const workCards =
    document.querySelectorAll(
        ".work-card"
    );


workCards.forEach(function (card) {

    card.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -4;


            const rotateY =
                ((x - centerX) / centerX) * 4;


            card.style.transform =

                `perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.015)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "perspective(1000px) " +
                "rotateX(0) " +
                "rotateY(0) " +
                "scale(1)";

        }
    );

});


/* =========================================================
   BUTTON RIPPLE
========================================================= */

const buttons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, .nav-project-btn, .project-submit-btn"
    );


buttons.forEach(function (button) {

    button.addEventListener(
        "click",
        function (event) {

            const ripple =
                document.createElement(
                    "span"
                );


            ripple.classList.add(
                "ripple"
            );


            const rect =
                button.getBoundingClientRect();


            ripple.style.left =
                (
                    event.clientX -
                    rect.left
                ) + "px";


            ripple.style.top =
                (
                    event.clientY -
                    rect.top
                ) + "px";


            button.appendChild(
                ripple
            );


            setTimeout(
                function () {

                    ripple.remove();

                },
                700
            );

        }
    );

});


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
    document.createElement(
        "div"
    );


cursor.classList.add(
    "custom-cursor"
);


document.body.appendChild(
    cursor
);


document.addEventListener(
    "mousemove",
    function (event) {

        if (
            window.innerWidth <= 700
        ) {
            return;
        }


        cursor.style.left =
            event.clientX + "px";


        cursor.style.top =
            event.clientY + "px";

    }
);


const interactiveElements =
    document.querySelectorAll(
        "a, button, .service-card, .work-card, .pricing-card, .support-card"
    );


interactiveElements.forEach(
    function (element) {

        element.addEventListener(
            "mouseenter",
            function () {

                cursor.classList.add(
                    "cursor-hover"
                );

            }
        );


        element.addEventListener(
            "mouseleave",
            function () {

                cursor.classList.remove(
                    "cursor-hover"
                );

            }
        );

    }
);


/* =========================================================
   WORK FILTER SYSTEM
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const workItems =
    document.querySelectorAll(
        ".work-item"
    );


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                workItems.forEach(
                    function (item) {

                        const category =
                            item.dataset.category;


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            item.classList.remove(
                                "hidden"
                            );

                        }

                        else {

                            item.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   START CHAT
========================================================= */

function openChat() {

    alert(

        "EDITHUB.ZONE TEAM SUPPORT\n\n" +

        "Our live chat is coming soon.\n\n" +

        "For now, please contact us by email or phone."

    );

}


/* =========================================================
   LEGAL PAGES
========================================================= */

function openLegalPage(type) {

    const legalPage =
        document.getElementById(
            "legalPage"
        );


    const privacyPage =
        document.getElementById(
            "privacyPage"
        );


    const termsPage =
        document.getElementById(
            "termsPage"
        );


    if (!legalPage) {
        return;
    }


    legalPage.classList.add(
        "active"
    );


    privacyPage.classList.remove(
        "active"
    );


    termsPage.classList.remove(
        "active"
    );


    if (type === "privacy") {

        privacyPage.classList.add(
            "active"
        );

    }


    if (type === "terms") {

        termsPage.classList.add(
            "active"
        );

    }


    document.body.classList.add(
        "no-scroll"
    );


    legalPage.scrollTop = 0;

}


function closeLegalPage() {

    const legalPage =
        document.getElementById(
            "legalPage"
        );


    if (legalPage) {

        legalPage.classList.remove(
            "active"
        );

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   PROJECT PAGE
========================================================= */

function openProjectPage() {

    const projectPage =
        document.getElementById(
            "projectPage"
        );


    const projectForm =
        document.getElementById(
            "projectForm"
        );


    const projectSuccess =
        document.getElementById(
            "projectSuccess"
        );


    if (!projectPage) {
        return;
    }


    projectPage.classList.add(
        "active"
    );


    document.body.classList.add(
        "no-scroll"
    );


    if (projectForm) {

        projectForm.style.display =
            "grid";

    }


    if (projectSuccess) {

        projectSuccess.classList.remove(
            "active"
        );

    }


    projectPage.scrollTop = 0;

}


function closeProjectPage() {

    const projectPage =
        document.getElementById(
            "projectPage"
        );


    if (projectPage) {

        projectPage.classList.remove(
            "active"
        );

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   PROJECT FORM
========================================================= */

const projectForm =
    document.getElementById(
        "projectForm"
    );


if (projectForm) {

    projectForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            projectForm.style.display =
                "none";


            const projectSuccess =
                document.getElementById(
                    "projectSuccess"
                );


            if (projectSuccess) {

                projectSuccess.classList.add(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   FILE UPLOAD NAME
========================================================= */

const projectFile =
    document.getElementById(
        "projectFile"
    );


if (projectFile) {

    projectFile.addEventListener(
        "change",
        function () {

            const fileName =
                document.querySelector(
                    ".file-name"
                );


            if (
                projectFile.files.length > 0 &&
                fileName
            ) {

                fileName.textContent =
                    "📎 " +
                    projectFile.files[0].name;

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY CLOSE
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeLegalPage();

            closeProjectPage();

        }

    }
);