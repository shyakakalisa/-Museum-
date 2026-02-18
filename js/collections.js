function showSection(sectionId) {
  const sections = document.querySelectorAll('.collection-section');
  sections.forEach((s) => {
    s.style.display = 'none';
  });

  const active = document.getElementById(sectionId);
  if (active) {
    active.style.display = 'block';
  }
}
