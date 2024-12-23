// scripts
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Static resume data
const resumeData = {
    "name": "Sri Ganesh Arjula",
    "title": "Machine Learning Engineer & Data Scientist",
    "skills": [
        {"name": "Python", "level": 90},
        {"name": "Machine Learning", "level": 85},
        {"name": "Deep Learning", "level": 80},
        {"name": "Generative AI", "level": 88},
        {"name": "FastAPI", "level": 75},
        {"name": "TensorFlow", "level": 82},
        {"name": "PyTorch", "level": 78},
        {"name": "SQL", "level": 85},
        {"name": "Docker", "level": 70},
        {"name": "Kubernetes", "level": 65}
    ],
    "experience": [
        {
            "title": "Machine Learning Engineer",
            "company": "Healthi Ai",
            "period": "July 2024 - Present",
            "description": "Enhancing MedPal AI's machine learning backend and developing advanced AI algorithms for clinical decision support."
        },
        {
            "title": "Risk Analyst",
            "company": "Webacy",
            "period": "June 2024 - July 2024",
            "description": "Applied clustering techniques and data analysis to identify vulnerabilities in smart contracts."
        },
        {
            "title": "IoT Developer Intern",
            "company": "Appleton Innovations",
            "period": "March 2020 - June 2020",
            "description": "Developed IoT devices and systems, implementing network protocols for improved connectivity."
        }
    ],
    "projects": [
        {
            "title": "Skin Care AI Chatbot",
            "description": "Dermatology chatbot using OpenBioLLM and Pali-Gemma for skin disease diagnosis and advice.",
            "technologies": ["Python", "FastAPI", "OpenBioLLM", "Pali-Gemma"],
            "github": "https://github.com/sriganesh123/skin_disease_chatbot"

        },

        {
            "title": "RAG Based Chatbot",
            "description": "Webpage chatbot using Retrieval-Augmented Generation architecture with ChromaDB for efficient querying.",
            "technologies": ["Python", "FastAPI", "ChromaDB", "Llama 3"],
            "github": "https://github.com/sriganesh123/chatbot_website"

        },
        {
            "title": "Heart Sound Classification",
            "description": "Deep learning model using RNN to classify heart sounds into normal, murmur, and artifact categories.",
            "technologies": ["Python", "TensorFlow", "Keras", "Librosa"],
            "github": "https://github.com/sriganesh123/HEART-SOUND-CLASSIFICATION-"

        },
        {
            "title": "Carpooling Web-App Using FastAPI (Beta Version)",
            "description": "Developed a carpooling web app using FastAPI with real-time notifications via WebSockets for ride updates. Designed a responsive front-end with HTML, CSS, JavaScript, and Bootstrap. Ensured seamless communication between passengers and drivers. Future plans include integrating machine learning for optimized route matching. Tools: Python, FastAPI, WebSockets, Google Places API, GitLab CI/CD.",
            "technologies": ["Python", "JavaScript","HTML", "CSS", "FastAPI", "WebSockets", "Bootstrap", "Google Places API"],
            "website": "https://one-stop-x4ep.onrender.com/",
        },
        {
            "title": "Telecommunicatiopns Alarm Forcasting",
            "description": "Developed a telecommunications alarm forecasting project using time series analysis, achieving 85% accuracy with SARIMA models, resulting in improved operational planning and preemptive maintenance, while utilizing Python, Pandas, Matplotlib, Seaborn, and auto ARIMA for data analysis, model optimization, and visualization.",
            "technologies": ["Python", "SARIMAX", "Auto ARIMA", "Matplotlib", "Seaborn"],
            "github": null

        },
        
{
            "title": "Clustering Service Centers and Units",
            "description": "Conducted k-means clustering analysis of Ferrellgas’s network, evaluating 35 service centers and 658 service units based on performance metrics. Developed an interactive dashboard using Plotly and Dash for data visualization. Integrated the all-MiniLM L6-v2 transformer model to provide real-time answers via a chatbot, improving data accessibility and decision-making with real-time insights.",
            "technologies": ["Python", "k-means", "plotly", "dash", "all-MiniLM L6-v2 "],
            "github": null
        },

    ],
    "awards": [
        {
            "title": "Best Paper for Flood Prediction System",
            "description": "Awarded Best Paper for Flood Prediction System using IoT and LoRa Technologies.",
            "url": "https://drive.google.com/file/d/1vlIdczxURlaVL3FR46a6g_cwPRMdYvle/view?usp=sharing" 
        },
        {
            "title": "Best Project Award",
            "description": "Received Best Project Award at the 5th National Level IEEE Project Competition-2021.",
            "url": "https://drive.google.com/file/d/123smyBd4qoxREpsRfr8nQztqwDpBoxL5/view?usp=sharing" 
        },
        {
            "title": "National Level Project Expo",
            "description": "Secured first place in the national level project expo held at IIIT NUZVID.",
            "url": "https://drive.google.com/file/d/1Yc9pqUgN2aJumWus8yqJFE18IAkyvAZY/view?usp=sharing"  
        },
        {
            "title": "Smart India Hackathon",
            "description": "Won the Smart India Hackathon 2020 Hardware Edition, inaugurated by India's Prime Minister.",
            "url": "https://drive.google.com/file/d/1wPPuJUFsaIDfindYg6acFZo7pj5Ml_c7/view?usp=sharing"  
        }
    ],
    "certifications": [
        "OCI Generative AI Professional",
        "Databases and SQL for Data Science with Python.",
        "Python for Data Science, AI & Development."
    ],
    "publications": [
        "IOT BASED WATER QUALITY MONITORING SYSTEM, 2021 IEEE 9TH REGION10 HUMANITARIAN TECHNOLOGY CONFERENCE (R10-HTC), BANGALORE, INDIA, 2021, PP. 01-06, DOI: 10.1109/R10-HTC53172.2021.9641630.",
        "FLOOD PREDICTION SYSTEM USING IOT AND LORA TECHNOLOGIES, 2021 IEEE BOMBAY SECTION SIGNATURE CONFERENCE (IBSSC), GWALIOR, INDIA, 2021, PP. 1-6, DOI:10.1109/IBSSC53889.2021."
    ],
};

