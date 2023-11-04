class Project {
    constructor(title, subtitle, image, description, siteLink=null, sourceLink=null, skills=null) {
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.description = description;
        this.siteLink = siteLink;
        this.sourceLink = sourceLink;
        this.skills = skills;
    }
}

window.onload = function () {
    //scroll to top left
    window.scrollTo(0, 0);

    //animate sparkles
    let stars = document.getElementsByClassName("bi-stars");
    let sparkleScale = 5;
    if (1250 < screen.width && screen.width <= 1500) { sparkleScale = 6 };
    if (1000 < screen.width && screen.width <= 1250) { sparkleScale = 7 };
    if (750 < screen.width && screen.width <= 1000) { sparkleScale = 7 };
    if (500 < screen.width && screen.width <= 750) { sparkleScale = 8 };
    if (0 < screen.width && screen.width <= 500) { sparkleScale = 10 };
    
    let scale1 = randomIntFromInterval(5, 10) / sparkleScale;
    let xPosition1 = randomIntFromInterval(0, 90);
    let yPosition1 = randomIntFromInterval(30, 80);

    let scale2 = randomIntFromInterval(5, 10) / sparkleScale;
    let xPosition2 = randomIntFromInterval(0, 90);
    let yPosition2 = randomIntFromInterval(30, 80);

    stars[0].style.scale = scale1;
    stars[0].style.left = xPosition1 + "%";
    stars[0].style.top = yPosition1 + "%";

    stars[1].style.scale = scale2;
    stars[1].style.left = xPosition2 + "%";
    stars[1].style.top = yPosition2 + "%";

    setInterval(function () {
        scale1 = randomIntFromInterval(5, 10) / sparkleScale;
        xPosition1 = randomIntFromInterval(0, 90);
        yPosition1 = randomIntFromInterval(30, 80);

        scale2 = randomIntFromInterval(5, 10) / sparkleScale;
        xPosition2 = randomIntFromInterval(0, 90);
        yPosition2 = randomIntFromInterval(30, 80);

        stars[0].style.scale = scale1;
        stars[0].style.left = xPosition1 + "%";
        stars[0].style.top = yPosition1 + "%";

        stars[1].style.scale = scale2;
        stars[1].style.left = xPosition2 + "%";
        stars[1].style.top = yPosition2 + "%";
    }, 5000);

    //change action phrase
    let actionWords = [
        "automate processes",
        "build cool stuff",
        "solve problems"
    ];

    let phrase = document.getElementById("action-words");

    let i = 0;

    setInterval(function () {
        phrase.innerHTML = actionWords[i];
        if (i == actionWords.length - 1) {
            i = 0;
        }
        else {
            i++;
        }
    }, 10000);

    //fade through photos
    let photos = document.getElementsByClassName("aboutPhoto");
    let photoIndexStart;
    let photoIndexEnd;
    
    if (screen.width > 750) {
        photoIndexStart = 0;
        photoIndexEnd = 3;
    }
    else {
        photoIndexStart = 4;
        photoIndexEnd = 7;
    }
    
    let photoIndex = photoIndexStart;

    setTimeout(function () {
        setInterval(function () {
            photos[photoIndex].classList.remove('show');
            photos[photoIndex].classList.add('hide');
            if (photoIndex == photoIndexEnd) {
                photoIndex = photoIndexStart;
            }
            else (
                photoIndex++
            )
            photos[photoIndex].classList.add('show');
            photos[photoIndex].classList.remove('hide');
        }, 5000)
    , 5000});
    
    let photoShadow;
    
    if (screen.width > 750) {
        photoShadow = document.getElementsByClassName("aboutPictureShadow")[0];
    }
    else {
        photoShadow = document.getElementsByClassName("aboutPictureShadow")[1];
    }
    let photoPosition = 1;

    //square dance photos
    setTimeout(function () {
        setInterval(function () {
            if (photoPosition == 4) {
                photoPosition = 1;
            }
            else (
                photoPosition++
            )
            // console.log(photoPosition);
            switch (photoPosition) {
                case 1:
                    for (x = 0; x < photos.length; x++) {
                        photos[x].style.top = "0px";
                        photos[x].style.left = "0px";
                    };
                    photoShadow.style.top = "10px";
                    photoShadow.style.left = "10px";
                    break;
                case 2:
                    for (x = 0; x < photos.length; x++) {
                        photos[x].style.top = "10px";
                        photos[x].style.left = "0px";
                    };
                    photoShadow.style.top = "0px";
                    photoShadow.style.left = "10px";
                    break;
                case 3:
                    for (x = 0; x < photos.length; x++) {
                        photos[x].style.top = "10px";
                        photos[x].style.left = "10px";
                    };
                    photoShadow.style.top = "0px";
                    photoShadow.style.left = "0px";
                    break;
                case 4:
                    for (x = 0; x < photos.length; x++) {
                        photos[x].style.top = "0px";
                        photos[x].style.left = "10px";
                    };
                    photoShadow.style.top = "10px";
                    photoShadow.style.left = "0px";
            }
        }, 5000)
    , 5000});


    //initialize flickity
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
        // options
        cellAlign: 'center',
        wrapAround: true,
        autoPlay: true,
        pauseAutoPlayOnHover: true,
        selectedAttraction: 0.01,
        friction: 0.15
    });

    flkty.on('staticClick', function (event) {
        const projectModal = new bootstrap.Modal('#projectModal');
        let modalTitle = document.getElementById('modal-title');
        let modalSubtitle = document.getElementById('modal-subtitle');
        let modalImg = document.getElementById('modal-img');
        let modalDescription = document.getElementById('modal-description');
        let modalSite = document.getElementById('project-site');
        let modalSource = document.getElementById('project-source');
        let modalSkills = document.getElementById('skill-container');

        //remove all skill badges from previous project
        while (modalSkills.hasChildNodes()) {
            modalSkills.removeChild(modalSkills.firstChild);
        }

        //show all buttons that were previously hidden
        modalSite.parentElement.style.display = "inline-block";
        modalSite.innerHTML = "View Site";
        modalSource.parentElement.style.display = "inline-block";
        modalSource.innerHTML = "View Source";

        switch (event.target.getAttribute('data-bs-title')) {
            case "theater":
                modalTitle.innerHTML = theater.title;
                modalSubtitle.innerHTML = theater.subtitle;
                modalImg.src = theater.image;
                modalDescription.innerHTML = theater.description;
                if (theater.siteLink != null) {
                    modalSite.href = theater.siteLink;
                }
                else {
                    modalSite.parentElement.style.display = "none";
                }
                if (theater.sourceLink != null) {
                    modalSource.href = theater.sourceLink;
                }
                else {
                    modalSource.parentElement.style.display = "none";
                }

                skillsCounter = 0;
                theater.skills.forEach(function () {
                    const badge = document.createElement("span");
                    badge.classList.add("badge");
                    badge.classList.add("skill-badge");
                    badge.innerHTML = theater.skills[skillsCounter];
                    modalSkills.appendChild(badge);
                    skillsCounter += 1;
                })

                document.getElementById("project-source").innerHTML = "View Demo/Summary"
                break;
            case "f1":
                modalTitle.innerHTML = f1.title;
                modalSubtitle.innerHTML = f1.subtitle;
                modalImg.src = f1.image;
                modalDescription.innerHTML = f1.description;
                if (f1.siteLink != null) {
                    modalSite.href = f1.siteLink;
                }
                else {
                    modalSite.parentElement.style.display = "none";
                }
                if (f1.sourceLink != null) {
                    modalSource.href = f1.sourceLink;
                }
                else {
                    modalSource.parentElement.style.display = "none";
                }

                skillsCounter = 0;
                f1.skills.forEach(function () {
                    const badge = document.createElement("span");
                    badge.classList.add("badge");
                    badge.classList.add("skill-badge");
                    badge.innerHTML = f1.skills[skillsCounter];
                    modalSkills.appendChild(badge);
                    skillsCounter += 1;
                })

                document.getElementById("project-source").innerHTML = "View Demo/Summary"
                break;
            case "qwerty":
                modalTitle.innerHTML = QWERTYsynth.title;
                modalSubtitle.innerHTML = QWERTYsynth.subtitle;
                modalImg.src = QWERTYsynth.image;
                modalDescription.innerHTML = QWERTYsynth.description;
                if (QWERTYsynth.siteLink != null) {
                    modalSite.href = QWERTYsynth.siteLink;
                }
                else {
                    modalSite.parentElement.style.display = "none";
                }
                if (QWERTYsynth.sourceLink != null) {
                    modalSource.href = QWERTYsynth.sourceLink;
                }
                else {
                    modalSource.parentElement.style.display = "none";
                }

                skillsCounter = 0;
                QWERTYsynth.skills.forEach(function () {
                    const badge = document.createElement("span");
                    badge.classList.add("badge");
                    badge.classList.add("skill-badge");
                    badge.innerHTML = QWERTYsynth.skills[skillsCounter];
                    modalSkills.appendChild(badge);
                    skillsCounter += 1;
                })
                break;
            case "pixelCanvas":
                modalTitle.innerHTML = pixelCanvas.title;
                modalSubtitle.innerHTML = pixelCanvas.subtitle;
                modalImg.src = pixelCanvas.image;
                modalDescription.innerHTML = pixelCanvas.description;
                if (pixelCanvas.siteLink != null) {
                    modalSite.href = pixelCanvas.siteLink;
                }
                else {
                    modalSite.parentElement.style.display = "none";
                }
                if (pixelCanvas.sourceLink != null) {
                    modalSource.href = pixelCanvas.sourceLink;
                }
                else {
                    modalSource.parentElement.style.display = "none";
                }

                skillsCounter = 0;
                pixelCanvas.skills.forEach(function () {
                    const badge = document.createElement("span");
                    badge.classList.add("badge");
                    badge.classList.add("skill-badge");
                    badge.innerHTML = pixelCanvas.skills[skillsCounter];
                    modalSkills.appendChild(badge);
                    skillsCounter += 1;
                })
        }

        projectModal.toggle();
    });

    //Add instances of Project class for each project
    const theater = new Project("Vertigo Theater", "ASP.NET MVC", "images/projects/aspnetmvc.png",
        "I participated in a 2-week code sprint during which I was put in charge of creating a section of a large website built using ASP.NET MVC and Entity Framework. The project was an interactive website for managing the content and productions for a theater/acting company. I was tasked with building a section of the website where a website administrator could perform basic CRUD operations on photos for each production. I designed both the front-end and back-end for each page. The front end was developed using Razor, Bootstrap, HTML, CSS, and JavaScript. The back-end was developed using .NET MVC, Entity Framework, and C#. During the sprint, I worked with a team of other developers using Agile Methodologies to manage the project as a whole. DevOps for the project was done through Azure DevOps. Git was used for version control.",
        null,
        "https://github.com/IMarshall/ASP.NET-C-Sharp-Website",
        ["C#", "HTML", "CSS", "JS", "Razor", "Bootstrap", "ASP.NET", "MVC", "Entity Framework", "Agile", "Git", "Azure DevOps"]
    );
    const f1 = new Project("F1 Lap Times", "Django MVT", "images/projects/djangomvt.png",
        "I participated in a 2-week code sprint during which I was tasked to create a Django MVT web app with basic CRUD functionality. In addition to building the back end of the app, I designed the front end using Django template inheritance, block tags, and template tags. The entire app was integrated into a larger website and I used Git as my VCS to write, test, and ultimately merge my code into the master branch. During the sprint, I worked with a team of other developers using Agile methodologies to manage the project as a whole.",
        null,
        "https://github.com/IMarshall/Django-Python-MVT-Web-App",
        ["Python", "HTML", "CSS", "Bootstrap", "Django", "MVT", "Agile", "Git", "Azure DevOps"]
    );
    const QWERTYsynth = new Project("QWERTY Synth", "Web App", "images/projects/qwertysynth.png",
        "This is a personal project that I completed as I was first teaching myself about frontend web development. It's a web application that allows you to play your computer keyboard like a musical instrument. The coding for this is basic in concept, but complicated in execution. It uses only HTML, CSS, and JavaScript to detect keystrokes, show animations on the screen, and play the audio for each note. There was no use of other helpful frameworks like Bootstrap or jQuery. Other functions are included, such as a volume control, metronome, and the ability to change the notes to any major or minor key using the numpad. This was one of my first major projects in my journey of learning software development.<br><br>You can view/play with this web app by clicking the link below. Please note that it was not designed for mobile devices and works best in the Chrome web browser.",
        "https://imarshall.github.io/Musical_Keyboard/index.html",
        "https://github.com/IMarshall/IMarshall.github.io/tree/main/Musical_Keyboard",
        ["HTML", "CSS", "JS"]
    );
    const pixelCanvas = new Project("Pixel Canvas", "React App", "images/projects/pixelcanvas.png",
        "This was a personal project that I did to help me learn react and build something useful for my <br>3-year old daughter. I built an interactive Microsoft Paint style web app using React.",
        "https://imarshall.github.io/pixel-canvas/",
        "https://github.com/IMarshall/pixel-canvas",
        ["React", "HTML", "CSS", "JS"]
    );

    let videoModal = document.getElementById("videoModal");
    videoModal.addEventListener('hidden.bs.modal', function () {
        let jukeboxVideo = document.getElementById("jukeboxVideo");
        jukeboxVideo.pause();
        jukeboxVideo.load();
    })
}

