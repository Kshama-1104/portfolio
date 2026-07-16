(() => {
  "use strict";

  const { useEffect, useState } = React;
  const h = React.createElement;

  const profileImage =
    "https://drive.google.com/thumbnail?id=1Cmk_yyAy5XL-fhlVKSNwS0x_yokbRtTC&sz=w1000";
  const cvDownload =
    "https://drive.google.com/uc?export=download&id=1OFx621SOybLHpQ4HObRLlzGvFm7ttDVM";
  const external = { target: "_blank", rel: "noopener noreferrer" };

  const navItems = [
    ["Home", "#home"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Curricular", "#curricular"],
    ["Project", "#projects"],
    ["Research", "#research"],
    ["Hackathon", "#hackathon"],
  ];

  const socialLinks = [
    ["leetcode", "LeetCode", "https://leetcode.com/u/Kshama-1104/"],
    ["github", "GitHub", "https://github.com/Kshama-1104"],
    ["linkedin", "LinkedIn", "https://www.linkedin.com/in/kshama-mishra-km1104/"],
    ["email", "Email", "mailto:kshamamishra7114@gmail.com"],
  ];

  const stats = [
    ["1+", "Year Experience"],
    ["2+", "Research Papers"],
    ["40+", "Projects"],
    ["700+", "DSA Problems"],
    ["10000+", "GitHub Contributions"],
  ];

  const tickerSkills = [
    "Data Structure",
    "Database Management",
    "Web Development",
    "Artificial Intelligence",
    "Generative AI",
  ];

  const experiences = [
    {
      logo: "https://drive.google.com/thumbnail?id=1w67vMzUO8dX7gY6zh1K_g-wR8axUgJvy&sz=w400",
      offer: "https://drive.google.com/uc?export=download&id=1f7duVFm57lFhU45qXuMpp85lnOrKE78l",
      period: "May 2025 - Apr 2026",
      org: "IIT Kanpur",
      role: "Student Research Associate",
      text: "Developed immersive Virtual Lab simulations and AI-powered learning systems in the Virtual Reality Lab.",
      skills: ["Virtual Reality", "Unity", "C#", "Artificial Intelligence"],
    },
    {
      logo: "https://drive.google.com/thumbnail?id=1Z0O5To1TqtVzj7jtxFSzbP6BOLUyMxWW&sz=w400",
      offer: "https://drive.google.com/uc?export=download&id=1JZx0RcFVoeI3DLxwMXFRGBr5tkYLOlNe",
      period: "Aug 2025 - Jan 2026",
      org: "IBM",
      role: "Generative AI Virtual Intern",
      text: "Built hands-on knowledge in Generative Artificial Intelligence, Large Language Model workflows, prompt engineering, Retrieval-Augmented Generation, and responsible Artificial Intelligence practices.",
      skills: ["Gen AI", "LLMs", "RAG"],
    },
    {
      logo: "https://drive.google.com/thumbnail?id=1XqEDO9XXEq7ltQbDatUffMBFdEDWyDOm&sz=w400",
      offer: "https://drive.google.com/uc?export=download&id=1slRaGy5pDrCcZttvjelV93QupBIBmK7J",
      period: "Apr 2026 - Jul 2026",
      org: "House of Couton",
      role: "Student Matter Expert",
      text: "Created AI/ML learning content, researched emerging AI topics, and supported learner-friendly educational resources.",
      skills: ["Machine Learning", "Deep Learning"],
    },
  ];

  const skillGroups = [
    ["Programming Languages", ["Python", "Java", "SQL", "JavaScript", "ES6+"]],
    [
      "Artificial Intelligence & Machine Learning",
      [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Generative AI",
        "LLMs",
        "RAG",
        "AI Agents",
        "Prompt Engineering",
      ],
    ],
    ["GenAI Frameworks & AI Tools", ["LangChain", "LlamaIndex", "Hugging Face Transformers"]],
    [
      "Machine Learning & Deep Learning Frameworks",
      [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Keras",
        "XGBoost",
        "LightGBM",
        "Pandas",
        "NumPy",
        "OpenCV",
        "NLTK",
      ],
    ],
    [
      "Backend & Full-Stack Development",
      ["HTML5", "CSS3", "React", "Node.js", "Express.js", "FastAPI", "REST APIs", "API Integration", "Microservices"],
    ],
    ["Database & Deployment", ["MySQL", "PostgreSQL", "MongoDB", "Docker", "CI/CD", "AWS"]],
    ["Developer Tools", ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "Figma", "Postman", "Jira"]],
  ];

  const curricular = [
    {
      period: "Apr 2025 - Jan 2026",
      title: "IEEE Women in Engineering",
      role: "Chair, IEEE WIE PSIT Student Branch",
      link: "https://drive.google.com/uc?export=download&id=1_T8-T1nW03S_JIg7khWULrWYmioqajb6",
      points: [
        "Led technical events, workshops, and community initiatives.",
        "Built leadership, teamwork, public speaking, and event management experience.",
      ],
    },
    {
      period: "Dec 2025 - Feb 2026",
      title: "eDC IIT Delhi",
      role: "Campus Ambassador, Entrepreneurship Development Cell",
      link: "https://drive.google.com/uc?export=download&id=1S-Uk8BOCrCPZJkBmbfRtSvycZBPmLdLJ",
      points: [
        "Promoted entrepreneurship programs and student participation.",
        "Strengthened communication, marketing, networking, and community engagement.",
      ],
    },
  ];

  const projects = [
    ["Codesherpa AI", "AI-powered coding assistant project focused on developer support, code understanding, and intelligent software workflows.", ["Artificial Intelligence", "Developer Tool"], "https://github.com/Kshama-1104/Codesherpa-AI"],
    ["Buildwise AI", "AI-driven product for smarter planning and decision support with practical real-world software architecture.", ["AI Product", "Software"], "https://github.com/Kshama-1104/Buildwise-AI"],
    ["Glance Fashion Retrieval", "Fashion retrieval system using visual similarity matching and intelligent search workflows.", ["Computer Vision", "Retrieval"], "https://github.com/Kshama-1104/Glance_Fashion_Retrieval"],
    ["Hybrid ASCII Deepfake Detection", "Deepfake detection system combining ASCII-based representation and machine learning techniques.", ["Deep Learning", "Security"], "https://github.com/Kshama-1104/Hybrid-ASCII-Based-Deepfake-Detection-System-AIML-Project"],
    ["Vision-Language Transformer", "Transformer-based vision-language model with structured evaluation and analysis workflows.", ["Transformer", "VLM"], "https://github.com/Kshama-1104/Transformer-Based-Vision-Language-Model-with-Evaluation-Analysis"],
    ["Scalable Cloud Monitoring", "Cloud monitoring system designed for scalable observability and practical infrastructure tracking.", ["Cloud", "Monitoring"], "https://github.com/Kshama-1104/Scalable-Cloud-Monitoring-System"],
    ["Price Intelligence System", "Real-time price intelligence system for tracking data signals and supporting smarter decisions.", ["Automation", "Data"], "https://github.com/Kshama-1104/Real-time-price-intelligence-system"],
    ["CRM Issue Tracking Dashboard", "Automation dashboard for CRM issue tracking, workflow visibility, and operational reporting.", ["Dashboard", "Automation"], "https://github.com/Kshama-1104/CRM-Issue-Tracking-Automation-Dashboard"],
    ["Skin Cancer Classification", "Machine learning pipeline for skin cancer classification with model training and evaluation.", ["Machine Learning", "Healthcare AI"], "https://github.com/Kshama-1104/Skin-Cancer-Classification-Pipeline-AIML-Project"],
  ];

  const research = [
    {
      label: "Research Paper 1",
      title: "Transformer-Enhanced CNN Framework for Automated Skin Cancer Classification",
      text: "Developed an AI-powered skin cancer classification framework using Convolutional Neural Networks, Vision Transformers, transfer learning, and advanced optimization techniques, achieving up to 97% classification accuracy.",
      link: "https://drive.google.com/file/d/1VqYt99lRd8rRWfnAp3Mt4vRUiQTU7SEV/view",
    },
    {
      label: "Research Paper 2",
      title: "Parallel Fitness-Driven Adaptive Controller in a Hybrid Metaheuristic Framework for Dermatological Image Enhancement in Skin Cancer Detection",
      text: "Proposed a novel hybrid metaheuristic optimization algorithm with an adaptive controller for automated dermatological image enhancement, improving image quality and diagnostic performance across multiple skin cancer datasets.",
      link: "https://drive.google.com/file/d/17VHjO6iljUyfcaYwcV7Yd3eHTmJG_ef_/view",
    },
  ];

  const hackathons = [
    {
      status: "Winner",
      title: "HackNova 2025",
      text: "Led the end-to-end development of a Full-Stack Virtual Labs platform, from UI/UX design and system architecture to backend development, testing, deployment, and project planning, earning Winner among participating teams.",
      links: [
        ["Certificate of Achievement", "https://drive.google.com/file/d/1jc-Nms02d70AOHauGwMm1LBNtCeTjoZb/view"],
        ["GitHub", "https://github.com/Kshama-1104/Psit-Virtual-Lab-FSD-Project"],
        ["Deployment Link", "https://psit-virtual-lab.vercel.app/"],
      ],
    },
    {
      status: "Winner",
      title: "Winner - Tech Expo 2025",
      text: "Designed and developed the patented SLS Smart Steering Wheel, an embedded real-time driver safety system for fatigue detection, recognized for innovation and engineering excellence.",
      links: [
        ["Certificate of Achievement", "https://drive.google.com/file/d/1ePpChNGdOVE3hB4G2IpDizmoQARQ7ClM/view"],
        ["Patent", "https://drive.google.com/file/d/1QKQQR2iznyZH46SE7IRvLYHO69fQ01fT/view"],
      ],
    },
  ];

  const hackathonTicker = [
    "Smart India Hackathon 2025",
    "Smart India Hackathon 2026",
    "Flipkart Grid 2026",
    "Google Summer of Code 2025",
    "Techkriti IITK 2024",
    "Amazon Summer School 2025",
    "HackOn with Amazon 5.0 2025",
  ];

  function Icon({ name }) {
    if (name === "github") {
      return svg([path("M15 21v-3.8c.1-.9-.2-1.5-.7-2 2.4-.3 4.9-1.2 4.9-5.4 0-1.2-.4-2.2-1.1-3 .1-.3.5-1.5-.1-3 0 0-.9-.3-3 1.1a10.2 10.2 0 0 0-5.4 0c-2.1-1.4-3-1.1-3-1.1-.6 1.5-.2 2.7-.1 3a4.2 4.2 0 0 0-1.1 3c0 4.2 2.5 5.1 4.9 5.4-.4.4-.7.9-.7 1.7V21"), path("M9 19c-3 .9-3-1.5-4.2-1.8")]);
    }
    if (name === "linkedin") {
      return svg([path("M6.5 10v8"), path("M6.5 6.5v.1"), path("M11 18v-8"), path("M11 13.5c0-2.1 1.2-3.5 3.1-3.5 1.8 0 2.9 1.2 2.9 3.3V18")]);
    }
    if (name === "email") {
      return svg([path("M4 6h16v12H4z"), path("m4 7 8 6 8-6")]);
    }
    if (name === "download") {
      return svg([path("M12 4v11"), path("m8 11 4 4 4-4"), path("M5 20h14")]);
    }
    return svg([path("M15.8 4.5 8.2 12l7.6 7.5"), path("M8.5 12h9.2"), path("M13.1 4.5h4.4")], "leetcode-logo");
  }

  function svg(children, className) {
    return h("svg", { className, viewBox: "0 0 24 24", "aria-hidden": "true" }, children);
  }

  function path(d) {
    return h("path", { d });
  }

  function SectionKicker({ children }) {
    return h("div", { className: "section-kicker" }, children);
  }

  function SectionHeading({ kicker, title }) {
    return h("div", { className: "section-heading" }, h("div", null, h(SectionKicker, null, kicker), h("h2", null, title)));
  }

  function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => setIsScrolled(window.scrollY > 24);
      const onKeyDown = (event) => {
        if (event.key === "Escape") setIsOpen(false);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("keydown", onKeyDown);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("keydown", onKeyDown);
      };
    }, []);

    return h(
      "header",
      { className: `site-header${isScrolled ? " is-scrolled" : ""}` },
      h("div", { className: "brand" }, h("a", { className: "brand-logo", href: "#home", "aria-label": "Go to home" }, "KM"), h("a", { className: "brand-name", href: "#home" }, "Kshama Mishra")),
      h(
        "button",
        { className: "nav-toggle", type: "button", "aria-label": "Toggle navigation", "aria-expanded": String(isOpen), onClick: () => setIsOpen((value) => !value) },
        h("span"),
        h("span"),
        h("span"),
      ),
      h(
        "nav",
        { className: `nav${isOpen ? " is-open" : ""}` },
        navItems.map(([label, href]) => h("a", { key: href, href, onClick: () => setIsOpen(false) }, label)),
      ),
      h("a", { className: "header-cta", href: cvDownload, download: true }, "Download CV"),
    );
  }

  function Hero() {
    const [preview, setPreview] = useState(profileImage);
    const [objectUrl, setObjectUrl] = useState("");

    useEffect(() => () => objectUrl && URL.revokeObjectURL(objectUrl), [objectUrl]);

    const onUpload = (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file || !file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) return;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      const nextUrl = URL.createObjectURL(file);
      setObjectUrl(nextUrl);
      setPreview(nextUrl);
    };

    return h(
      "section",
      { className: "hero", id: "home" },
      h(
        "div",
        { className: "hero-shell" },
        h(
          "div",
          { className: "hero-content" },
          h("p", { className: "hello-badge" }, "Hello There!"),
          h("h1", null, h("span", null, "Innovative Real-World Software Solutions"), h("span", null, "Integrated With AI/ML Technologies")),
          h("p", { className: "hero-copy" }, "I am Kshama Mishra, an AI/ML engineer and software developer focused on creating practical, reliable, and scalable products. I enjoy turning data, models, and clean code into solutions that solve real problems and deliver measurable impact."),
          h("div", { className: "hero-stats", "aria-label": "Portfolio highlights" }, stats.map(([value, label]) => h("div", { key: label }, h("strong", null, value), h("span", null, label)))),
          h(
            "div",
            { className: "hero-actions", "aria-label": "Portfolio and contact links" },
            h("div", { className: "portfolio-links", "aria-label": "Portfolio links" }, socialLinks.map(([name, label, href]) => h("a", { key: label, className: "hero-icon-link", href, ...(href.startsWith("mailto:") ? {} : external), "aria-label": `${label} profile` }, h(Icon, { name })))),
            h("span", { className: "degree-pill" }, "BTech CSE-AI (2023 - 2027)"),
          ),
        ),
        h(
          "div",
          { className: "hero-visual", "aria-label": "Profile photo area" },
          h("div", { className: "green-blob", "aria-hidden": "true" }),
          h("div", { className: "photo-ring has-image" }, h("img", { src: preview, alt: "Kshama Mishra profile", className: "profile-preview" }), h("label", { className: "photo-upload" }, h("input", { type: "file", accept: "image/*", onChange: onUpload }), h("span", null, "Add", h("br"), "Photo"))),
          h("span", { className: "floating-tag tag-ai" }, "AI Engineer"),
          h("span", { className: "floating-tag tag-software" }, "Software Development"),
        ),
      ),
      h("div", { className: "skill-ticker", "aria-label": "Core focus areas" }, tickerSkills.map((item) => h("span", { key: item }, h("i", null, "↓"), item))),
    );
  }

  function ExperienceSection() {
    return h(
      "section",
      { className: "section experience", id: "experience" },
      h(SectionHeading, { kicker: "Experience", title: "A Journey of Innovation and Growth" }),
      h("div", { className: "experience-list" }, experiences.map((item) => h(ExperienceCard, { key: item.org, item }))),
    );
  }

  function ExperienceCard({ item }) {
    return h(
      "article",
      { className: "experience-item" },
      h("div", { className: "experience-card-top" }, h("span", { className: "experience-mark is-image" }, h("img", { src: item.logo, alt: `${item.org} logo` })), h("a", { className: "experience-download", href: item.offer, download: `${item.org.replaceAll(" ", "-")}-offer-letter.pdf`, "aria-label": `Download ${item.org} offer letter` }, h(Icon, { name: "download" }))),
      h(
        "div",
        { className: "experience-body" },
        h("div", { className: "experience-topline" }, h("span", null, item.period)),
        h("div", { className: "experience-title-row" }, h("h3", null, item.org)),
        h("p", { className: "experience-org" }, item.role),
        h("p", null, item.text),
        h("div", { className: "experience-skills" }, item.skills.map((skill) => h("span", { key: skill }, skill))),
      ),
    );
  }

  function SkillsSection() {
    return h(
      "section",
      { className: "section skills-section", id: "skills" },
      h(SectionHeading, { kicker: "Skills", title: "Technical skills for AI-driven software development." }),
      h("div", { className: "skills-grid" }, skillGroups.map(([title, skills]) => h("article", { className: "skill-card", key: title }, h("h3", null, title), h("div", { className: "tag-list" }, skills.map((skill) => h("span", { key: skill }, skill)))))),
    );
  }

  function CurricularSection() {
    return h(
      "section",
      { className: "section curricular", id: "curricular" },
      h(SectionHeading, { kicker: "Extra Curricular", title: "Leadership beyond the classroom." }),
      h("div", { className: "skills-grid" }, curricular.map((item) => h("article", { className: "skill-panel", key: item.title }, h("span", { className: "role-date" }, item.period), h("h3", null, item.title), h("p", null, item.role), h("ul", null, item.points.map((point) => h("li", { key: point }, point))), h("a", { className: "role-action", href: item.link, download: true }, "Recommendation Letter")))),
    );
  }

  function ProjectsSection() {
    const [selected, setSelected] = useState(0);
    return h(
      "section",
      { className: "section work", id: "projects" },
      h(SectionHeading, { kicker: "Projects", title: "Best projects built with AI, data, and software engineering." }),
      h("div", { className: "project-grid" }, projects.map(([title, text, tags, link], index) => h("article", { key: title, className: `project-card${selected === index ? " is-selected" : ""}`, onPointerDown: () => setSelected(index), onClick: () => setSelected(index) }, h("span", { className: "project-icon" }, String(index + 1).padStart(2, "0")), h("h3", null, title), h("p", null, text), h("div", { className: "tags" }, tags.map((tag) => h("span", { key: tag }, tag))), h("a", { className: "project-link", href: link, ...external }, "GitHub")))),
    );
  }

  function ResearchSection() {
    return h(
      "section",
      { className: "section research", id: "research" },
      h(SectionHeading, { kicker: "Research", title: "Research Project - Skin Cancer Classification & Image Enhancement" }),
      h("div", { className: "research-grid" }, research.map((item) => h("article", { className: "research-card", key: item.label }, h("span", null, item.label), h("h3", null, item.title), h("p", null, item.text), h("a", { href: item.link, ...external }, "Research Paper Link")))),
    );
  }

  function HackathonSection() {
    return h(
      "section",
      { className: "section hackathon", id: "hackathon" },
      h(SectionHeading, { kicker: "Hackathon", title: "Hackathon wins and shipped innovation." }),
      h("div", { className: "hackathon-grid" }, hackathons.map((item) => h("article", { className: "hackathon-card", key: item.title }, h("span", null, item.status), h("h3", null, item.title), h("p", null, item.text), h("div", { className: "hackathon-links" }, item.links.map(([label, href]) => h("a", { key: label, href, ...external }, label)))))),
      h("div", { className: "hackathon-marquee", "aria-label": "Hackathon participation list" }, h("p", null, "Participated in multiple hackathons"), h("div", { className: "marquee-track" }, h("div", { className: "marquee-row" }, hackathonTicker.map((item) => h("span", { key: item }, item))), h("div", { className: "marquee-row", "aria-hidden": "true" }, hackathonTicker.map((item) => h("span", { key: `repeat-${item}` }, item))))),
    );
  }

  function App() {
    return h(React.Fragment, null, h(Header), h("main", null, h(Hero), h(ExperienceSection), h(SkillsSection), h(CurricularSection), h(ProjectsSection), h(ResearchSection), h(HackathonSection)));
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
