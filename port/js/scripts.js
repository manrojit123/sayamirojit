document.addEventListener("DOMContentLoaded", function () {
  const projectsData = [
    {
      title: "Nepali Patro",
      image: "images/p_shoof.png",
      description:
        "Nepali Patro (नेपाली पात्रो) utility app with Nepali Calendar Events, Festivals, Rashifal, Panchanga, News, Radio, Date Conversion, Customs Events and more feaures.",
      link: "https://example.com/project-alpha",
      involvement: "Lead Developer",
    },
    {
      title: "Project Beta",
      image: "https://example.com/image2.jpg",
      description:
        "Project Beta focuses on enhancing user experience in Z domain by introducing feature A.",
      link: "https://example.com/project-beta",
      involvement: "Project Manager",
    },
  ];

  const projectsContainer = document.getElementById("projects");

  projectsData.forEach((project) => {
    const projectElement = document.createElement("div");
    const projectsContainer = document.getElementById("projects");

    projectsData.forEach((project) => {
      const projectElement = document.createElement("div");
      let involvementsListHtml = "<ul>";
      project.involvement.forEach((role) => {
        involvementsListHtml += `<li>${role}</li>`;
      });
      involvementsListHtml += "</ul>";

      projectElement.innerHTML = `
            <div class="row pb-4 mb-4">
                    <div class="col-10 mx-auto">
                        <div class="row ju
                        stify-content-center pt-4 mt-4 ">
                            <div class="col-12">
                                <img src="${project.image}" alt="${project.title}" class="projectImage">
                            </div>
                        </div>
                        <div class="row justify-content-center mt-3 pt-1">
                            <div class="col-12 d-flex justify-content-between">
                                <h2>${project.title}</h2>
                                <span class="button arrow" onclick="showInfo('Nauseni')""> Process</a>
                            </div>
                            <div class="col-12 text-justify">
                                <p>${project.description}</p>
                                <h6 class="role-title"><b>My Role</b></h6>
                                <ul class="" mb-0>
                                    ${project.involvement}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
      projectsContainer.appendChild(projectElement);
    });
  });
});



const brandingLogos = {
  images: [
    "images/igif-kids.png",
    "images/gikee.png",
    "images/zeronebits.png",
    "images/zeronetracker.png",
    "images/allo.png",
    "images/sobeynetworks.png",
  ],
};
const brandingInfo = document.getElementById("brandingImage");
let brandingLogoList = brandingLogos.images
  .map(
    (
      imgUrl
    ) => `<div class="col-4" data-aos="fade-up" data-aos-duration="3000" data-aos-offset="300">
                                <img src="${imgUrl}" alt="" class="projectImage">
                            </div>`
  )
  .join("");
brandingInfo.innerHTML = `${brandingLogoList}`;

const workedForLogo = {
  images: [
    "/images/nepalipatro.png",
    "/images/allotowers.png",
    "images/sobey.png",
    "images/nauseni.png",
    "images/nextgen.png",
    "images/shoof.png",
    "images/amojee.png",
  ],
};
const workedForInfo = document.getElementById("workedForInfo");
let workforList = workedForLogo.images
  .map(
    (imgUrl) => `<li data-aos="fade-up" data-aos-duration="700"><a
                                                        href="https://allotowers.com/"><img src="${imgUrl}"
                                                            alt="Allo Towers: Critical communications infrastructure company for public safety tower and radio infrastructure "></a>
                                                </li>`
  )
  .join("");
workedForInfo.innerHTML = `${workforList}`;

//Popup from bottom to upward
// Sample JSON data for the countries
const projectDetails = {
  Nauseni: {
    projectName: "Nauseni",
    description:
      "Nauseni founded in Nepal by Wilatluk following the 2015 earthquake is a british designed slippers and handcrafted by female artisans in Nepal with traditional wool felting skills.",
    roles: "Designer",
    rolesDetails:
      "<ul class='mb-0'><li>Idea formulation for design and making visual interface</li><li>Apply front end skill to make a website</li><li>Assist developer while making website dynamic and implementing eCommercefefature </li></ul>",
    logo: "/images/nauseni.png",
    images: [
      "path/to/nepal/image1.jpg",
      "path/to/nepal/image2.jpg",
      // more images
    ],
  },
  India: {
    projectName: "New Delhi",
    description: "1.3 billion",
    roles: "Hindi, English",
    rolesDetails: "",
    logo: "path/to/india/logo.png",
    images: [
      "path/to/india/image1.jpg",
      "path/to/india/image2.jpg",
      // more images
    ],
  },
  China: {
    projectName: "Beijing",
    description: "1.4 billion",
    roles: "Mandarin",
    rolesDetails: "",
    logo: "path/to/china/logo.png",
    images: [
      "path/to/china/image1.jpg",
      "path/to/china/image2.jpg",
      // more images
    ],
  },
};

// Adjusted JavaScript for bottom-to-up sidebar

// Function to open the sidebar and show info for the selected country
function showInfo(country) {
  const sidebar = document.getElementById("infoSidebar");
  const countryInfo = document.getElementById("countryInfo");
  const body = document.body;
  const overlay = document.getElementById("overlay");

  // Generate the HTML for the country's logo and images
  let imagesHtml = projectDetails[country].images
    .map(
      (imgUrl) =>
        `<img src="${imgUrl}" alt="Image" style="width:100%;margin-top:10px;">`
    )
    .join("");

  // Update the sidebar content with the country's data
  countryInfo.innerHTML = `<img class="sidebar-logo" src="${projectDetails[country].logo}" alt="Logo">
                           <p> ${projectDetails[country].description}</p>
                           <hr>
                           <p>My Roles: ${projectDetails[country].roles}</p>
                           <p${projectDetails[country].rolesDetails}</p>
                           ${imagesHtml}`;

  // Open the sidebar by adjusting its height
  sidebar.style.height = "93vh";
  overlay.style.display = "block"; // Show the overlay
  body.style.overflow = "hidden"; // Prevent scrolling
  body.style.backgroundColor = "rgba(0,0,0,0.4)"; // Add a semi-transparent overlay effect
}

// Function to close the sidebar
function closeSidebar() {
  //   document.getElementById("infoSidebar").style.height = "0";

  const sidebar = document.getElementById("infoSidebar");
  const overlay = document.getElementById("overlay");

  // Close the sidebar
  sidebar.style.height = "0";
  overlay.style.display = "none"; // Hide the overlay

  // Optional: Allow scrolling on the main body
  document.body.style.overflow = "";
}

AOS.init();
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".container_mouse").addClass("invisible");
    console.log("OK");
  } else {
    $(".container_mouse").removeClass("invisible");
  }
});


// const body = document.body,
//   jsScroll = document.getElementsByClassName("js-scroll")[0],
//   height = jsScroll.getBoundingClientRect().height - 1,
//   speed = 0.05;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;

//   var scroll = "translateY(-" + offset + "px) translateZ(0)";
//   jsScroll.style.transform = scroll;

//   raf = requestAnimationFrame(smoothScroll);
// }
// smoothScroll();

