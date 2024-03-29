import localResults from '../apiresults/outputcarpenter.json';
import './servicestype.css'; // Import your CSS file for styling

function Carpenter() {
  return (
    <div className="App">
      <h1>Carpenter near you</h1>
      <br />
      {localResults.map((result) => (
        <div className="card" key={result.title}>
          <div className="card-icon">
            {result.type === 'Residential' && <i className="fas fa-home"></i>}
            {result.type === 'Commercial' && <i className="fas fa-building"></i>}
            {result.type === 'Emergency' && <i className="fas fa-exclamation-triangle"></i>}
          </div>
          <div className="card-content">
            <h2>{result.title}</h2>
            <p>{result.address}</p>
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

export default Carpenter;