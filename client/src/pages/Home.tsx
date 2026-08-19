
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Braces,
  ChevronRight,
  CircleDot,
  Cloud,
  Code2,
  Command,
  Cpu,
  Database,
  ExternalLink,
  Github,
  GitBranch,
  Layers3,
  Menu,
  Network,
  ScanLine,
  Send,
  Server,
  Terminal,
  Workflow,
  X,
} from "lucide-react";

const logoUrl = "/images/raihan-rune-logo.png";
const assetUrls = {
  hero: "/images/raihan-hero-instrument.jpg",
  aeroview: "/images/raihan-project-aeroview.jpg",
  snowmed: "/images/raihan-project-snowmed.jpg",
  scada: "/images/raihan-project-scada.jpg",
};

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

const stats = [
  ["2+", "Years engineering", "TENURE"],
  ["10+", "Technologies", "STACK"],
  ["FULL", "Stack delivery", "SCOPE"],
  ["AI/ML", "Model evaluation", "DOMAIN"],
];

const technologyClusters = [
  { icon: Code2, label: "Languages", nodes: ["Python", "Java", "Kotlin", "C++", "Go", "TypeScript"] },
  { icon: Layers3, label: "Interface", nodes: ["React", "Next.js", "Tailwind CSS"] },
  { icon: Server, label: "Services", nodes: ["Node.js", "REST APIs", "Microservices"] },
  { icon: BrainCircuit, label: "AI / ML", nodes: ["TensorFlow", "PyTorch", "Keras"] },
  { icon: Cloud, label: "Infrastructure", nodes: ["Docker", "Kubernetes", "Helm", "Nginx", "Grafana", "Prometheus", "Cloudflare"] },
  { icon: Database, label: "Data + Messaging", nodes: ["PostgreSQL", "Supabase", "Kafka", "MQTT"] },
];

const experiences = [
  {
    period: "NOW",
    company: "Medor.id",
    role: "AI Automation Engineer",
    focus: "AI evaluation · multilingual AI · model evaluation",
    description: "Evaluating model behavior, task quality, and multilingual data to help intelligent systems become more useful and reliable.",
    tags: ["AI EVALUATION", "ANNOTATION", "PROMPT QA"],
  },
  {
    period: "2024",
    company: "PLN Icon Plus",
    role: "Junior Software Engineer",
    focus: "SCADA / industrial monitoring",
    description: "Supported real-time monitoring and control systems, communication protocols, and infrastructure for power-distribution observability.",
    tags: ["MQTT", "MODBUS", "IEC 61850", "GRAFANA", "DOCKER"],
  },
  {
    period: "ONGOING",
    company: "Freelance Development",
    role: "Full Stack Developer",
    focus: "WordPress / product engineering",
    description: "Building practical, end-to-end web experiences that connect usable interfaces with dependable backend workflows.",
    tags: ["FULL STACK", "WORDPRESS", "WEB APPS"],
  },
];

const projects = [
  {
    id: "01",
    name: "Aeroview",
    type: "Sentiment analytics platform",
    description: "An analytical workspace for understanding sentiment signals, datasets, and meaningful product patterns.",
    stack: ["REACT", "ANALYTICS", "AI"],
    image: assetUrls.aeroview,
    className: "project-featured",
    label: "DATA / INSIGHT",
  },
  {
    id: "02",
    name: "Snowmed CT",
    type: "Medical imaging software",
    description: "A focused imaging environment translating complex CT-related workflows into a precise software interface.",
    stack: ["IMAGING", "PYTHON", "UI SYSTEMS"],
    image: assetUrls.snowmed,
    className: "project-tall",
    label: "VOLUMETRIC / VIEWER",
  },
  {
    id: "03",
    name: "Gamify",
    type: "Full-stack application",
    description: "A modular product surface that brings modern frontend structure together with practical backend logic.",
    stack: ["FULL STACK", "WEB", "PRODUCT"],
    className: "project-standard",
    label: "INTERACTION / SYSTEM",
  },
  {
    id: "04",
    name: "Server Radiasi Forecast",
    type: "Data-driven forecasting",
    description: "A forecasting application designed to surface useful operational signals from time-series data.",
    stack: ["FORECASTING", "DATA", "SERVICES"],
    className: "project-standard",
    label: "SIGNAL / FORECAST",
  },
  {
    id: "05",
    name: "SCADA Monitoring",
    type: "Industrial control system",
    description: "A real-time monitoring environment connecting field data, alerting layers, and actionable infrastructure context.",
    stack: ["MQTT", "GRAFANA", "OBSERVABILITY"],
    image: assetUrls.scada,
    className: "project-wide",
    label: "REAL TIME / CONTROL",
  },
];

