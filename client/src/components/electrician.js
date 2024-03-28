import localResults from './output.json';
import './servicestype.css'; // Import your CSS file for styling

function Electrician() {
  return (
    <div className="App">
      <h1>Electricians near you</h1>
      <br />
      {localResults.map((result) => (
        <div className="card" key={result.title}>
          <div className="card-content">
            <h2>{result.title}</h2>
            <p>{result.address}</p>
            <p>Type: {result.type}</p>
            <p>Years in Business: {result.yearsInBusiness}</p>
            <p>Phone: {result.phone}</p>
            <p>Hours: {result.hours}</p>
          </div>
          <div className="card-actions">
            <a href={result.directions} target="_blank" rel="noopener noreferrer">
              Directions
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Electrician;
