$(document).ready(menuClickListeners);

function menuClickListeners() {
    if (screen.width < 768) {
        const navLinks = document.querySelectorAll('.nav-link');
        const menuToggle = document.getElementById('navbarSupportedContent');
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        }
        )

        $(document).ready(function () {
            $(document).click(function (event) {
                var clickover = $(event.target);
                var _opened = $(".navbar-collapse").hasClass("show");
                if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                    $("button.navbar-toggler").click();
                }
            });
        });
    }
}

$('#contactModal').on('hidden.bs.modal', function () {
    var name = document.getElementById("Name");
    var email = document.getElementById("Email");
    var message = document.getElementById("Message");
    var emailLBL = document.getElementById("emailLBL");

    name.value = '';
    email.value = '';
    message.value = '';
    emailLBL.style.left = "0";
    emailLBL.style.width = "100%";
    emailLBL.style.background = "none";
    emailLBL.style.color = "var(--darkgray)";
});

function openModal() {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = 0;
}

function closeModal() {
    var name = document.getElementById("Name");
    var email = document.getElementById("Email");
    var message = document.getElementById("Message");
    var emailLBL = document.getElementById("emailLBL");

    name.value = '';
    email.value = '';
    message.value = '';
    emailLBL.style.left = "0";
    emailLBL.style.width = "100%";
    emailLBL.style.background = "none";
    emailLBL.style.color = "var(--darkgray)";
}

function inputValidationFocusIn() {
    let email = document.getElementById("Email");
    let emailLBL = document.getElementById("emailLBL");

    emailLBL.style.left = "70%";
    emailLBL.style.width = "30%";
    emailLBL.style.background = "var(--blue)";
    emailLBL.style.color = "white";

    if (!email.checkValidity()) {
        email.value = "";
        email.style.color = "black";
        email.style.fontWeight = "lighter";
    }
}

function inputValidationFocusOut() {
    let email = document.getElementById("Email");
    let emailLBL = document.getElementById("emailLBL");

    if (email.value != "") {
        emailLBL.style.left = "70%";
        emailLBL.style.width = "30%";
        emailLBL.style.background = "var(--blue)";
        emailLBL.style.color = "white";

        if (!email.checkValidity()) {
            email.style.color = "var(--negative)";
            email.style.fontWeight = "bold";
            email.value = "Please enter a valid email address.";
        }
    }
    else{
        emailLBL.style.left = "0";
        emailLBL.style.width = "100%";
        emailLBL.style.background = "none";
        emailLBL.style.color = "var(--darkgray)";
    }
}