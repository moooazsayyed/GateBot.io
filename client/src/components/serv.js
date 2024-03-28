const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("4d612654e4e0674267452aba3c1d2877960c21cbf4ee0b061696118f52c9c50d");
const fs = require('fs'); // Import the fs module for file system operations

const query_params = {
    api_key: "4d612654e4e0674267452aba3c1d2877960c21cbf4ee0b061696118f52c9c50d",
    q: "Plumber Pune", // Your search query
    google_domain: "google.com",
    location: "Pune", // Specify the location for the search
    tbm: "lcl", 
    device: "desktop", // Specify the device type
    // Add any additional parameters as required
};

// Extract the search query from the query_params object
// const fileName = query_params.q.replace(/\s+/g, '-').toLowerCase();

search.json(query_params, (data) => {
    fs.writeFile(`1search_results.json`, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Search results saved to ${__filename}_search_results.json file.`);
    });
});
