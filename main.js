// Add JS here
// Add event listeners to social media links
const socialMediaLinks = document.querySelectorAll('.social-media-links a');

socialMediaLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // Replace with actual link URL
    console.log('Link clicked:', link.href);
  });
});

// Add event listeners to skills
const skills = document.querySelectorAll('.skills span');

skills.forEach((skill) => {
  skill.addEventListener('click', (e) => {
    e.preventDefault();
    // Replace with actual skill action
    console.log('Skill clicked:', skill.textContent);
  });
});