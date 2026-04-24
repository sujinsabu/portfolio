import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 50, bottom: 50, left: 50, right: 50 },
  info: {
    Title: 'Sujin Sabu - Resume',
    Author: 'Sujin Sabu',
    Subject: 'Cybersecurity Professional Resume',
    Keywords: 'Cybersecurity, Pentesting, OCSP, Splunk, SOC, Metasploit, Python, Security Analyst'
  }
});

// Output to public folder so Vite can host it natively
doc.pipe(fs.createWriteStream('public/Sujin_Sabu_Resume.pdf'));

// ATS Optimized Standard Font setup
doc.font('Helvetica');

// ---- HEADER ----
doc.fontSize(24).text('SUJIN SABU', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(12).text('Cybersecurity Professional | Ethical Hacker | Security Analyst', { align: 'center' });
doc.moveDown(0.3);
doc.fontSize(10).text('+91-9747886284 | sujinsabu2617@gmail.com | linkedin.com/in/sujin-sabu-671392229 | Kollam, Kerala, India', { align: 'center' });
doc.moveDown(1.5);

// Helper function for ATS-friendly section headers
function addSection(title) {
  doc.fontSize(13).font('Helvetica-Bold').text(title.toUpperCase());
  doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke();
  doc.moveDown(0.5);
  doc.font('Helvetica');
}

// ---- PROFESSIONAL SUMMARY ----
addSection('Professional Summary');
doc.fontSize(11).text(
  'OCSP-certified cybersecurity professional with a B.Tech in Computer Science. Trained in Network, Web Application, Wireless, Android, and Active Directory Penetration Testing, along with SIEM and SOC operations. Hands-on practice through TryHackMe, BTLO, LetsDefend, and PortSwigger. Skilled in Burp Suite, Metasploit, Nmap, and Wireshark. Targeting a Security Analyst or Ethical Hacker role.',
  { align: 'justify', lineGap: 2 }
);
doc.moveDown(1);

// ---- TECHNICAL SKILLS ----
addSection('Technical Skills');
doc.fontSize(11);
doc.font('Helvetica-Bold').text('Tools: ', { continued: true }).font('Helvetica').text('Burp Suite, Metasploit, Nmap, Wireshark, Nessus, Nikto, Splunk, Hydra, John the Ripper, Aircrack-ng', { lineGap: 2 });
doc.font('Helvetica-Bold').text('Domains: ', { continued: true }).font('Helvetica').text('Network Pentesting, Web App Security, Wireless Security, Android Pentesting, Active Directory Attacks, SIEM, SOC Analysis', { lineGap: 2 });
doc.font('Helvetica-Bold').text('Platforms: ', { continued: true }).font('Helvetica').text('TryHackMe, Blue Team Labs Online (BTLO), LetsDefend, PortSwigger Web Security Academy', { lineGap: 2 });
doc.font('Helvetica-Bold').text('Languages & OS: ', { continued: true }).font('Helvetica').text('Python, Bash, SQL, Kali Linux, Parrot OS, Ubuntu, Windows Server', { lineGap: 2 });
doc.moveDown(1);

// ---- EXPERIENCE ----
addSection('Training & Experience');
doc.font('Helvetica-Bold').text('Offenso Certified Security Professional (OCSP)', { continued: true });
doc.font('Helvetica').text(' | Aug 2025 - Mar 2026', { align: 'right' });
doc.font('Helvetica-Oblique').text('Offenso Hackers Academy, Trivandrum');
doc.font('Helvetica').moveDown(0.3);

const expPoints = [
  'Trained in 9 domains: Network, Web App, Wireless, Android, Active Directory Pentesting, Microsoft Security, SIEM, SOC, and Reporting.',
  'Ran full VAPT cycles - recon, scanning, exploitation, and reporting - on 10+ simulated enterprise targets.',
  'Completed 15+ rooms on TryHackMe, 10+ BTLO challenges, 15+ LetsDefend SOC investigations, and OWASP Top 10 labs on PortSwigger.',
  'Wrote structured VAPT reports with CVSS scores, proof-of-concept evidence, and remediation steps for each finding.'
];
expPoints.forEach(pt => {
  doc.text(`• ${pt}`, { indent: 15, lineGap: 2 });
});
doc.moveDown(1);

// ---- PROJECTS ----
addSection('Key Project');
doc.font('Helvetica-Bold').text('PhishGuard+: Real-Time Heuristic Phishing Detection', { continued: true });
doc.font('Helvetica').text(' | Jan 2026', { align: 'right' });
doc.font('Helvetica-Oblique').text('Offenso Hackers Academy');
doc.font('Helvetica').moveDown(0.3);

const projPoints = [
  'Built a Chrome browser extension that detects phishing URLs in real time using heuristic rules and VirusTotal API.',
  'Achieved 91.5% detection accuracy on 200 test URLs (88 true positives, only 5 false positives).',
  'Detects combosquatting (e.g. paypal-login.xyz) by checking brand names in subdomains vs root domains.',
  'Scans downloaded files against 70+ antivirus engines via VirusTotal hash lookup before execution.'
];
projPoints.forEach(pt => {
  doc.text(`• ${pt}`, { indent: 15, lineGap: 2 });
});
doc.moveDown(1);

// ---- EDUCATION ----
addSection('Education');
doc.font('Helvetica-Bold').text('B.Tech - Computer Science Engineering', { continued: true });
doc.font('Helvetica').text(' | Dec 2021 - Jun 2025', { align: 'right' });
doc.font('Helvetica-Oblique').text('UKF College of Engineering and Technology, APJ Abdul Kalam Technological University, Kollam');
doc.font('Helvetica').moveDown(0.3);
doc.text('Coursework: Computer Networks, Operating Systems, DBMS, Data Structures', { indent: 15 });
doc.moveDown(1);

// ---- CERTIFICATIONS ----
addSection('Certifications');
doc.text('• Offenso Certified Security Professional (OCSP) - Offenso Hackers Academy', { indent: 15 });

doc.end();
console.log('PDF Resume Generated Successfully!');