window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    let scroll_x = this.scrollX;
    // console.log("y " + scroll_y)
    // console.log("x " + scroll_x)

    let sidebar = document.getElementById("sidebar");
    let content = document.getElementById("sidebar-content");

    if (screen.width > 999) {
        // console.log("large screen");
        if (scroll_y < 10) {
            sidebar.style.width = "50%";
            content.style.margin = " 0 35%";
        }
        else {
            sidebar.style.width = "20%";
            content.style.margin = " 0 10%";
        }
    }

    let menuButtons = document.getElementsByClassName("nav-button");

    if (screen.width > 999) {
        if (scroll_y < 10) {
            for (let i = 0; i < menuButtons.length; i++) {
                // console.log(menuButtons[i]);
                menuButtons[i].classList.remove("active");
                menuButtons[i].classList.add("inactive");
            }
        }
        else if (10 <= scroll_y && scroll_y < 700) {
            // console.log("triggered 1st item");
            let activeButton = this.document.getElementsByClassName("active")[0];
            if (activeButton != null) {
                activeButton.classList.remove("active");
                activeButton.classList.add("inactive");
            }
            menuButtons[0].classList.remove("inactive");
            menuButtons[0].classList.add("active");
        }
        else if (700 <= scroll_y && scroll_y < 1520) {
            // console.log("triggered 2nd item");
            let activeButton = this.document.getElementsByClassName("active")[0];
            if (activeButton != null) {
                activeButton.classList.remove("active");
                activeButton.classList.add("inactive");
            }
            menuButtons[1].classList.remove("inactive");
            menuButtons[1].classList.add("active");
        }
        else if (1520 <= scroll_y && scroll_y < 2000) {
            // console.log("triggered 3rd item");
            let activeButton = this.document.getElementsByClassName("active")[0];
            if (activeButton != null) {
                activeButton.classList.remove("active");
                activeButton.classList.add("inactive");
            }
            menuButtons[2].classList.remove("inactive");
            menuButtons[2].classList.add("active");
        }
        else if (2000 <= scroll_y) {
            // console.log("triggered 4th item");
            let activeButton = this.document.getElementsByClassName("active")[0];
            if (activeButton != null) {
                activeButton.classList.remove("active");
                activeButton.classList.add("inactive");
            }
            menuButtons[3].classList.remove("inactive");
            menuButtons[3].classList.add("active");
        }
    }
})

