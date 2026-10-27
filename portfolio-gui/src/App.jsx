import React, { useEffect, useState, useRef } from 'react'
import { 
  Shield, 
  Terminal, 
  Activity, 
  Code, 
  ExternalLink, 
  Mail, 
  Link as LinkIcon, 
  Phone, 
  Star, 
  Zap, 
  Cpu, 
  Sparkles, 
  MessageCircle, 
  PenTool, 
  Award, 
  FileText, 
  Download, 
  CheckCircle2, 
  Check, 
  Copy, 
  X, 
  Eye, 
  Layers, 
  Lock, 
  Network, 
  Server, 
  AlertTriangle 
} from 'lucide-react'
import './index.css'

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [resumeViewTab, setResumeViewTab] = useState('preview');
  const [copiedContact, setCopiedContact] = useState('');
  const [copiedLatex, setCopiedLatex] = useState(false);

  // Intersection Observer for smooth reveal
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(label);
    setTimeout(() => setCopiedContact(''), 2500);
  };



  const allSkills = [
    { name: "Splunk Enterprise", category: "siem" },
    { name: "Wazuh SIEM", category: "siem" },
    { name: "ELK / Elastic Stack", category: "siem" },
    { name: "Universal Forwarders", category: "siem" },
    { name: "SPL Correlation Alerts", category: "siem" },
    { name: "Log Ingestion & Parsing", category: "siem" },

    { name: "MITRE ATT&CK Mapping", category: "threat" },
    { name: "Threat Intelligence (VirusTotal/AbuseIPDB)", category: "threat" },
    { name: "Attack Pattern Analysis (Brute-Force, C2)", category: "threat" },
    { name: "Incident Triage & Forensics", category: "threat" },
    { name: "Wireshark Packet Analysis", category: "threat" },
    { name: "Blue Team Labs (BTLO)", category: "threat" },
    { name: "LetsDefend SOC", category: "threat" },

    { name: "Network Pentesting", category: "pentest" },
    { name: "Web App Security (OWASP Top 10)", category: "pentest" },
    { name: "Active Directory Attacks & Defense", category: "pentest" },
    { name: "Vulnerability Assessment (VAPT)", category: "pentest" },
    { name: "Burp Suite Professional", category: "pentest" },
    { name: "Metasploit Framework", category: "pentest" },
    { name: "Nmap & Network Recon", category: "pentest" },

    { name: "Python Security Automation", category: "tools" },
    { name: "Bash & Linux Shell Scripting", category: "tools" },
    { name: "PowerShell & Windows Internals", category: "tools" },
    { name: "Ubuntu & Kali Linux", category: "tools" },
    { name: "TCP/IP & Firewall Engineering", category: "tools" }
  ];

  const filteredSkills = activeTab === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.category === activeTab);

  const projects = [
    {
      title: "Production-Grade Enterprise SOC & SIEM Lab",
      badge: "Defensive Operations",
      subtitle: "Enterprise Telemetry Ingestion, Threat Hunting & MITRE ATT&CK Mapping",
      desc: (
        <>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }}>
            Architected and deployed an end-to-end multi-endpoint SOC telemetry pipeline hosted on an Ubuntu Server backbone. Centralized security event monitoring across heterogeneous Linux and Windows nodes using Splunk Enterprise and Universal Forwarders.
          </p>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Configured Universal Forwarders to ingest, parse, and normalize Linux auth logs, Windows Event Logs (Security/Sysmon), and network telemetry.</li>
            <li>Simulated real-world adversary campaigns (SSH brute-force, anomalous privilege escalation, port sweeps) in a controlled environment.</li>
            <li>Engineered custom Splunk SPL correlation searches aligned with <strong>MITRE ATT&CK (T1110)</strong>, triggering real-time automated email notifications with sub-minute alert latency.</li>
            <li>Integrated automated threat intelligence lookup workflows via <strong>VirusTotal</strong> and <strong>AbuseIPDB</strong> REST APIs to enrich suspicious external IPs on the fly.</li>
          </ul>
          <div className="code-snippet">
            <div className="code-snippet-title">Production Splunk Correlation Logic (SPL):</div>
            <code>
              index=security_logs sourcetype="linux_secure" "Failed password"<br/>
              | rex field=_raw "from (?&lt;src_ip&gt;\d+\.\d+\.\d+\.\d+) port"<br/>
              | stats count as failed_attempts, earliest(_time) as first_seen, latest(_time) as last_seen by src_ip, user<br/>
              | where failed_attempts &gt; 8<br/>
              | eval attack_type="SSH_Brute_Force", mitre_technique="T1110"
            </code>
          </div>
        </>
      ),
      tech: ["Splunk Enterprise", "Universal Forwarder", "Wazuh", "Ubuntu Server", "MITRE ATT&CK", "VirusTotal API", "AbuseIPDB"],
      github: "",
      live: "https://lnkd.in/gSsydSd2"
    },
    {
      title: "PhishGuard+: AI-Driven Real-Time Phishing Threat Detection",
      badge: "Machine Learning & Endpoint Defense",
      subtitle: "Heuristic URL Entropy Analysis & Multi-AV Threat Intelligence",
      desc: (
        <>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }}>
            Engineered an intelligent endpoint extension that inspects incoming URLs and file downloads in real time using lexical heuristics, domain reputation entropy, and automated multi-engine scanning.
          </p>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Achieved <strong>91.5% classification accuracy</strong> across 200 benchmark test URLs (88 true positives with only 5 false positives).</li>
            <li>Developed combosquatting and typosquatting detection algorithms by cross-referencing high-value brand names in subdomains against apex domain registries (e.g. paypal-auth.xyz).</li>
            <li>Integrated VirusTotal API to compute and query cryptographic SHA-256 hashes against 70+ threat feeds prior to payload execution.</li>
            <li>Engineered an intuitive alert interface providing SOC-ready severity indicators and actionable safety recommendations for end users.</li>
          </ul>
        </>
      ),
      tech: ["Python", "JavaScript", "Machine Learning Heuristics", "Chrome API", "VirusTotal API", "Entropy Analysis"],
      github: "https://github.com/sujinsabu/project.git",
      live: "#"
    },
    {
      title: "Practical Incident Investigation & Threat Hunting",
      badge: "Incident Response",
      subtitle: "Hands-On Defense Scenarios — LetsDefend, BTLO & TryHackMe",
      desc: (
        <>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }}>
            Investigated, triaged, and resolved simulated enterprise security incidents simulating sophisticated adversary tactics across endpoints and network segments.
          </p>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Analyzed live telemetry, memory dumps, and PCAP packet streams with <strong>Wireshark</strong> to isolate command-and-control (C2) beaconing and credential theft.</li>
            <li>Formulated structured Incident Response (IR) reports detailing complete timeline reconstruction, threat actor attribution, and root-cause findings.</li>
            <li>Provided prioritized host-based and network-level mitigation actions (firewall rule adjustments, GPO hardening, credential rotation).</li>
          </ul>
        </>
      ),
      tech: ["Wireshark", "Network Forensics", "LetsDefend", "BTLO", "TryHackMe", "Incident Response Reporting", "CVSS Scoring"],
      github: "",
      live: "https://medium.com/@sujinsabu2617"
    }
  ];

  const latexResumeCode = `\\documentclass[letterpaper,10pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{charter}
\\usepackage[top=0.55in, bottom=0.55in, left=0.6in, right=0.6in]{geometry}

\\begin{document}
\\begin{center}
    {\\Huge \\scshape Sujin Sabu} \\\\ \\vspace{3pt}
    \\small \\textbf{Kollam, Kerala, India} \\ $|$ \\ +91 9747886284 \\ $|$ \\ \\href{mailto:sujinsabu2617@gmail.com}{sujinsabu2617@gmail.com} \\\\
    \\small \\href{https://www.linkedin.com/in/sujin-sabu-671392229}{linkedin.com/in/sujin-sabu-671392229} \\ $|$ \\ Open to: India, Gulf, Remote
\\end{center}

\\section*{Professional Summary}
Results-driven \\textbf{Cybersecurity Professional \\& SOC Analyst} with a strong foundation in Computer Science Engineering and hands-on expertise in enterprise security monitoring, threat detection, and incident triage. Proven capability in architecting production-grade SIEM environments (Splunk, Wazuh, ELK Stack), deploying universal forwarders, and constructing custom correlation rules mapped to the MITRE ATT\\&CK framework.

\\section*{Core Competencies}
\\textbf{SIEM \\& Monitoring:} Splunk Enterprise, Wazuh, ELK Stack, Universal Forwarder, Ingestion, SPL Alerts \\\\
\\textbf{Threat Detection \\& IR:} MITRE ATT\\&CK, Attack Pattern Analysis (Brute-Force, C2), IOC Triage, VirusTotal API \\\\
\\textbf{Network \\& Security:} TCP/IP, DNS, Firewalls, IDS/IPS, Active Directory, Linux/Windows Internals, VAPT \\\\
\\textbf{Tools \\& Platforms:} Splunk, Wazuh, Wireshark, Nmap, Burp Suite, Metasploit, Kali Linux, LetsDefend, BTLO

\\section*{Projects \\& Engineering}
\\textbf{Production-Grade Enterprise SOC \\& SIEM Lab} \\hfill Self-Directed Lab \\\\
- Architected virtual SOC monitoring environment on Ubuntu Server; ingested syslog and Windows Event Logs. \\\\
- Simulated SSH brute-force attacks and engineered custom SPL correlation searches mapped to MITRE ATT\\&CK (T1110). \\\\
\\textbf{PhishGuard+ — AI-Driven Phishing Detection} \\hfill Security Project \\\\
- Developed ML phishing detection engine achieving 91.5\\% accuracy across 200 benchmark test URLs.

\\section*{Certifications}
- \\textbf{CompTIA Security+ ce Certification} --- CompTIA (Active) \\\\
- \\textbf{Offenso Certified Security Professional (OCSP)} --- Offenso Hackers Academy \\\\
- \\textbf{Comprehensive Cybersecurity Training Program} --- Offenso Hackers Academy (Aug 2025)

\\section*{Education}
\\textbf{Bachelor of Technology (B.Tech) in Computer Science \\& Engineering} \\hfill 2021 -- 2025 \\\\
UKF College of Engineering and Technology | APJ Abdul Kalam Technological University
\\end{document}`;

  return (
    <>
      <div className="anime-bg"></div>
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="logo text-accent">
            <Shield size={24} className="text-cyan" />
            <span>Sujin.sec</span>
          </a>
          <div className="nav-links">
            <a href="#about">Overview</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Operations & Labs</a>
            <a href="#certifications">Credentials</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
            <button 
              onClick={() => setResumeModalOpen(true)} 
              className="nav-btn"
              title="Open Interactive Resume Viewer"
            >
              <FileText size={15} /> Resume View
            </button>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section id="about" className="section hero">
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span>Available for SOC Analyst & Threat Detection Opportunities</span>
          </div>

          <h1 className="hero-title">Sujin Sabu</h1>
          
          <h2 className="hero-subtitle">
            <span className="text-accent">Cybersecurity Professional</span> & SOC Analyst
          </h2>

          <div className="hero-badges-row">
            <span className="cert-pill"><Award size={14} /> CompTIA Security+ ce</span>
            <span className="cert-pill"><Shield size={14} /> OCSP Certified</span>
            <span className="cert-pill"><Activity size={14} /> Splunk & Wazuh SIEM</span>
            <span className="cert-pill"><Lock size={14} /> MITRE ATT&CK</span>
            <span className="cert-pill"><Cpu size={14} /> B.Tech CSE (2021–2025)</span>
          </div>

          <p className="hero-desc">
            Specialized in enterprise security monitoring, threat detection engineering, and incident response. 
            Hands-on experience architecting production-grade SIEM environments (Splunk, Wazuh, ELK), 
            correlating telemetry against the MITRE ATT&CK framework, and developing AI-assisted threat detection engines.
            Combining rigorous Computer Science Engineering foundations with practical defensive tradecraft.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <Zap size={18} /> View Security Operations
            </a>
            <button onClick={() => setResumeModalOpen(true)} className="btn btn-outline">
              <Eye size={18} /> Interactive Resume
            </button>
            <a href={`${import.meta.env.BASE_URL}Sujin_Sabu_Resume.pdf`} download="Sujin_Sabu_Resume.pdf" className="btn" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <Download size={18} /> Download ATS PDF
            </a>
          </div>
        </section>

        {/* Impact Metrics Bar */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-number">91.5%</div>
            <div className="metric-label">Phishing Detection Accuracy (PhishGuard+)</div>
          </div>
          <div className="metric-card">
            <div className="metric-number">&lt; 60s</div>
            <div className="metric-label">Adversary Detection Latency (Splunk T1110)</div>
          </div>
          <div className="metric-card">
            <div className="metric-number">10+</div>
            <div className="metric-label">Full VAPT & Enterprise Targets Assessed</div>
          </div>
          <div className="metric-card">
            <div className="metric-number">3</div>
            <div className="metric-label">Industry Certifications & Credentials</div>
          </div>
        </div>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2 className="section-title">
            <Layers className="text-cyan" size={28} /> Core Competencies & Tooling
          </h2>

          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <div className="tabs-container">
              <button 
                className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Capabilities ({allSkills.length})
              </button>
              <button 
                className={`tab-btn ${activeTab === 'siem' ? 'active' : ''}`}
                onClick={() => setActiveTab('siem')}
              >
                SIEM & Monitoring
              </button>
              <button 
                className={`tab-btn ${activeTab === 'threat' ? 'active' : ''}`}
                onClick={() => setActiveTab('threat')}
              >
                Threat Hunting & IR
              </button>
              <button 
                className={`tab-btn ${activeTab === 'pentest' ? 'active' : ''}`}
                onClick={() => setActiveTab('pentest')}
              >
                Offensive & VAPT
              </button>
              <button 
                className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
                onClick={() => setActiveTab('tools')}
              >
                Automation & Protocols
              </button>
            </div>

            <div className="skills-cloud">
              {filteredSkills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  <CheckCircle2 size={14} className="text-cyan" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Key Security Operations & Projects */}
        <section id="projects" className="section">
          <h2 className="section-title">
            <Terminal className="text-cyan" size={28} /> Security Engineering & Operations
          </h2>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <div key={i} className="glass-panel project-card">
                <div className="project-header">
                  <span className="project-badge">{project.badge}</span>
                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    {project.github && (
                      <a href={project.github} aria-label="GitHub Repository" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'} title="View Source Code">
                        <Code size={22} />
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a href={project.live} aria-label="Live Demo / Write-up" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'} title="View Write-up / Live Reference">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-desc">{project.desc}</div>

                <div className="tech-stack">
                  {project.tech.map((tech, j) => (
                    <span key={j}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section">
          <h2 className="section-title">
            <Award className="text-cyan" size={28} /> Certifications & Credentials
          </h2>

          <div className="certs-grid">
            <div className="cert-card">
              <div>
                <div className="cert-header">
                  <span className="cert-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}>Active Credential</span>
                  <Award size={24} className="text-accent" />
                </div>
                <h3 className="cert-title">CompTIA Security+ ce</h3>
                <p className="cert-issuer">CompTIA — Globally Recognized Defense Standard</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Validates baseline cybersecurity capabilities spanning network security, threat vectors, cryptography, identity management, risk mitigation, and security architecture.
                </p>
              </div>
            </div>

            <div className="cert-card">
              <div>
                <div className="cert-header">
                  <span className="cert-pill">Practical Certification</span>
                  <Shield size={24} className="text-cyan" />
                </div>
                <h3 className="cert-title">Offenso Certified Security Professional (OCSP)</h3>
                <p className="cert-issuer">Offenso Hackers Academy</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Hands-on practical certification testing real-world vulnerability assessment, penetration testing across 9 core domains, and structured risk mitigation reporting.
                </p>
              </div>
            </div>

            <div className="cert-card">
              <div>
                <div className="cert-header">
                  <span className="cert-pill">Intensive Training</span>
                  <Activity size={24} className="text-accent" />
                </div>
                <h3 className="cert-title">Cybersecurity & SOC Operations Training</h3>
                <p className="cert-issuer">Offenso Hackers Academy | Aug 2025 – Mar 2026</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Intensive program covering enterprise SIEM deployment (Splunk/ELK), network & web application VAPT, Active Directory auditing, and live triage on LetsDefend, BTLO, and TryHackMe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <h2 className="section-title">
            <Cpu className="text-cyan" size={28} /> Education & Engineering Background
          </h2>

          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.45rem', fontWeight: '700', color: '#fff' }}>
                Bachelor of Technology (B.Tech) in Computer Science & Engineering
              </h3>
              <span style={{ fontWeight: '600', color: 'var(--accent-secondary)', background: 'rgba(6, 182, 212, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '8px', fontSize: '0.9rem' }}>
                2021 – 2025
              </span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
              UKF College of Engineering and Technology | APJ Abdul Kalam Technological University (KTU), Kollam
            </p>

            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Foundational Cybersecurity & Engineering Coursework:</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.6rem' }}>
                {["Computer Networks (TCP/IP & Routing)", "Operating Systems (Linux/Unix Internals)", "Cryptography & Network Security", "Database Management Systems (SQL)", "Object-Oriented Design"].map((course, idx) => (
                  <span key={idx} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '0.25rem 0.65rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginTop: '1rem' }}>
              Built a comprehensive theoretical and practical foundation in data communication, process memory management, and algorithm design, which is directly channeled into defensive SIEM correlation engineering and protocol-level packet analysis.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '600', color: '#fff' }}>Higher Secondary Education (10+2) – Computer Science</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>St. Mary's Higher Secondary School</p>
              </div>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Completed 2019</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ minHeight: '55vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <Mail className="text-cyan" size={28} /> Initiate Handshake
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '620px', margin: '0 auto 2.5rem auto', fontSize: '1.08rem' }}>
            Looking for a dedicated SOC Analyst or Cybersecurity Professional for full-time, contract, or remote roles in India, the Gulf region, or globally.
          </p>
          
          <div className="glass-panel" style={{ maxWidth: '680px', margin: '0 auto', padding: '3.5rem 2rem', textAlign: 'center', width: '100%' }}>
            <div style={{ display: 'inline-flex', padding: '1.2rem', background: 'rgba(217, 70, 239, 0.1)', border: '1px solid rgba(217, 70, 239, 0.25)', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: '0 0 25px rgba(217, 70, 239, 0.2)' }}>
              <Mail size={38} className="text-accent" />
            </div>

            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.8rem', fontWeight: '800' }}>
              Let's Connect & Secure Systems
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1rem' }}>
              Drop an email or connect directly on LinkedIn or WhatsApp.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="mailto:sujinsabu2617@gmail.com" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
                <Mail size={18} /> Send Email
              </a>
              <button 
                onClick={() => handleCopy('+919747886284', 'phone')} 
                className="btn btn-outline" 
                style={{ padding: '0.9rem 1.8rem' }}
              >
                {copiedContact === 'phone' ? <Check size={18} className="text-emerald" /> : <Phone size={18} />}
                {copiedContact === 'phone' ? "Number Copied!" : "+91 9747886284"}
              </button>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem' }}>
              <a href="https://linkedin.com/in/sujin-sabu-671392229" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '500' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <LinkIcon size={18} /> LinkedIn
              </a>
              <a href="https://medium.com/@sujinsabu2617" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '500' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <PenTool size={18} /> Medium Write-ups
              </a>
              <span 
                onClick={() => handleCopy('+919747886284', 'wa')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: copiedContact === 'wa' ? 'var(--accent-secondary)' : 'var(--text-secondary)', cursor: 'pointer', fontWeight: '500' }}
                title="Copy WhatsApp"
              >
                <MessageCircle size={18} /> {copiedContact === 'wa' ? "WhatsApp Copied!" : "WhatsApp"}
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Resume Modal (Skill: creative-portfolio-resume bridge) */}
      {resumeModalOpen && (
        <div className="modal-backdrop" onClick={() => setResumeModalOpen(false)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <FileText size={22} className="text-cyan" />
                <h3 className="modal-title">ATS Resume & Formats</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="modal-tabs">
                  <button 
                    className={`modal-tab-btn ${resumeViewTab === 'preview' ? 'active' : ''}`}
                    onClick={() => setResumeViewTab('preview')}
                  >
                    Clean ATS Paper
                  </button>
                  <button 
                    className={`modal-tab-btn ${resumeViewTab === 'latex' ? 'active' : ''}`}
                    onClick={() => setResumeViewTab('latex')}
                  >
                    LaTeX Source
                  </button>
                </div>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setResumeModalOpen(false)}
                  aria-label="Close Modal"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            <div className="modal-body">
              {resumeViewTab === 'preview' ? (
                <div className="resume-paper">
                  <h1>SUJIN SABU</h1>
                  <div className="resume-contact">
                    Kollam, Kerala, India | +91 9747886284 | sujinsabu2617@gmail.com | linkedin.com/in/sujin-sabu-671392229
                  </div>

                  <h2>Professional Summary</h2>
                  <p>
                    Results-driven <strong>Cybersecurity Professional & SOC Analyst</strong> with a strong foundation in Computer Science Engineering and hands-on expertise in enterprise security monitoring, threat detection, and incident triage. Proven capability in architecting production-grade SIEM environments (Splunk, Wazuh, ELK Stack), deploying universal forwarders, and constructing custom correlation rules mapped to the MITRE ATT&CK framework.
                  </p>

                  <h2>Core Competencies</h2>
                  <p>
                    <strong>SIEM & Monitoring:</strong> Splunk Enterprise, Wazuh, ELK Stack, Universal Forwarder, Ingestion, Event Normalization<br/>
                    <strong>Threat Detection & IR:</strong> MITRE ATT&CK Framework, Attack Pattern Analysis (Brute-Force, C2), IOC Triage, VirusTotal API<br/>
                    <strong>Network & System Security:</strong> TCP/IP, DNS, Firewalls, IDS/IPS, Active Directory, Linux/Windows Internals, VAPT<br/>
                    <strong>Tools & Automation:</strong> Splunk, Wazuh, Wireshark, Nmap, Burp Suite, Metasploit, Python, Bash, PowerShell
                  </p>

                  <h2>Security Engineering & Projects</h2>
                  <p style={{ marginTop: '0.4rem', fontWeight: 'bold' }}>Production-Grade Enterprise SOC & SIEM Lab | Splunk, Wazuh, Ubuntu Server, MITRE ATT&CK</p>
                  <ul>
                    <li>Architected and managed an enterprise SOC monitoring environment on an Ubuntu Server backbone with multi-OS telemetry.</li>
                    <li>Configured Splunk Enterprise and Universal Forwarders to parse and normalize syslog, Windows Event Logs, and firewall events.</li>
                    <li>Simulated adversary tactics (SSH brute-force, privilege escalation) and created custom SPL alerts mapped to MITRE ATT&CK (T1110).</li>
                    <li>Integrated automated threat intelligence enrichment leveraging VirusTotal and AbuseIPDB REST APIs for fast IOC triage.</li>
                  </ul>

                  <p style={{ fontWeight: 'bold' }}>PhishGuard+ — AI-Driven Phishing Threat Detection | Python, Machine Learning, Threat Intel</p>
                  <ul>
                    <li>Developed an automated machine learning detection system for phishing URLs and email payloads, achieving 91.5% accuracy.</li>
                    <li>Engineered Python preprocessing pipelines extracting URL lexical heuristics, entropy scores, and domain age reputation metrics.</li>
                  </ul>

                  <h2>Certifications</h2>
                  <ul>
                    <li><strong>CompTIA Security+ ce Certification</strong> — CompTIA (Active)</li>
                    <li><strong>Offenso Certified Security Professional (OCSP)</strong> — Offenso Hackers Academy</li>
                    <li><strong>Comprehensive Cybersecurity Training Program</strong> — Offenso Hackers Academy (August 2025)</li>
                  </ul>

                  <h2>Education</h2>
                  <p style={{ fontWeight: 'bold' }}>Bachelor of Technology (B.Tech) in Computer Science & Engineering | 2021 – 2025</p>
                  <p style={{ fontStyle: 'italic', color: '#4b5563' }}>UKF College of Engineering and Technology | APJ Abdul Kalam Technological University</p>
                  <p>Coursework: Computer Networks, Operating Systems, Cryptography & Network Security, Database Management Systems</p>
                </div>
              ) : (
                <div style={{ position: 'relative' }}>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(latexResumeCode);
                      setCopiedLatex(true);
                      setTimeout(() => setCopiedLatex(false), 2000);
                    }}
                    className="btn btn-outline"
                    style={{ position: 'absolute', top: '10px', right: '10px', padding: '0.4rem 0.8rem', fontSize: '0.8rem', zIndex: 10 }}
                  >
                    {copiedLatex ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                    {copiedLatex ? "Copied!" : "Copy LaTeX"}
                  </button>
                  <pre style={{ background: '#05020a', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', color: '#a5b4fc', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflowX: 'auto', lineHeight: '1.5' }}>
                    {latexResumeCode}
                  </pre>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                Both ATS-Compatible PDF & Formats available for recruiters.
              </span>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <a href={`${import.meta.env.BASE_URL}Sujin_Sabu_Resume.pdf`} download="Sujin_Sabu_Resume.pdf" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}>
                  <Download size={16} /> Download PDF
                </a>
                <a href={`${import.meta.env.BASE_URL}Sujin_Sabu_Resume.tex`} download="Sujin_Sabu_Resume.tex" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}>
                  <Code size={16} /> .TEX File
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>Built by Sujin Sabu &bull; Cybersecurity & SOC Operations Portfolio &copy; {new Date().getFullYear()}</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Designed with modern web standards and ATS compatibility.
        </p>
      </footer>
    </>
  )
}

export default App
