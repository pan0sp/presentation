// A simple function to log a message when a section is clicked
document.querySelectorAll('section').forEach(section => {
  section.addEventListener('click', () => {
    console.log(`You clicked on ${section.id}`);
  });
});