function shrinkSidebar(section) {
    let sidebar = document.getElementById("sidebar");
    let content = document.getElementById("sidebar-content");
    let element;

    switch (section) {
        case 'about':
            element = document.getElementById('aboutSection');
            break;
        case 'experience':
            element = document.getElementById('experienceSection');
            break;
        case 'projects':
            element = document.getElementById('projectSection');
            break;
        case 'contact':
            element = document.getElementById('contactSection');
            break;
    }

    if (sidebar.style.width == "50%") {
        scrollToBookmark(element)
    }
    else {
        scrollToBookmark(element, "smooth")
    }

    if (screen.width > 999) {
        sidebar.style.width = "20%";
        content.style.margin = " 0 10%";
    }
}



function fullScreen() {
    let sidebar = document.getElementById("sidebar");
    let content = document.getElementById("sidebar-content");
    let activeButton = this.document.getElementsByClassName("active")[0];
    
    if (activeButton != null) {
        activeButton.classList.remove("active");
        activeButton.classList.add("inactive");
    }

    if (screen.width > 999) {
        sidebar.style.width = "50%";
        content.style.margin = " 0 35%";
    }

    setTimeout(scrollToBookmark, 2000, document.getElementById('body'));
}

function scrollToBookmark(element, behavior = 'instant') {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - (window.innerHeight / 3);

    if (screen.width < 1000) {
        window.scrollTo({
            top: middle,
            left: 0,
            behavior: 'smooth'
        });
    }
    else {
        window.scrollTo({
            top: middle,
            left: 0,
            behavior: behavior
        });
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function focusImage(e) {
    let targetImage = e.target;

    if (targetImage.classList.contains("current")) {
        unfocusImage();
        return
    }

    if (document.getElementsByClassName("current").length != 0) {
        unfocusImage();
    }

    targetImage.classList.add("temp-class");
    targetImage.classList.replace("not-current", "current");

    targetImage.style.top = "19.5vw";
    targetImage.style.left = "20%";
    targetImage.style.rotate = "0deg";

    setTimeout(function () {
        targetImage.classList.remove("temp-class");
        targetImage.style.zIndex = "5";
        targetImage.style.top = "5vw";
        targetImage.style.left = "30%";
        targetImage.style.width = "60%";
    }, 1000);
}

function unfocusImage() {
    let targetImage = document.getElementsByClassName("current")[0];

    switch (targetImage.id) {
        case "img1":
            targetImage.classList.replace("current", "not-current");
            return
        case "img2":
            targetImage.style.left = "72%";
            targetImage.style.rotate = "15deg";
            break
        case "img3":
            targetImage.style.left = "75%";
            targetImage.style.rotate = "15deg";
            break
        case "img4":
            targetImage.style.left = "82%";
            targetImage.style.rotate = "15deg";
    }

    

    setTimeout(function () {
        targetImage.classList.replace("current", "not-current");
    }, 1000);
}

function experienceClick(e, x) {
    description = document.getElementById("experienceDescription");
    description.style.opacity = 0;

    let activeIcon = document.getElementsByClassName("active-icon")
    let matchedClick = false;

    if (activeIcon.length != 0) {
        if (activeIcon[0] == e.target) { matchedClick = true };
        activeIcon[0].style.filter = "grayscale(100%)";
        activeIcon[0].classList.remove("active-icon");
    }
    
    let experience = {
        "default": "Try clicking a few items below to learn more about what I can do.",
        "frontend": "Since I started building websites in 2019, I've honed my proficiency in HTML, CSS, and JavaScript, enabling me to craft responsive and interactive user interfaces. I really enjoy using this skillset to turn design concepts into functional and engaging digital experiences.",
        "python": "I love the simplicity, readability, and versatility of Python. It's often my first choice for my object-oriented programming projects.",
        "csharp": "C# is my first choice when I'm looking for powerful object-oriented capabilities, extensive libraries, and the ability to create efficient applications for various platforms.",
        "sql": "I have used SQL to store, retrieve, and manipulate data for various software and web applications.",
        "react": "I'm familiar with the basics of React and I'm working on learning more. I like how easy features like components, state, and VDOM make it to quickly build complex UIs and ensure smooth updates.",
        "bootstrap": "I've been using Bootstrap to create beautiful, responsive websites for a few years now. The simplicity and flexibility it offers make it my go-to framework for quick prototyping and mobile compatibility.",
        "google": "I use Google Apps Script to automate business processes within the Google Workspace for my current employer. The extensive library of tools that it offers consistently allows me to find ways to boost productivity and improve efficiency.",
        "django": "I like using Django when I need to develop a web app fast. It's great for building front-end and back-end quickly, without sacrificing security or functionality.",
        "dotnet": "ASP.NET is great for it's wide-ranging suite of tools for creating scalable, secure web apps. I've developed several websites, front-end and back-end, using ASP.NET.",
        "airslate": "I use AirSlate daily to create quick electronic documents and streamline business workflows for my current employer. I consider myself an expert in most of it's features.",
        "vs": "I use Visual Studio or VS Code every day. Their ease-of-use, tools like the built-in console and debugger, and seamless integration with Git make them my go-to IDEs.",
        "agile": "I've worked on several development teams using Agile methodologies. I love how Agile fosters collaboration, teamwork, and improvment while still allowing the team to focus on delivering exactly what the customer wants.",
        "azure": "I've used Azure DevOps on several development teams. It really streamlines the development process and makes efficient collaboration easy.",
        "git": "I'm comfortable with using Git for version control and have used it on many projects.",
        "github": "I've used GitHub for many projects and feel very comfortable with it."
    }

    if (matchedClick != true) {
        e.target.classList.add("active-icon");
        e.target.style.filter = "grayscale(0%)";

        setTimeout(function () {
            description.innerHTML = experience[x];
            description.style.opacity = 1;
        }, 1000);
    }

    else {
        setTimeout(function () {
            description.innerHTML = experience['default'];
            description.style.opacity = 1;
        }, 1000);
    }
}

function inputValidationFocusOut() {
    let email = document.getElementById("Email");
    let emailLBL = document.getElementById("emailLBL");
    let emailContainer = document.getElementById("emailContainer");

    if (email.value != "") {
        if (!email.checkValidity()) {
            email.value = "Please enter a valid email address.";
        }
    }
}