// Function to populate content with static resume data
function populateContent(data) {
    console.log("Populating content with data:", data);

    document.getElementById('name').textContent = data.name;

    // Populate Skills
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = ''; // Clear previous content
    data.skills.forEach(skill => {
        console.log("Adding skill:", skill);
        const skillElement = document.createElement('div');
        skillElement.className = 'mb-4';
        skillElement.innerHTML = `
            <div class="flex justify-between mb-1">
                <span class="font-semibold">${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });
    // Populate Experience
    const experienceContainer = document.getElementById('experience-container');
    experienceContainer.innerHTML = ''; // Clear previous content
    data.experience.forEach(job => {
        console.log("Adding job experience:", job);
        const jobElement = document.createElement('div');
        jobElement.className = 'experience-item';
        jobElement.innerHTML = `
            <h3 class="text-xl font-semibold">${job.title}</h3>
            <p class="text-cyan-400">${job.company} | ${job.period}</p>
            <p class="mt-2">${job.description}</p>
        `;
        experienceContainer.appendChild(jobElement);
    });

    // Populate Projects
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; // Clear previous content

    resumeData.projects.forEach(project => {
        console.log("Adding project:", project);
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';

    // Check if the GitHub or website link is valid
    const githubLink = project.github ? `<a href="${project.github}" target="_blank" class="github-link text-blue-500 hover:text-blue-700"><i class="fab fa-github"></i> GitHub</a>` : '';
    const websiteLink = project.website ? `<a href="${project.website}" target="_blank" class="website-link text-blue-500 hover:text-blue-700"><i class="fas fa-link"></i> Website</a>` : '';

    projectElement.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="mb-4">${project.description}</p>
        <div class="mb-4">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="flex space-x-4">
            ${githubLink}
            ${websiteLink}
        </div>
    `;

    projectsContainer.appendChild(projectElement);
});

    // Populate Awards
    const awardsContainer = document.getElementById('awards-container');
    awardsContainer.innerHTML = ''; // Clear previous content
    data.awards.forEach(award => {
        console.log("Adding award:", award);
        
        // If the award has a link, include it, otherwise just display the description
        const awardLink = award.url ? `<a href="${award.url}" target="_blank" class="award-link text-blue-500 hover:text-blue-700">${award.title}</a>` : award.title;
        
        const awardElement = document.createElement('div');
        awardElement.className = 'award-item';
        awardElement.innerHTML = `<p class="text-lg">${awardLink}: ${award.description}</p>`;
        awardsContainer.appendChild(awardElement);
    });
    // Populate Certifications
const certificationsContainer = document.getElementById('certifications-container');
console.log('Certifications:', data.certifications); // Debugging log
certificationsContainer.innerHTML = ''; // Clear previous content
data.certifications.forEach(certification => {
    const certificationElement = document.createElement('div');
    certificationElement.className = 'certification-item';
    certificationElement.innerHTML = `<p class="text-lg">${certification}</p>`;
    certificationsContainer.appendChild(certificationElement);
});

// Populate Publications
const publicationsContainer = document.getElementById('publications-container');
console.log('Publications:', data.publications); // Debugging log
publicationsContainer.innerHTML = ''; // Clear previous content
data.publications.forEach(publication => {
    const publicationElement = document.createElement('div');
    publicationElement.className = 'publication-item';
    publicationElement.innerHTML = `<p class="text-lg">${publication}</p>`;
    publicationsContainer.appendChild(publicationElement);
});
}