const terminalStates = {
  about: ["Software Engineer", "AI / ML practitioner", "Full-stack systems builder", "Observability-minded operator"],
  skills: ["Languages: Python · Java · Kotlin · Go", "Infrastructure: Docker · Kubernetes · Grafana", "AI: TensorFlow · PyTorch · Keras", "Data: PostgreSQL · Kafka · MQTT"],
  projects: ["Aeroview / sentiment analytics", "Snowmed CT / imaging workspace", "SCADA / real-time monitoring", "Server Radiasi / forecast signals"],
  contact: ["Connection status: READY", "GitHub: github.com/rafiraihan09", "For project discussions, initialize contact below."],
};

type TerminalKey = keyof typeof terminalStates;

function SectionHeading({ index, title, eyebrow }: { index: string; title: string; eyebrow?: string }) {
  return (
    <div className="section-heading">
      <div className="section-index"><span>{index}</span><i /></div>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if (project.image) {
    return <div className="project-visual image-visual" style={{ backgroundImage: `url(${project.image})` }} aria-hidden="true" />;
  }

  if (project.name === "Gamify") {
    return (
      <div className="project-visual gamify-visual" aria-hidden="true">
        <div className="visual-window"><span /><span /><span /></div>
        <div className="gamify-card card-one"><i /><b /></div>
        <div className="gamify-card card-two"><i /><b /></div>
        <div className="gamify-path" />
      </div>
    );
  }

  return (
    <div className="project-visual forecast-visual" aria-hidden="true">
      <div className="forecast-grid" />
      <svg viewBox="0 0 420 220" preserveAspectRatio="none"><path d="M0,166 C46,158 66,93 110,125 S167,168 206,103 S262,99 292,120 S351,39 420,55" /></svg>
      <div className="forecast-dot first" /><div className="forecast-dot second" /><div className="forecast-dot third" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTerminal, setActiveTerminal] = useState<TerminalKey>("about");
  const [runtimeCommand, setRuntimeCommand] = useState("whoami");
  const [runtimeBooted, setRuntimeBooted] = useState(false);
  const [runtimeResponse, setRuntimeResponse] = useState("Software Engineer");
  const output = useMemo(() => terminalStates[activeTerminal], [activeTerminal]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setRuntimeBooted(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const runRuntimeCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = runtimeCommand.trim().toLowerCase();
    const responses: Record<string, string> = {
      whoami: "Software Engineer",
      status: "AVAILABLE FOR WORK",
      skills: "Full Stack / AI / Systems",
      contact: "raihanrafi065@gmail.com",
      help: "whoami · status · skills · contact",
    };
    setRuntimeResponse(responses[command] ?? `Command not found: ${command || "(empty)"}`);
  };

  return (
    <div className="portfolio-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Raihan home">
          <img src={logoUrl} alt="" />
          <span>Raihan Muhammad Rafi<span>//</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <div className="availability"><span />AVAILABLE FOR WORK</div>
          <button className="menu-trigger" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map(([label, href], index) => <a href={href} key={href} onClick={closeMenu}><span>0{index + 1}</span>{label}<ChevronRight size={16} /></a>)}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-art" style={{ backgroundImage: `url(${assetUrls.hero})` }} aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb orb-a" aria-hidden="true" /><div className="hero-orb orb-b" aria-hidden="true" />
          <div className="hero-rail"><span>SYS.01</span><i /><span>BUILD/SHIP</span></div>
          <div className="hero-main">
            <div className="status-label"><CircleDot size={14} />SOFTWARE ENGINEER / AI TRAINER</div>
            <h1 id="hero-title">I BUILD SOFTWARE<br /><em>THAT SOLVES</em><br />COMPLEX PROBLEMS.</h1>
            <p className="hero-copy">Software engineer focused on full-stack development, distributed systems, AI, cloud infrastructure, and intelligent applications.</p>
            <div className="hero-ctas">
              <a className="button button-primary" href="#projects">VIEW PROJECTS <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#contact">CONTACT ME <Send size={16} /></a>
            </div>
          </div>
          <div className="hero-runtime runtime-panel">
            <div className="panel-topline"><span><i />LIVE RUNTIME</span><span>Raihan Muhammad Rafi</span></div>
            <div className="runtime-body">
              <form className="command-line" onSubmit={runRuntimeCommand}>
                <label className="terminal-prompt" htmlFor="runtime-command">$</label>
                {runtimeBooted ? <input id="runtime-command" className="runtime-command-input" value={runtimeCommand} onChange={(event) => setRuntimeCommand(event.target.value)} aria-label="Runtime command" spellCheck={false} autoComplete="off" /> : <span className="runtime-typed-command" aria-label="whoami">{runtimeCommand.split("").map((character, index) => <span key={`${character}-${index}`} style={{ animationDelay: `${index * 85}ms` }}>{character}</span>)}</span>}
                <span className="terminal-cursor" />
              </form>
              <div className="runtime-response runtime-boot-response" aria-live="polite"><span>output</span><b>{runtimeResponse}</b></div>
              <div className="runtime-list"><p><i>01</i>Building systems</p><p><i>02</i>Training AI</p><p><i>03</i>Solving problems</p></div>
              <div className="runtime-signal"><span>SYSTEM HEALTH</span><b><i />NOMINAL</b></div>
            </div>
            <div className="panel-corner corner-tl" /><div className="panel-corner corner-br" />
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO INSPECT</span><ArrowDown size={15} /></a>
        </section>

        <section className="metrics-section" aria-label="Engineering metrics">
          <div className="metrics-kicker"><Activity size={16} />OPERATING PROFILE <span>/// 2026</span></div>
          <div className="metrics-grid">
            {stats.map(([value, description, label]) => <div className="metric" key={label}><span>{label}</span><strong>{value}</strong><p>{description}</p></div>)}
          </div>
        </section>

        <section className="section-shell about-section" id="about" aria-labelledby="about-heading">
          <SectionHeading index="01" eyebrow="OPERATING CONTEXT" title="ENGINEERED WITH CURIOSITY." />
          <div className="about-layout">
            <div className="about-copy">
              <p className="lead">I work where product thinking meets system reliability: translating ambiguous technical challenges into software that can be understood, maintained, and put to work.</p>
              <p>My experience spans full-stack development, AI and machine learning, cloud infrastructure, distributed systems, industrial monitoring, and data-driven AI evaluation. I care about the entire path—from a useful interface to the infrastructure and observability that keep it dependable.</p>
              <div className="about-notes"><span><Braces size={15} />Full-stack delivery</span><span><Network size={15} />Systems thinking</span><span><ScanLine size={15} />Operational context</span></div>
            </div>
            <aside className="system-profile">
              <div className="panel-topline"><span><i />SYSTEM.INFO</span><span>PROFILE_01</span></div>
              <dl>
                <div><dt>NAME</dt><dd>Raihan Muhammad Rafi</dd></div><div><dt>ROLE</dt><dd>Software Engineer</dd></div><div><dt>FOCUS</dt><dd>Software / AI</dd></div><div><dt>STACK</dt><dd>Full Stack</dd></div><div><dt>STATUS</dt><dd className="online"><i />AVAILABLE</dd></div>
              </dl>
              <div className="profile-trace"><span>0x0A</span><i /><span>0xF2</span></div>
            </aside>
          </div>
        </section>

        <section className="section-shell tech-section" id="skills" aria-labelledby="skills-heading">
          <SectionHeading index="02" eyebrow="CAPABILITY MAP" title="TECH STACK" />
          <div className="tech-layout">
            <div className="tech-intro"><p>A living map of the languages, tools, and operating layers I use to take software from an idea to a monitored system.</p><div className="legend"><span><i className="mint" />PRIMARY SIGNAL</span><span><i className="blue" />CONNECTED LAYER</span></div></div>
            <div className="skill-map">
              <div className="skill-map-core"><Cpu size={22} /><span>BUILD<br />SYSTEM</span></div>
              {technologyClusters.map((cluster, index) => {
                const Icon = cluster.icon;
                return <article className={`tech-cluster cluster-${index + 1}`} key={cluster.label}><div className="cluster-header"><Icon size={15} /><span>{cluster.label}</span><b>0{index + 1}</b></div><div className="tech-nodes">{cluster.nodes.map((node) => <span key={node}>{node}</span>)}</div></article>;
              })}
            </div>
          </div>
        </section>

        <section className="section-shell experience-section" id="experience" aria-labelledby="experience-heading">
          <SectionHeading index="03" eyebrow="WORK HISTORY" title="EXPERIENCE" />
          <div className="experience-timeline">
            <div className="timeline-spine" aria-hidden="true" />
            {experiences.map((experience, index) => <article className="timeline-entry" key={experience.company}><div className="timeline-point"><i /></div><div className="timeline-period">{experience.period}<span>0{index + 1}</span></div><div className="timeline-content"><div className="timeline-heading"><div><p>{experience.company}</p><h3>{experience.role}</h3></div><span>{experience.focus}</span></div><p className="timeline-description">{experience.description}</p><div className="tag-row">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}
          </div>
        </section>

        <section className="section-shell projects-section" id="projects" aria-labelledby="projects-heading">
          <div className="projects-heading-row"><SectionHeading index="04" eyebrow="SELECTED WORK" title="SYSTEMS IN THE FIELD" /><a href="https://github.com/rafiraihan09" target="_blank" rel="noreferrer" className="quiet-link">GITHUB ARCHIVE <ExternalLink size={15} /></a></div>
          <div className="projects-grid">
            {projects.map((project) => <article className={`project-card ${project.className}`} key={project.name}><ProjectVisual project={project} /><div className="project-overlay" /><div className="project-meta-top"><span>{project.id}</span><span>{project.label}</span></div><div className="project-content"><p>{project.type}</p><h3>{project.name}</h3><div className="project-reveal"><span>{project.description}</span><div className="tag-row">{project.stack.map((tag) => <i key={tag}>{tag}</i>)}</div></div></div><a className="project-open" href="https://github.com/rafiraihan09" target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><ArrowUpRight size={18} /></a></article>)}
          </div>
        </section>

        <section className="terminal-section" aria-labelledby="terminal-heading">
          <div className="terminal-wrap">
            <div className="terminal-copy"><p className="eyebrow">INTERACTIVE INTERFACE</p><h2 id="terminal-heading">TERMINAL<span>.</span></h2><p>Inspect the operating profile through a lightweight command surface. It is designed to feel responsive, not ornamental.</p><div className="terminal-actions">{(["about", "skills", "projects", "contact"] as TerminalKey[]).map((key) => <button className={activeTerminal === key ? "active" : ""} onClick={() => setActiveTerminal(key)} key={key}><Command size={14} />{key === "about" ? "./raihan --about" : `${key} --list`}</button>)}</div></div>
            <div className="terminal-window"><div className="terminal-window-bar"><span><i /><i /><i /></span><b>raihan@portfolio: ~</b><span>bash</span></div><div className="terminal-window-body"><p><span className="terminal-prompt">$</span> {activeTerminal === "about" ? "./raihan --about" : `${activeTerminal} --list`}</p><div className="terminal-output">{output.map((line, index) => <p key={line}><i>0{index + 1}</i><span>&gt;</span>{line}</p>)}</div><p className="terminal-ready"><span className="terminal-prompt">$</span><i className="terminal-cursor" /></p></div><div className="terminal-footer"><span><i />READY</span><span>UTF-8</span><span>LN 04, COL 02</span></div></div>
          </div>
        </section>

        <section className="section-shell architecture-section" id="how-i-build" aria-labelledby="architecture-heading">
          <SectionHeading index="SYS" eyebrow="ENGINEERING METHOD" title="HOW I BUILD" />
          <div className="architecture-intro"><p>A capable engineering process is more than a front-end surface. I move deliberately across the system path, leaving enough structure to learn, iterate, and operate with confidence.</p></div>
          <div className="architecture-pipeline">
            {["IDEA", "ARCHITECTURE", "DEVELOPMENT", "TESTING", "DEPLOYMENT", "MONITORING"].map((stage, index) => <div className="pipeline-stage" key={stage}><div><span>0{index + 1}</span>{index === 0 ? <BrainCircuit size={20} /> : index === 1 ? <Workflow size={20} /> : index === 2 ? <Code2 size={20} /> : index === 3 ? <GitBranch size={20} /> : index === 4 ? <Cloud size={20} /> : <Activity size={20} />}</div><b>{stage}</b>{index < 5 && <i className="pipeline-connector"><ChevronRight size={14} /></i>}</div>)}
          </div>
        </section>

        <section className="section-shell activity-section" aria-labelledby="activity-heading">
          <div className="activity-card"><div className="activity-header"><div><p className="eyebrow">PUBLIC TRACE</p><h2 id="activity-heading">GITHUB ACTIVITY</h2></div><a href="https://github.com/rafiraihan09" target="_blank" rel="noreferrer"><Github size={18} />@rafiraihan09 <ArrowUpRight size={15} /></a></div><div className="activity-content"><div className="contribution-grid" aria-label="Decorative developer activity signal visualization">{Array.from({ length: 112 }, (_, index) => <i key={index} className={[5, 10, 22, 41, 65, 83, 101].includes(index % 112) ? "hot" : index % 7 === 0 || index % 11 === 0 ? "warm" : ""} />)}</div><div className="activity-notes"><div><span>CODEBASE</span><b>Public work & experiments</b></div><div><span>FOCUS</span><b>Software / AI / Systems</b></div><p>Open the GitHub archive for the live project record and source context.</p></div></div></div>
        </section>

        <section className="section-shell contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="contact-line" aria-hidden="true"><i /><span>CONNECTION</span><i /></div>
          <SectionHeading index="05" eyebrow="OPEN CHANNEL" title="LET'S BUILD SOMETHING." />
          <div className="contact-layout"><div><p>Have an idea, project, or technical challenge? Let’s build it.</p><a className="button button-primary" href="mailto:raihanrafi065@gmail.com">INITIALIZE CONNECTION <ArrowUpRight size={17} /></a></div><aside className="connection-panel"><div className="panel-topline"><span><i />CONNECTION STATUS</span><span>PORT 443</span></div><div className="connection-ready"><span><i />READY</span><b>SECURE CHANNEL AVAILABLE</b></div><div className="connection-links"><a href="https://github.com/rafiraihan09" target="_blank" rel="noreferrer"><Github size={16} />GITHUB<ArrowUpRight size={15} /></a><a className="email-link" href="mailto:raihanrafi065@gmail.com"><Send size={16} />raihanrafi065@gmail.com</a><a href="https://www.linkedin.com/in/raihan-muhammad-rafi-09a785284/" target="_blank" rel="noreferrer"><Network size={16} />LINKEDIN<ArrowUpRight size={15} /></a></div></aside></div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand" href="#top"><img src={logoUrl} alt="" /><span>Raihan Muhammad Rafi<span>//</span></span></a><p>SOFTWARE ENGINEER <i>//</i> © 2026</p><a href="https://github.com/rafiraihan09" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
