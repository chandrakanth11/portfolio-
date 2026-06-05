import { jsPDF } from 'jspdf';

export function downloadResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // A4 size: 210mm x 297mm
  const marginX = 15;
  let currentY = 15;

  // Primary palette values
  const primaryColor = [20, 20, 20]; // Sleek Off-black
  const accentColor = [59, 130, 246]; // Modern blue (#3b82f6)
  const secondaryColor = [80, 80, 80]; // Charcoal gray

  // Helper to add sections with lines
  const addSectionHeader = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(title.toUpperCase(), marginX, currentY);
    
    // Bottom border for header
    currentY += 2;
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.2);
    doc.line(marginX, currentY, 210 - marginX, currentY);
    currentY += 5;
  };

  // 1. Header (Name & Contact)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('CHANDRAKANTHA ACHARYA C V', marginX, currentY);
  
  currentY += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  
  const contactText = 'Davangere, Karnataka, India  |  +91 7892660252  |  chandrakantha@gmail.com';
  const socialText = 'LinkedIn: linkedin.com/in/chandrakantha-c-910161a0  |  GitHub: github.com/chandrakanth11';
  
  doc.text(contactText, marginX, currentY);
  currentY += 4.5;
  doc.text(socialText, marginX, currentY);
  
  currentY += 8;

  // 2. Professional Summary
  addSectionHeader('Professional Profile');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  
  const summaryText = 'Computer Science Engineering student specializing in AI/ML engineering, high-integrity secure systems, and kernel-layer AI integration. Actively engaged in pioneering machine learning healthcare research, white-hat security diagnostics, and custom system firmware development. Deploys solutions as a Certified GCP Professional Cloud Architect.';
  const summaryLines = doc.splitTextToSize(summaryText, 210 - (marginX * 2));
  doc.text(summaryLines, marginX, currentY);
  
  currentY += (summaryLines.length * 4) + 5;

  // 3. Education
  addSectionHeader('Education');
  
  // BE
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Bachelor of Engineering in Computer Science', marginX, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text('2024 – 2027', 210 - marginX - 22, currentY);
  
  currentY += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.text('Jain Institute of Technology, Davangere, Karnataka, India', marginX, currentY);
  
  currentY += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const eduBullet1 = '• Specializing in Artificial Intelligence and System-level Computer Security.';
  const eduBullet2 = '• Lead Researcher in machine learning applications for clinical fetal health diagnostics.';
  doc.text(eduBullet1, marginX + 3, currentY);
  currentY += 3.5;
  doc.text(eduBullet2, marginX + 3, currentY);
  
  currentY += 6;

  // Diploma
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Diploma in Computer Science & Engineering', marginX, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text('2018 – 2022', 210 - marginX - 22, currentY);
  
  currentY += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.text('Bapuji Polytechnic, Davangere, Karnataka, India (Distinction)', marginX, currentY);
  
  currentY += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('• Acquired deep foundations in low-level compilation, C programming, and network diagnostics.', marginX + 3, currentY);
  
  currentY += 8;

  // 4. Professional Experience
  addSectionHeader('Professional Experience');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('AI/ML Engineer Intern', marginX, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text('Oct 2025 – Jan 2026', 210 - marginX - 35, currentY);
  
  currentY += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.text('EduTantar, Bangalore, India (Remote)', marginX, currentY);
  
  currentY += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const expBullets = [
    '• Architected computer vision pipelines for complex multi-object recognition tasks utilizing OpenCV.',
    '• Created proof-of-concept secure model orchestration systems to defend against prompt injection exploits.',
    '• Integrated AI components into client applications, reducing inference latency by 20% using pipeline parallelization.'
  ];
  
  expBullets.forEach(bullet => {
    doc.text(bullet, marginX + 3, currentY);
    currentY += 3.5;
  });

  currentY += 4;

  // 5. Research & Publications
  addSectionHeader('Research & Publications');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Detection of Perinatal Oxygen Deprivation Using Cardiotocography Signals', marginX, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text('Published: May 2026', 210 - marginX - 35, currentY);
  
  currentY += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.text('Published in the International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE)', marginX, currentY);
  
  currentY += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const resText = 'Engineered a preprocessing and feature-matching pipeline for physiological fetal signals. Trained XGBoost and CNN models to classify baby distress scores ahead of clinical deadlines, achieving a state-of-the-art diagnostic recall rate of 94.2% on medical benchmarking data sets.';
  const resLines = doc.splitTextToSize(resText, 210 - (marginX * 2));
  doc.text(resLines, marginX, currentY);
  
  currentY += (resLines.length * 4) + 4;

  // 6. Selected Projects
  addSectionHeader('Technical Projects');
  
  // Project 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('RED OS — AI-Powered Secure Operating System Layer', marginX, currentY);
  currentY += 4.2;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const proj1Text = 'A customized prototype operating system with assembly-coded interrupt handlers, custom boot-time drivers, and a sandboxed command prompt routing local command requests through a secure context-aware LLM daemon.';
  const proj1Lines = doc.splitTextToSize(proj1Text, 210 - (marginX * 2));
  doc.text(proj1Lines, marginX, currentY);
  
  currentY += (proj1Lines.length * 4) + 3;

  // Project 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Eye-ditector — Edge Micro-Computer Sleep Prevention Tracker', marginX, currentY);
  currentY += 4.2;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const proj2Text = 'Real-time computer vision tracking platform using MediaPipe face meshes and custom EAR (Eye Aspect Ratio) equations on lightweight edge microprocessors. Kept overall daemon processing footprint under 7.5% CPU overhead.';
  const proj2Lines = doc.splitTextToSize(proj2Text, 210 - (marginX * 2));
  doc.text(proj2Lines, marginX, currentY);
  
  currentY += (proj2Lines.length * 4) + 4;

  // 7. Certifications & Hackathons (Two-column layout or clean stacked blocks)
  addSectionHeader('Certifications & National Honors');
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  
  const colW = 85;
  let leftY = currentY;
  let rightY = currentY;
  
  // Left Column: Certifications
  doc.setFont('helvetica', 'bold');
  doc.text('KEY CERTIFICATIONS', marginX, leftY);
  leftY += 4;
  doc.setFont('helvetica', 'normal');
  const certs = [
    '• Google Cloud Certified Professional Cloud Architect',
    '• GenAI 101: Mastering LLMs (Google/Skillsoft)',
    '• AI Agents with Google & Kaggle (Kaggle Certified)',
    '• Computer Forensics & Counterterrorism (DROP Organization)',
    '• Certified Information Security Manager Prep (2022)'
  ];
  certs.forEach(cert => {
    doc.text(cert, marginX, leftY);
    leftY += 3.5;
  });

  // Right Column: Hackathons
  doc.setFont('helvetica', 'bold');
  doc.text('NATIONAL HACKATHONS', marginX + colW + 10, rightY);
  rightY += 4;
  doc.setFont('helvetica', 'normal');
  const hacks = [
    '• IIT Hyderabad AI/ML Hackathon — Finalist (Best ML Solver)',
    '• IIT Delhi Blueprint 6.0 Hackathon — Top Innovator Award',
    '• NIT Silchar NITS Hacks 8.0 — Best Cybersecurity Integration',
    '• NIT Agartala AYAM Tech Fest — First Runners-Up (Speed Coding)',
    '• V-HACK 1.0 — Distinction Winner in Computer Forensics'
  ];
  hacks.forEach(hack => {
    doc.text(hack, marginX + colW + 10, rightY);
    rightY += 3.5;
  });

  // Save the PDF
  doc.save('Chandrakantha_Acharya_CV.pdf');
}
