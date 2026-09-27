/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



/* ================= SERVICES ================= */

const services = {

    website: {

        icon: "◈",

        title: "Website Development",

        description:
            "SYNTHARA develops professional, responsive and modern websites for businesses, startups, organizations and personal brands. We focus on clean design, responsive layouts, performance and a strong user experience.",

        features: [

            "Business websites",

            "Corporate websites",

            "Landing pages",

            "Portfolio websites",

            "Responsive mobile design",

            "Modern user interfaces",

            "Contact forms",

            "SEO-friendly structure",

            "Website maintenance",

            "Performance optimization"

        ]

    },


    ai: {

        icon: "◉",

        title: "AI Automation",

        description:
            "SYNTHARA helps businesses use artificial intelligence to automate repetitive tasks, improve workflows and reduce manual work. AI solutions can be designed around specific business processes.",

        features: [

            "AI chatbots",

            "Customer support automation",

            "AI-powered workflows",

            "Document processing",

            "AI content workflows",

            "Lead automation",

            "AI API integration",

            "Intelligent data processing",

            "Business workflow automation"

        ]

    },


    software: {

        icon: "◇",

        title: "Software Development",

        description:
            "We develop custom software applications according to your business requirements. The goal is to create reliable software that solves specific problems and can support future growth.",

        features: [

            "Custom software",

            "Business management systems",

            "Database applications",

            "Admin dashboards",

            "Authentication systems",

            "Custom functionality",

            "Software testing",

            "Maintenance",

            "System improvements"

        ]

    },


    webapp: {

        icon: "◎",

        title: "Web Applications",

        description:
            "SYNTHARA creates interactive web applications that allow users to perform useful tasks through a browser. These applications can include dashboards, accounts, databases and custom business features.",

        features: [

            "Interactive dashboards",

            "User accounts",

            "Admin panels",

            "Database integration",

            "Authentication",

            "Management systems",

            "Responsive interfaces",

            "Custom web features",

            "Business portals"

        ]

    },


    api: {

        icon: "⛓",

        title: "API Integration",

        description:
            "APIs allow different software systems to communicate. SYNTHARA can connect your website or application with external platforms and services.",

        features: [

            "REST API integration",

            "Third-party services",

            "Payment gateways",

            "Maps integration",

            "Email services",

            "Authentication APIs",

            "Data synchronization",

            "External service integration"

        ]

    },


    ecommerce: {

        icon: "◫",

        title: "E-Commerce Development",

        description:
            "SYNTHARA develops professional online stores that allow businesses to present products, manage orders and create a convenient shopping experience for customers.",

        features: [

            "Online stores",

            "Product catalogs",

            "Shopping carts",

            "Order management",

            "Customer accounts",

            "Payment integration",

            "Responsive design",

            "Product management",

            "Admin management"

        ]

    },


    design: {

        icon: "✦",

        title: "UI / UX Design",

        description:
            "We design clean and user-friendly interfaces for websites and applications. Our focus is on creating digital experiences that are easy to understand and pleasant to use.",

        features: [

            "Website UI design",

            "Web application design",

            "Mobile-friendly layouts",

            "Wireframes",

            "User experience planning",

            "Interface improvements",

            "Modern visual design",

            "Design systems"

        ]

    },


    automation: {

        icon: "⚙",

        title: "Business Automation",

        description:
            "SYNTHARA helps businesses automate repetitive processes and create digital workflows that can reduce manual work and improve operational efficiency.",

        features: [

            "Workflow automation",

            "Lead automation",

            "Email automation",

            "Data entry automation",

            "Customer workflows",

            "Report generation",

            "Business process integration",

            "Automated notifications",

            "Digital workflow systems"

        ]

    }

};



/* ================= OPEN SERVICE ================= */

function openService(serviceName) {

    const service = services[serviceName];


    if (!service) {
        return;
    }


    document.getElementById("modalIcon").textContent =
        service.icon;


    document.getElementById("modalTitle").textContent =
        service.title;


    document.getElementById("modalDescription").textContent =
        service.description;


    const featureContainer =
        document.getElementById("modalFeatures");


    featureContainer.innerHTML = "";


    service.features.forEach(function (feature) {

        const item =
            document.createElement("div");


        item.className =
            "modal-feature";


        item.textContent =
            feature;


        featureContainer.appendChild(item);

    });


    document
        .getElementById("serviceModal")
        .classList.add("active");


    document.body.style.overflow =
        "hidden";

}



/* ================= CLOSE SERVICE ================= */

function closeService() {

    document
        .getElementById("serviceModal")
        .classList.remove("active");


    document.body.style.overflow =
        "";

}



/* ================= CLOSE MODAL OUTSIDE ================= */

document
    .getElementById("serviceModal")
    .addEventListener(
        "click",
        function (event) {

            if (event.target === this) {

                closeService();

            }

        }
    );



/* ================= ESCAPE KEY ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeService();

        }

    }
);



/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("clientName").value;


        const email =
            document.getElementById("clientEmail").value;


        const service =
            document.getElementById("clientService").value;


        const message =
            document.getElementById("clientMessage").value;


        const subject =
            encodeURIComponent(
                "New SYNTHARA Project Request - " +
                service
            );


        const body =
            encodeURIComponent(

                "Hello SYNTHARA,\n\n" +

                "Name: " +
                name +
                "\n\n" +

                "Email: " +
                email +
                "\n\n" +

                "Service Required: " +
                service +
                "\n\n" +

                "Project Details:\n" +
                message +

                "\n\nThank you."

            );


        window.location.href =
            "mailto:hello@synthara.dev" +
            "?subject=" +
            subject +
            "&body=" +
            body;

    }
);



/* ================= BACK TO TOP ================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }
);


backTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);
