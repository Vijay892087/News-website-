// ==========================
// WEBSITE LOADED
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    console.log("The Global Express Loaded Successfully");

    showWelcomeMessage();
    createScrollButton();
    updateDateTime();

});

// ==========================
// MEMBER FORM
// ==========================

const memberForm = document.getElementById("memberForm");

if (memberForm) {

    memberForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("🎉 Thank You For Becoming A Member!");

        memberForm.reset();

    });

}

// ==========================
// READ MORE BUTTONS
// ==========================

const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Full News Page Coming Soon!");

    });

});

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

function createScrollButton() {

    const btn = document.createElement("button");

    btn.innerHTML = "↑";

    btn.id = "scrollTopBtn";

    document.body.appendChild(btn);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            btn.style.display = "block";

        } else {

            btn.style.display = "none";

        }

    });

    btn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ==========================
// LIVE DATE & TIME
// ==========================

function updateDateTime() {

    let dateContainer = document.getElementById("liveDate");

    if (!dateContainer) {

        dateContainer = document.createElement("div");

        dateContainer.id = "liveDate";

        dateContainer.style.background = "#111827";
        dateContainer.style.color = "white";
        dateContainer.style.padding = "10px";
        dateContainer.style.textAlign = "center";
        dateContainer.style.fontWeight = "bold";

        document.body.prepend(dateContainer);

    }

    setInterval(() => {

        const now = new Date();

        dateContainer.innerHTML =
            "📅 " + now.toLocaleDateString() +
            " | ⏰ " + now.toLocaleTimeString();

    }, 1000);

}

// ==========================
// DARK MODE
// ==========================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.style.position = "fixed";
darkBtn.style.top = "100px";
darkBtn.style.right = "20px";
darkBtn.style.zIndex = "999";
darkBtn.style.border = "none";
darkBtn.style.padding = "10px 15px";
darkBtn.style.borderRadius = "10px";
darkBtn.style.cursor = "pointer";

document.body.appendChild(darkBtn);

let darkMode = false;

darkBtn.addEventListener("click", function () {

    darkMode = !darkMode;

    if (darkMode) {

        document.body.style.background = "#121212";
        document.body.style.color = "#ffffff";

        darkBtn.innerHTML = "☀️";

    } else {

        document.body.style.background = "#f5f7fa";
        document.body.style.color = "#000000";

        darkBtn.innerHTML = "🌙";

    }

});

// ==========================
// NEWS SEARCH BAR
// ==========================

function createSearchBar() {

    const searchBox = document.createElement("input");

    searchBox.placeholder = "Search News...";

    searchBox.style.width = "300px";
    searchBox.style.padding = "10px";
    searchBox.style.margin = "20px";
    searchBox.style.borderRadius = "10px";

    document.body.insertBefore(
        searchBox,
        document.body.children[2]
    );

    searchBox.addEventListener("keyup", function () {

        const value = searchBox.value.toLowerCase();

        const cards = document.querySelectorAll(".news-card");

        cards.forEach(function (card) {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

createSearchBar();

// ==========================
// WELCOME MESSAGE
// ==========================

function showWelcomeMessage() {

    setTimeout(() => {

        alert("📰 Welcome To The Global Express News Portal");

    }, 1000);

}

// ==========================
// IMAGE HOVER EFFECT
// ==========================

const images = document.querySelectorAll("img");

images.forEach(function (img) {

    img.addEventListener("mouseenter", function () {

        img.style.transform = "scale(1.03)";
        img.style.transition = "0.4s";

    });

    img.addEventListener("mouseleave", function () {

        img.style.transform = "scale(1)";

    });

});

// ==========================
// CURRENT YEAR AUTO UPDATE
// ==========================

const copyright =
    document.getElementById("copyright");

if (copyright) {

    copyright.innerHTML =
        "© " +
        new Date().getFullYear() +
        " The Global Express. All Rights Reserved.";

}

// ==========================
// SMOOTH NAVIGATION
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});