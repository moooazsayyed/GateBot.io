const fs = require('fs');

fs.readFile('1search_results.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const jsonData = JSON.parse(data);

  const relevantData = jsonData.local_results.map(result => {
    const directions = result.links ? result.links.directions : null;

    return {
      title: result.title,
      address: result.address,
      type: result.type,
      yearsInBusiness: result.years_in_business,
      phone: result.phone,
      hours: result.hours,
      directions: directions
    };
  });

  const jsonOutput = JSON.stringify(relevantData, null, 2);

  fs.writeFile('output.json', jsonOutput, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Data has been written to output.json file.');
  });
});