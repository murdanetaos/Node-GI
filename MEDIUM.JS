const fs = require('fs');

// Read the contents of the text file
fs.readFile('planets.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the file contents by newlines
  const planets = data.split('\n');

  // Remove any empty lines
  const filteredPlanets = planets.filter(planet => planet.trim() !== '');

  // Print the planets to the console
  filteredPlanets.forEach(planet => {
    console.log(planet);
  });
});
