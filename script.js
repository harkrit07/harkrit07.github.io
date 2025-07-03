// const username = "harkrit07";
// const container = document.getElementById("projects-container");

// fetch(`https://api.github.com/users/${username}/repos`)
//   .then(res => res.json())
//   .then(repos => {
//     repos.forEach(repo => {
//       const div = document.createElement('div');
//       div.className = 'project';
//       div.innerHTML = `
//         <h3>${repo.name}</h3>
//         <p>${repo.description || "No description available."}</p>
//         <a href="${repo.html_url}" target="_blank">View on GitHub</a>
//       `;
//       container.appendChild(div);
//     });
//   });





// Mobile menu toggle function
function toggleMenu() {
  const navbarHead = document.getElementById('navbarHead');
  navbarHead.classList.toggle('active');
}

// Resume download function
function downloadResume() {
  // Create a link to download the resume file
  const link = document.createElement('a');
  link.href = 'Harkrit Resume.pdf';
  link.download = 'Harkrit Resume.pdf';
  link.click();
}

// GitHub Projects Fetcher
const username = "harkrit07";
const container = document.getElementById("projects-container");

// Function to fetch and display GitHub repositories
async function fetchGitHubProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const repos = await response.json();
    
    // Clear container
    container.innerHTML = '';
    
    // Sort repos by updated date (most recent first)
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    
    // Display only the first 6 repositories
    repos.slice(0, 6).forEach(repo => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project';
      
      // Format the repository name (remove hyphens/underscores, capitalize)
      const formattedName = repo.name
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      
      // Get programming language or default to 'Code'
      const language = repo.language || 'Code';
      
      // Format last updated date
      const lastUpdated = new Date(repo.updated_at).toLocaleDateString();
      
      projectDiv.innerHTML = `
        <h3>${formattedName}</h3>
        <p>${repo.description || "A coding project showcasing development skills and problem-solving."}</p>
        <div class="project-meta">
          <span class="language">${language}</span>
          <span class="updated">Updated: ${lastUpdated}</span>
        </div>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
      `;
      
      container.appendChild(projectDiv);
    });
    
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    
    // Display error message or fallback content
    container.innerHTML = `
      <div class="project">
        <h3>Projects Coming Soon</h3>
        <p>My GitHub projects will be displayed here. Currently working on exciting new projects!</p>
        <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer">Visit GitHub Profile →</a>
      </div>
    `;
  }
}

// Event listeners for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  // Fetch GitHub projects when page loads
  if (container) {
    fetchGitHubProjects();
  }
  
  // Close mobile menu when clicking on navigation links
  document.querySelectorAll('.navbar-head a').forEach(link => {
    link.addEventListener('click', () => {
      const navbarHead = document.getElementById('navbarHead');
      navbarHead.classList.remove('active');
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    const navbarHead = document.getElementById('navbarHead');
    
    if (!navbar.contains(e.target) && navbarHead.classList.contains('active')) {
      navbarHead.classList.remove('active');
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add scroll effect to navbar
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      navbar.style.background = 'rgba(0, 0, 0, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.style.background = 'transparent';
      navbar.style.backdropFilter = 'none';
    }
    
    lastScrollY = currentScrollY;
  });
  
  // Add fade-in animation for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all sections for fade-in effect
  document.querySelectorAll('.body-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});

// Add typing effect to hero text (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Optional: Add typing effect to hero text when page loads
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-content p');
  if (heroText) {
    const originalText = heroText.textContent;
    typeWriter(heroText, originalText, 80);
  }
});

// Add project meta styles dynamically
const projectMetaStyles = `
  .project-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    font-size: 0.8rem;
    color: #999;
  }
  
  .language {
    background: rgba(0, 255, 127, 0.2);
    color: #00FF7F;
    padding: 0.2rem 0.5rem;
    border-radius: 15px;
    font-weight: bold;
  }
  
  .updated {
    font-style: italic;
  }
`;

// Add the styles to the document
const style = document.createElement('style');
style.textContent = projectMetaStyles;
document.head.appendChild(style);


  
