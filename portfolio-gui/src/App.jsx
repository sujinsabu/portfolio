import React, { useEffect, useState, useRef } from 'react'
import { Shield, Crosshair, Map as MapIcon, Activity, Code, ExternalLink, Mail, Link as LinkIcon, Phone, Star, Zap, Cpu, Sparkles, MessageCircle, PenTool } from 'lucide-react'
import './index.css'

function App() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('+91-9747886284');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 3D Avatar Tilt Logic
  const avatarRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!avatarRef.current) return;
    const { left, top, width, height } = avatarRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;
    avatarRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.05, 1.05, 1.05)`;
  };
  const handleMouseLeave = () => {
    if (!avatarRef.current) return;
    avatarRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
  };

  const projects = [
    {
      title: "Detecting SSH Brute Force Attacks using Splunk",
      subtitle: "Hands-on SOC Project",
      desc: (
        <>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
            Built a real-world detection workflow using Splunk to identify suspicious Linux SSH login activity and trigger alerts.
          </p>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            <li>Ingested Linux auth logs into Splunk and identified repeated "Failed password" attempts.</li>
            <li>Extracted attacker IP using SPL and built detection logic using stats and thresholds.</li>
            <li>Successfully detected brute force attempts and created real-time alerts with email notification.</li>
          </ul>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'monospace' }}>
            <div style={{ color: 'var(--accent-secondary)', marginBottom: '0.3rem', fontSize: '0.85rem' }}>SPL Query:</div>
            <div style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
              | rex "from (?&lt;src_ip&gt;\d+\.\d+\.\d+\.\d+)"<br/>
              | stats count by src_ip<br/>
              | where count &gt; 10
            </div>
          </div>
        </>
      ),
      tech: ["Splunk", "SIEM", "Log Analysis", "Threat Detection", "SOC Workflow"],
      github: "",
      live: "https://lnkd.in/gSsydSd2"
    },
    {
      title: "PhishGuard+: Real-Time Heuristic Phishing Detection",
      subtitle: "Offenso Hackers Academy | Jan 2026",
      desc: (
        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
          <li>Built a Chrome browser extension that detects phishing URLs in real time using heuristic rules and VirusTotal API.</li>
          <li>Achieved 91.5% detection accuracy on 200 test URLs — 88 true positives, only 5 false positives.</li>
          <li>Detects combosquatting (e.g. paypal-login.xyz) by checking brand names in subdomains vs root domains.</li>
          <li>Scans downloaded files against 70+ antivirus engines via VirusTotal hash lookup before execution.</li>
        </ul>
      ),
      tech: ["JavaScript", "Chrome Extension API", "VirusTotal API"],
      github: "https://github.com/sujinsabu/project.git",
      live: "#"
    }
  ];

  const tools = ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "Nessus", "Nikto", "Splunk", "Hydra", "John the Ripper", "Aircrack-ng"];
  const domains = ["Network Pentesting", "Web App Security", "Wireless Security", "Android Pentesting", "Active Directory Attacks", "SIEM", "SOC Analysis"];
  const platforms = ["TryHackMe", "Blue Team Labs Online (BTLO)", "LetsDefend", "PortSwigger Web Security Academy"];
  const languagesOs = ["Python", "Bash", "SQL", "Kali Linux", "Parrot OS", "Ubuntu", "Windows Server"];

  return (
    <>
      <div className="anime-bg"></div>
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo text-accent">
            <Shield size={24} />
            <span>Sujin.sec</span>
          </div>
          <div className="nav-links">
            <a href="#about">Profile</a>
            <a href="#projects">Key Project</a>
            <a href="#training">Training</a>
            <a href="#contact">Contact</a>
            <a href="/Sujin_Sabu_Resume.pdf" download="Sujin_Sabu_Resume.pdf" className="nav-btn" style={{textDecoration: 'none'}}>Resume</a>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section className="section hero" style={{ opacity: 1, transform: 'translateY(0)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem' }}>
          <div className="hero-content" style={{ flex: '1 1 500px' }}>
            <h1 className="hero-title">Sujin Sabu</h1>
            <h2 className="hero-subtitle">
              <span className="text-accent">Cybersecurity Professional</span> | Ethical Hacker | Security Analyst
            </h2>
            <p className="hero-desc">
              OCSP-certified cybersecurity professional with a B.Tech in Computer Science. 
              Trained in Network, Web Application, Wireless, Android, and Active Directory Penetration Testing, 
              along with SIEM and SOC operations. Hands-on practice through TryHackMe, BTLO, LetsDefend, and PortSwigger.
              Skilled in Burp Suite, Metasploit, Nmap, and Wireshark. Targeting a Security Analyst or Ethical Hacker role.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn">
                <Zap size={18} /> View Operations
              </a>
              <a href="https://linkedin.com/in/sujin-sabu-671392229" target="_blank" rel="noreferrer" className="btn" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.2)' }}>
                <LinkIcon size={18} /> LinkedIn
              </a>
              <a href="https://medium.com/@sujinsabu2617" target="_blank" rel="noreferrer" className="btn" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.2)' }}>
                <PenTool size={18} /> Medium
              </a>
            </div>
          </div>
          
          <div 
            className="hero-avatar-container" 
            style={{ 
              flex: '1 1 300px', 
              display: 'flex', 
              justifyContent: 'center',
              perspective: '1000px'
            }}
          >
            <div 
              ref={avatarRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '30px',
                background: 'rgba(217, 70, 239, 0.1)',
                border: '2px solid var(--accent-primary)',
                boxShadow: '0 0 40px rgba(217, 70, 239, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.1s ease-out',
                cursor: 'pointer'
              }}
            >
              <img 
                src="/avatar.png" 
                alt="Sujin Sabu Anime Avatar" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.9
                }}
              />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.2), rgba(6, 182, 212, 0.2))', mixBlendMode: 'overlay', pointerEvents: 'none' }}></div>
            </div>
          </div>
        </section>

        {/* About / Skills Section */}
        <section id="about" className="section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="glass-panel" style={{ padding: '3.5rem 2.5rem' }}>
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
              
              <div style={{ flex: '1 1 300px' }}>
                <h3 className="text-accent" style={{ marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Crosshair size={22} /> Tools</h3>
                <div className="skills-container" style={{ marginTop: '0', marginBottom: '2.5rem' }}>
                  {tools.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>

                <h3 className="text-accent" style={{ marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapIcon size={22} /> Domains</h3>
                <div className="skills-container" style={{ marginTop: '0' }}>
                  {domains.map((skill, i) => (
                    <span key={i} className="skill-tag" style={{ borderLeft: '3px solid var(--accent-secondary)' }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div style={{ flex: '1 1 300px' }}>
                <h3 className="text-accent" style={{ marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={22} /> Platforms</h3>
                <div className="skills-container" style={{ marginTop: '0', marginBottom: '2.5rem' }}>
                  {platforms.map((skill, i) => (
                    <span key={i} className="skill-tag" style={{ borderLeft: '3px solid var(--accent-secondary)' }}>{skill}</span>
                  ))}
                </div>

                <h3 className="text-accent" style={{ marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Cpu size={22} /> Languages & OS</h3>
                <div className="skills-container" style={{ marginTop: '0' }}>
                  {languagesOs.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">Key Project</h2>
          <div className="projects-grid" style={{ gridTemplateColumns: 'minmax(300px, 900px)' }}>
            {projects.map((project, i) => (
              <div key={i} className="glass-panel project-card">
                <div className="project-header">
                  <Star size={36} className="text-accent" fill="url(#gradient)" />
                  <svg width="0" height="0">
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop stopColor="var(--accent-secondary)" offset="0%" />
                      <stop stopColor="var(--accent-primary)" offset="100%" />
                    </linearGradient>
                  </svg>
                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    {project.github && project.github !== "#" && (
                      <a href={project.github} aria-label="GitHub" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}><Code size={24} /></a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a href={project.live} aria-label="Write-up/Live" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}><ExternalLink size={24} /></a>
                    )}
                  </div>
                </div>
                <h3 className="project-title" style={{ fontSize: '1.8rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{project.subtitle}</p>
                <div className="project-desc" style={{ fontSize: '1.05rem' }}>{project.desc}</div>
                <div className="tech-stack" style={{ marginTop: '2rem' }}>
                  {project.tech.map((tech, j) => (
                    <span key={j}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Training & Education Section */}
        <section id="training" className="section">
          <h2 className="section-title">Training & Experience</h2>
          <div className="projects-grid" style={{ gridTemplateColumns: '1fr' }}>
            
            <div className="glass-panel project-card" style={{ marginBottom: '1.5rem', padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', fill: 'inherit' }}>
                <h3 className="project-title text-accent" style={{ marginBottom: '0.2rem', fontSize: '1.5rem' }}>Offenso Certified Security Professional (OCSP)</h3>
                <span style={{ fontWeight: '600', color: 'var(--accent-secondary)' }}>Aug 2025 – Mar 2026</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>Offenso Hackers Academy, Trivandrum</p>
              
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                <li>Trained in 9 domains: Network, Web App, Wireless, Android, Active Directory Pentesting, Microsoft Security, SIEM, SOC, and Reporting.</li>
                <li>Ran full VAPT cycles — recon, scanning, exploitation, and reporting — on 10+ simulated enterprise targets.</li>
                <li>Completed 15+ rooms on TryHackMe, 10+ BTLO challenges, 15+ LetsDefend SOC investigations, and OWASP Top 10 labs on PortSwigger.</li>
                <li>Wrote structured VAPT reports with CVSS scores, proof-of-concept evidence, and remediation steps for each finding.</li>
              </ul>
            </div>
            
            <h2 className="section-title" style={{ marginTop: '3rem', fontSize: '2rem' }}>Education & Certifications</h2>

            <div className="glass-panel project-card" style={{ marginBottom: '1.5rem', padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 className="project-title text-accent" style={{ fontSize: '1.4rem' }}>B.Tech — Computer Science Engineering</h3>
                <span style={{ fontWeight: '600', color: 'var(--accent-secondary)' }}>Dec 2021 – Jun 2025</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>UKF College of Engineering and Technology, APJ Abdul Kalam Technological University, Kollam</p>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                <strong style={{ color: 'var(--text-secondary)' }}>Coursework:</strong> Computer Networks, OS, DBMS, Data Structures
              </p>
            </div>

            <div className="glass-panel project-card" style={{ padding: '2.5rem' }}>
              <h3 className="project-title text-accent" style={{ fontSize: '1.4rem' }}>Certifications</h3>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0, marginTop: '1.5rem', fontSize: '1.05rem' }}>
                <li>Offenso Certified Security Professional (OCSP) — Offenso Hackers Academy</li>
              </ul>
            </div>
            
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>Contact</h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
            My inbox is open for new opportunities. Let's build something secure together.
          </p>
          
          <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', padding: '1.2rem', background: 'rgba(217, 70, 239, 0.1)', border: '1px solid rgba(217, 70, 239, 0.2)', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: '0 0 20px rgba(217, 70, 239, 0.2)' }}>
              <Mail size={42} className="text-accent" />
            </div>
            <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem', fontWeight: '800' }}>Initiate Handshake</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.05rem' }}>
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a href="mailto:sujinsabu2617@gmail.com" className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              <Mail size={20} /> SEND VIA EMAIL
            </a>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
              <a href="https://linkedin.com/in/sujin-sabu-671392229" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', transition: 'color 0.3s', textDecoration: 'none', fontWeight: '500' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <LinkIcon size={20} /> LinkedIn
              </a>
              <a href="https://medium.com/@sujinsabu2617" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', transition: 'color 0.3s', textDecoration: 'none', fontWeight: '500' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <PenTool size={20} /> Medium
              </a>
              <span 
                onClick={handleCopy}
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: copied ? 'var(--accent-primary)' : 'var(--text-secondary)', fontWeight: '500', cursor: 'pointer', transition: 'color 0.3s' }}
                onMouseOver={(e) => !copied && (e.currentTarget.style.color = '#fff')} 
                onMouseOut={(e) => !copied && (e.currentTarget.style.color = 'var(--text-secondary)')}
                title="Copy WhatsApp Number"
              >
                <MessageCircle size={20} /> {copied ? "Number Copied!" : "+91-9747886284 (WA)"}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                <MapIcon size={20} /> Kerala, IN
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>Built by Sujin Sabu. All rights reserved &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default App
