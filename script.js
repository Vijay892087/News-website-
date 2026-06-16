// =========================
// WEBSITE LOADED
// =========================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Global Express News Loaded Successfully");

});

// =========================
// MEMBER FORM
// =========================

const memberForm = document.querySelector(".member-form");

if (memberForm) {

    memberForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank You For Becoming A Member!");

        memberForm.reset();

    });

}

// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector("#contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Your Message Has Been Sent Successfully!");

        contactForm.reset();

    });

}

// =========================
// AUTO YEAR IN FOOTER
// =========================

const footerText = document.querySelector("footer p:last-child");

if (footerText) {

    footerText.innerHTML =
        "© " + new Date().getFullYear() + " All Rights Reserved";

}

// =========================
// NEWS CARD ANIMATION
// =========================

const cards = document.querySelectorAll(".news-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#ffc107";
scrollBtn.style.color = "#000";
scrollBtn.style.fontSize = "22px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// LIVE DATE & TIME
// =========================

function updateDateTime() {

    const dateBox = document.getElementById("liveDateTime");

    if (dateBox) {

        const now = new Date();

        dateBox.innerHTML = now.toLocaleString();

    }

}

setInterval(updateDateTime, 1000);
