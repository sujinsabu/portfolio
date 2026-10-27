import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 45, right: 45 },
  info: {
    Title: 'Sujin Sabu - Cybersecurity Resume',
    Author: 'Sujin Sabu',
    Subject: 'Cybersecurity Professional & SOC Analyst Resume',
    Keywords: 'Cybersecurity, SOC Analyst, SIEM, Splunk, Wazuh, CompTIA Security+, OCSP, Threat Detection, Incident Response'
  }
});

// Output to public folder so Vite can host it natively
doc.pipe(fs.createWriteStream('public/Sujin_Sabu_Resume.pdf'));

// ATS Optimized Standard Font setup
doc.font('Helvetica');

// ---- HEADER ----
doc.fontSize(22).font('Helvetica-Bold').text('SUJIN SABU', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(11).font('Helvetica').text('Cybersecurity Professional | SOC Analyst | CompTIA Security+ ce | OCSP Certified', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(9.2).text('+91 9747886284  |  sujinsabu2617@gmail.com  |  linkedin.com/in/sujin-sabu-671392229', { align: 'center' });
doc.moveDown(0.15);
doc.fontSize(9.2).text('Portfolio: https://sujinsabu.github.io/portfolio/  |  Kollam, Kerala, India', { align: 'center' });
doc.moveDown(0.7);

// Helper function for ATS-friendly section headers
function addSection(title) {
  doc.fontSize(11.5).font('Helvetica-Bold').text(title.toUpperCase());
  doc.moveTo(45, doc.y).lineTo(550, doc.y).strokeColor('#333333').lineWidth(0.75).stroke();
  doc.moveDown(0.4);
  doc.font('Helvetica');
}

// ---- PROFESSIONAL SUMMARY ----
addSection('Professional Summary');
doc.fontSize(9.5).text(
  'Results-driven Cybersecurity Professional & SOC Analyst with a strong foundation in Computer Science Engineering and hands-on expertise in enterprise security monitoring, threat detection, and incident triage. Proven capability in architecting production-grade SIEM environments (Splunk, Wazuh, ELK Stack), deploying universal forwarders, and constructing custom correlation rules mapped to the MITRE ATT&CK framework. Experienced in integrating threat intelligence feeds, performing log forensics, and leveraging Python for security automation to proactively defend critical infrastructure.',
  { align: 'justify', lineGap: 1.5 }
);
doc.moveDown(0.7);

// ---- CORE COMPETENCIES ----
addSection('Core Competencies');
doc.fontSize(9.5);
doc.font('Helvetica-Bold').text('SIEM & Monitoring: ', { continued: true }).font('Helvetica').text('Splunk Enterprise, Wazuh, ELK Stack, Universal Forwarder, Log Parsing, Ingestion, Event Normalization', { lineGap: 1.5 });
doc.font('Helvetica-Bold').text('Threat Detection & IR: ', { continued: true }).font('Helvetica').text('MITRE ATT&CK Framework, Attack Pattern Analysis (Brute-Force, C2), IOC Triage, Threat Intel (VirusTotal, AbuseIPDB)', { lineGap: 1.5 });
doc.font('Helvetica-Bold').text('Network & System Security: ', { continued: true }).font('Helvetica').text('TCP/IP, DNS, Firewalls, IDS/IPS, Active Directory, Linux/Unix & Windows Internals, Vulnerability Assessment', { lineGap: 1.5 });
doc.font('Helvetica-Bold').text('Tools & Platforms: ', { continued: true }).font('Helvetica').text('Splunk, Wazuh, ELK, Wireshark, Nmap, Burp Suite, Metasploit, Kali Linux, LetsDefend, TryHackMe, BTLO', { lineGap: 1.5 });
doc.font('Helvetica-Bold').text('Automation & Scripting: ', { continued: true }).font('Helvetica').text('Python (Security Scripting, REST APIs, Log Automation), Bash, PowerShell', { lineGap: 1.5 });
doc.moveDown(0.7);

// ---- PROJECTS ----
addSection('Security Engineering & Projects');

doc.font('Helvetica-Bold').text('Production-Grade Enterprise SOC & SIEM Lab', { continued: true });
doc.font('Helvetica-Oblique').text('  |  Splunk, Wazuh, Linux, MITRE ATT&CK');
doc.font('Helvetica').moveDown(0.2);
const socPoints = [
  'Architected and managed a virtual SOC monitoring environment on an Ubuntu Server backbone with multi-OS telemetry.',
  'Configured Splunk Enterprise and Universal Forwarders to parse and normalize syslog, Windows Event Logs, and firewall events.',
  'Simulated adversary tactics (SSH brute-force, privilege escalation) and created custom SPL alerts mapped to MITRE ATT&CK (T1110).',
  'Integrated automated threat intelligence enrichment leveraging VirusTotal and AbuseIPDB REST APIs for fast IOC triage.'
];
socPoints.forEach(pt => {
  doc.text(`• ${pt}`, { indent: 12, lineGap: 1.5 });
});
doc.moveDown(0.5);

doc.font('Helvetica-Bold').text('PhishGuard+ — AI-Driven Phishing Threat Detection Engine', { continued: true });
doc.font('Helvetica-Oblique').text('  |  Python, Machine Learning, Threat Intel');
doc.font('Helvetica').moveDown(0.2);
const phishPoints = [
  'Developed an automated machine learning detection system for phishing URLs and email payloads, achieving 91.5% accuracy.',
  'Engineered Python preprocessing pipelines extracting URL lexical heuristics, entropy scores, and domain age reputation metrics.',
  'Integrated VirusTotal API for real-time hash lookups and combosquatting detection across benchmark threat datasets.'
];
phishPoints.forEach(pt => {
  doc.text(`• ${pt}`, { indent: 12, lineGap: 1.5 });
});
doc.moveDown(0.5);

doc.font('Helvetica-Bold').text('Practical Incident Investigation & Threat Hunting', { continued: true });
doc.font('Helvetica-Oblique').text('  |  Wireshark, LetsDefend, BTLO, TryHackMe');
doc.font('Helvetica').moveDown(0.2);
const irPoints = [
  'Investigated multi-stage incident scenarios involving endpoint malware execution, C2 beaconing, and credential access.',
  'Extracted packet captures and memory artifacts using Wireshark; compiled structured IR reports with remediation steps.'
];
irPoints.forEach(pt => {
  doc.text(`• ${pt}`, { indent: 12, lineGap: 1.5 });
});
doc.moveDown(0.7);

// ---- CERTIFICATIONS ----
addSection('Certifications & Professional Training');
doc.font('Helvetica-Bold').text('CompTIA Security+ ce Certification', { continued: true });
doc.font('Helvetica').text(' — CompTIA (Active)', { align: 'right' });
doc.font('Helvetica-Bold').text('Offenso Certified Security Professional (OCSP)', { continued: true });
doc.font('Helvetica').text(' — Offenso Hackers Academy', { align: 'right' });
doc.font('Helvetica-Bold').text('Comprehensive Cybersecurity & SOC Training Program', { continued: true });
doc.font('Helvetica').text(' — Offenso Hackers Academy (Aug 2025)', { align: 'right' });
doc.moveDown(0.7);

// ---- EDUCATION ----
addSection('Education');
doc.font('Helvetica-Bold').text('Bachelor of Technology (B.Tech) in Computer Science & Engineering', { continued: true });
doc.font('Helvetica').text(' | 2021 - 2025', { align: 'right' });
doc.font('Helvetica-Oblique').text('UKF College of Engineering and Technology | APJ Abdul Kalam Technological University, Kollam');
doc.font('Helvetica').moveDown(0.2);
doc.text('Coursework: Computer Networks, Operating Systems, Cryptography & Network Security, DBMS, Object-Oriented Design', { indent: 12, lineGap: 1.5 });
doc.moveDown(0.4);

doc.font('Helvetica-Bold').text('Higher Secondary Education (10+2) – Computer Science', { continued: true });
doc.font('Helvetica').text(' | 2019', { align: 'right' });
doc.font('Helvetica-Oblique').text('St. Mary’s Higher Secondary School');

doc.end();
console.log('Updated ATS PDF Resume Generated Successfully!');
