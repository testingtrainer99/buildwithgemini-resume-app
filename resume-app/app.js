// Application State & Logic
let currentResume = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadResumeData();
  initTheme();
  setupEventListeners();
  renderAll();
});

// Load Resume from LocalStorage or default
function loadResumeData() {
  const saved = localStorage.getItem('crisp_resume_data');
  if (saved) {
    try {
      currentResume = JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved resume data:', e);
      currentResume = JSON.parse(JSON.stringify(defaultResumeData));
    }
  } else {
    currentResume = JSON.parse(JSON.stringify(defaultResumeData));
  }
}

// Save Resume Data to LocalStorage
function saveResumeData() {
  localStorage.setItem('crisp_resume_data', JSON.stringify(currentResume));
  renderAll();
}

// Theme Switcher Initialization
function initTheme() {
  const savedTheme = localStorage.getItem('crisp_resume_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('crisp_resume_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (theme === 'dark') {
    // Sun icon for switching to light
    icon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
  } else {
    // Moon icon for switching to dark
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  }
}

// Setup Event Listeners
function setupEventListeners() {
  document.getElementById('btn-theme').addEventListener('click', toggleTheme);
  document.getElementById('btn-print').addEventListener('click', () => window.print());

  // Export JSON
  document.getElementById('btn-export').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentResume, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${currentResume.profile.name.toLowerCase().replace(/\s+/g, '_')}_resume.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });

  // Import JSON
  const fileInput = document.getElementById('json-file-input');
  document.getElementById('btn-import').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported && imported.profile && imported.experience) {
          currentResume = imported;
          saveResumeData();
          alert('Resume JSON imported successfully!');
        } else {
          alert('Invalid JSON structure. Please upload a valid resume JSON file.');
        }
      } catch (err) {
        alert('Error parsing JSON file.');
      }
    };
    reader.readAsText(file);
  });

  // Edit Modal Controls
  const modal = document.getElementById('edit-modal');
  document.getElementById('btn-edit').addEventListener('click', () => openEditModal());
  document.getElementById('modal-close').addEventListener('click', () => closeModal());
  document.getElementById('btn-save-modal').addEventListener('click', () => saveModalChanges());
  document.getElementById('btn-reset-default').addEventListener('click', () => {
    if (confirm('Reset resume content back to default sample template?')) {
      currentResume = JSON.parse(JSON.stringify(defaultResumeData));
      saveResumeData();
      closeModal();
    }
  });

  // Close modal on click outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

function openEditModal() {
  const p = currentResume.profile;
  document.getElementById('edit-name').value = p.name || '';
  document.getElementById('edit-title').value = p.title || '';
  document.getElementById('edit-tagline').value = p.tagline || '';
  document.getElementById('edit-email').value = p.email || '';
  document.getElementById('edit-phone').value = p.phone || '';
  document.getElementById('edit-location').value = p.location || '';
  document.getElementById('edit-summary').value = p.summary || '';

  document.getElementById('edit-modal').classList.add('active');
}

function closeModal() {
  document.getElementById('edit-modal').classList.remove('active');
}

function saveModalChanges() {
  currentResume.profile.name = document.getElementById('edit-name').value;
  currentResume.profile.title = document.getElementById('edit-title').value;
  currentResume.profile.tagline = document.getElementById('edit-tagline').value;
  currentResume.profile.email = document.getElementById('edit-email').value;
  currentResume.profile.phone = document.getElementById('edit-phone').value;
  currentResume.profile.location = document.getElementById('edit-location').value;
  currentResume.profile.summary = document.getElementById('edit-summary').value;

  saveResumeData();
  closeModal();
}

// Render UI Components
function renderAll() {
  renderProfile();
  renderHighlights();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducationAndCerts();
}

function renderProfile() {
  const p = currentResume.profile;
  document.getElementById('profile-avatar').src = p.avatar;
  document.getElementById('profile-name').textContent = p.name;
  document.getElementById('profile-title').textContent = p.title;
  document.getElementById('profile-tagline').textContent = p.tagline;
  document.getElementById('profile-summary').textContent = p.summary;

  const contactBar = document.getElementById('contact-bar');
  contactBar.innerHTML = `
    <a href="mailto:${p.email}" class="contact-item">✉ ${p.email}</a>
    <span class="contact-item">📞 ${p.phone}</span>
    <span class="contact-item">📍 ${p.location}</span>
    <a href="${p.github}" target="_blank" rel="noopener" class="contact-item">🐙 GitHub</a>
    <a href="${p.linkedin}" target="_blank" rel="noopener" class="contact-item">💼 LinkedIn</a>
  `;
}

function renderHighlights() {
  const container = document.getElementById('highlights-container');
  if (!currentResume.highlights || currentResume.highlights.length === 0) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'grid';
  container.innerHTML = currentResume.highlights.map(h => `
    <div class="stat-card">
      <div class="stat-value">${h.value}</div>
      <div class="stat-label">${h.label}</div>
    </div>
  `).join('');
}

function renderExperience() {
  const container = document.getElementById('experience-container');
  container.innerHTML = currentResume.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-header">
        <div>
          <div class="role-title">${exp.role}</div>
          <div class="company-name">${exp.company} — ${exp.location}</div>
        </div>
        <span class="period-badge">${exp.period}</span>
      </div>
      <p class="timeline-desc">${exp.description}</p>
      <ul class="bullet-list">
        ${exp.bulletPoints.map(bp => `<li>${bp}</li>`).join('')}
      </ul>
      <div class="tech-tags">
        ${exp.skills.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = currentResume.projects.map(proj => `
    <div class="project-card">
      <div>
        <div class="project-header">
          <div class="project-title">${proj.title}</div>
          ${proj.link ? `<a href="${proj.link}" target="_blank" rel="noopener" class="contact-item" style="font-size:0.8rem;">🔗 View</a>` : ''}
        </div>
        <div class="project-subtitle">${proj.subtitle}</div>
        <div class="project-desc">${proj.description}</div>
      </div>
      <div class="tech-tags" style="margin-top: 12px;">
        ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  container.innerHTML = currentResume.skillCategories.map(cat => `
    <div>
      <div class="skill-cat-title">${cat.category}</div>
      ${cat.items.map(item => `
        <div class="skill-item">
          <div class="skill-info">
            <span>${item.name}</span>
            <span>${item.level}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${item.level}%;"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderEducationAndCerts() {
  const eduContainer = document.getElementById('education-container');
  eduContainer.innerHTML = currentResume.education.map(edu => `
    <div class="edu-item">
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-sub">${edu.institution} • ${edu.period}</div>
      <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">${edu.details}</div>
    </div>
  `).join('');

  const certContainer = document.getElementById('certifications-container');
  certContainer.innerHTML = currentResume.certifications.map(cert => `
    <div class="cert-item">
      <div class="cert-title">${cert.title}</div>
      <div class="cert-sub">${cert.issuer} (${cert.year})</div>
    </div>
  `).join('');
}