// Function to initialize animations
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    console.log("Initializing animations");

    // Hero section animations
    gsap.from("#name", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("#title", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });

    // Skills section animations
    gsap.utils.toArray('.skill-progress').forEach(progress => {
        gsap.to(progress, {
            width: progress.parentNode.previousElementSibling.lastElementChild.textContent,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: progress,
                start: "top 80%",
            }
        });
    });

    // Experience section animations
    gsap.utils.toArray('.experience-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
            }
        });
    });

    // Projects section animations
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
            }
        });
    });
    // Awards section animations
    gsap.utils.toArray('.award-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
            }
        });
    });

    // Certifications section animations
    gsap.utils.toArray('.certification-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
            }
        });
    });

    // Publications section animations
    gsap.utils.toArray('.publication-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
            }
        });
    });
}

// Function to initialize smooth scroll for anchor links
function initSmoothScroll() {
    console.log("Initializing smooth scroll");

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetElement,  // Scroll to the element
                        offsetY: 70        // Offset for the fixed header
                    },
                    ease: "power3.inOut"
                });
                console.log("Scrolling to", targetId);
            } else {
                console.error("Target element not found for", targetId);
            }
        });
    });
}

// Function to create a typewriter effect for the title
function typeWriter(element, text, speed = 50) {
    console.log("Starting typewriter effect:", text);
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Function to initialize custom cursor interactions
function initCursor() {
    console.log("Initializing custom cursor");

    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a, button');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-grow');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-grow');
        });
    });
}

// Function to animate section headers on scroll
function initSectionHeaderAnimations() {
    console.log("Initializing section header animations");

    gsap.utils.toArray('section h2').forEach(header => {
        gsap.from(header, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: header,
                start: "top 80%",
            }
        });
    });
}

// Function to initialize the glitch effect
function initGlitchEffect() {
    console.log("Initializing glitch effect");

    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
        element.setAttribute('data-text', element.textContent);
    });
}

// Function to create 3D network visualization
function createNetworkVisualization() {
    console.log("Creating 3D network visualization");

    const container = document.getElementById('hero-visualization');
    let scene, camera, renderer, geometry, material, particles, lines;

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Create particles
        geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        const numParticles = 500;

        for (let i = 0; i < numParticles; i++) {
            positions.push((Math.random() - 0.5) * 10);
            positions.push((Math.random() - 0.5) * 10);
            positions.push((Math.random() - 0.5) * 10);

            colors.push(1, 0, 0); // Red
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Add glowing lines between particles
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = [];

        for (let i = 0; i < numParticles; i++) {
            const x1 = positions[i * 3];
            const y1 = positions[i * 3 + 1];
            const z1 = positions[i * 3 + 2];

            for (let j = i + 1; j < numParticles; j++) {
                const x2 = positions[j * 3];
                const y2 = positions[j * 3 + 1];
                const z2 = positions[j * 3 + 2];

                const distance = Math.sqrt(
                    Math.pow(x2 - x1, 2) +
                    Math.pow(y2 - y1, 2) +
                    Math.pow(z2 - z1, 2)
                );

                if (distance < 2) {
                    linePositions.push(x1, y1, z1);
                    linePositions.push(x2, y2, z2);
                }
            }
        }

        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

        // Create glowing line material
        const lineMaterial = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0x4040ff) }, // Slightly lighter blue for glow effect
                glowIntensity: { value: 1.5 }
            },
            vertexShader: `
                varying vec3 vPosition;
                void main() {
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 color;
                uniform float glowIntensity;
                varying vec3 vPosition;
                void main() {
                    float strength = distance(gl_PointCoord, vec2(0.5));
                    strength = 1.0 - strength;
                    strength = pow(strength, glowIntensity);
                    gl_FragColor = vec4(color, strength * 0.5);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending
        });

        lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    let time = 0;

    function animate() {
        requestAnimationFrame(animate);

        time += 0.0005;

        scene.rotation.y += 0.0005;
        scene.rotation.x = Math.sin(time * 0.1) * 0.02;

        renderer.render(scene, camera);
    }

    init();
    animate();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired");

    // Populate content with static data
    populateContent(resumeData);
    initAnimations();

    const titleElement = document.getElementById('title');
    typeWriter(titleElement, resumeData.title);

    // Initialize other features
    initSmoothScroll();
    initCursor();
    initSectionHeaderAnimations();
    initGlitchEffect();
    createNetworkVisualization();

    // Hamburger menu toggle for mobile view
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide mobile menu
        });
    } else {
        console.error("Hamburger menu or mobile menu element not found");
    }
});
