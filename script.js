const resumeData = {
  name: "Tanya Sharma",
  contact:
    "Flat No. 302, Sunrise Apartments, Sector 15, Gurgaon, Haryana 122001, India " |
    "+91 9876543210" |
    "tanya.sharma@example.com",
  website: "www.interestingsite.com" | "github.com/tanyasharma",
  objective:
    "To apply my software development expertise and problem-solving skills to create innovative solutions that enhance user experiences and drive business growth in a dynamic organization.",
  skills: [
    "Communication",
    "Problem-solving",
    "Critical thinking",
    "Time management",
    "Lesson planning",
    "Leadership",
    "Creative writing",
  ],
  

  education: [
    {
      degree: "Bachelor’s Degree in Elementary Education",
      institution: "Bellows College",
      location: "Santa Fe, NM",
      graduationYear: "2015",
    },

    {
      degree: "High School Diploma",
      institution: "Santa Fe High School",
      location: "Santa Fe, NM",
      graduationYear: "2011",
    },
  ],

  achievements: [
    "Awarded 'Teacher of the Year' at Balsam Elementary School (2021).",
    "Implemented a literacy program, improving reading scores by 20%.",
    "Organized an annual science fair with 200+ participants.",
    "Recognized for excellence during college teaching assignments.",
  ],

  languages_and_technologies: {
    programming_languages: [
      "JavaScript (Advanced)",
      "Python (Advanced)",
      "C++ (Intermediate)",
      "SQL (Intermediate)",
      "Java (Basic)",
    ],
    technologies_and_tools: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Git",
      "Docker",
      "REST APIs",
    ],
  },
  projects: [
    {
      title: "Peer Mentoring Program",
      description: [
        "Developed a web-based application to pair mentors with new students using a matching algorithm.",
        "Built the backend with Node.js and MongoDB for managing user data and matching logic.",
      ],
    },
    {
      title: "Newsletter Automation",
      description: [
        "Designed and implemented a system to automate newsletter creation using React.js for the frontend.",
        "Used Python for backend automation and integrated email API for newsletter distribution.",
      ],
    },
    {
      title: "EdTech Curriculum Implementation",
      description: [
        "Created an interactive dashboard for teachers to manage and track student progress.",
        "Utilized JavaScript, Express.js, and MySQL for data storage and seamless functionality.",
      ],
    },
  ],
};

// Populate data dynamically
document.getElementById("name").textContent = resumeData.name;
document.getElementById("contact").textContent = resumeData.contact.replace(
  /\|/g,
  "<br>"
);
document.getElementById("website").textContent = resumeData.website;
document.getElementById("objective").querySelector("p").textContent =
  resumeData.objective;

// Skills
const skillsSection = document.getElementById("skills").querySelector("ul");
resumeData.skills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsSection.appendChild(li);
});

// Experience
const experienceSection = document.getElementById("experience");
resumeData.experience.forEach((exp) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${exp.title}</strong> • ${exp.company} • ${exp.location}<br>${exp.duration}`;
  experienceSection.appendChild(p);
});

// Education
document.getElementById("education").querySelector("p").textContent =
  resumeData.education;
document.getElementById("communication").querySelector("p").textContent =
  resumeData.communication;
document.getElementById("leadership").querySelector("p").textContent =
  resumeData.leadership;
document.getElementById("references").querySelector("p").textContent =
  resumeData.references;

// Download resume as PDF
// function downloadResume() {
//   const element = document.querySelector('.resume');

//   // Use html2canvas to capture the styled content
//   html2canvas(element, {
//     scale: 2,
//     useCORS: true
//   }).then(canvas => {
//     const imgData = canvas.toDataURL('image/png');
//     const { jsPDF } = window.jspdf;
//     const pdf = new jsPDF('p', 'mm', 'a4');

//     // Calculate dimensions for the image to fit A4
//     const imgWidth = 210;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//     pdf.save('resume.pdf');
//   }).catch(error => {
//     console.error('Error generating PDF:', error);
//     alert('Failed to download the resume. Please try again.');
//   });
// }
