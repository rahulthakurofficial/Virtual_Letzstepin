import { useState } from "react";
import "./LocationPermission.scss"; 

const LocationPermission = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(true); 

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setShowPopup(false); 
        },
        (err) => {
          setError(err.message);
          setShowPopup(false); 
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setShowPopup(false);
    }
  };

  return (
    <div className="location-container">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Location Permission</h3>
            <p>Allow this website to access your location?</p>
            <div className="popup-buttons">
              <button className="allow-btn" onClick={requestLocation}>
                Allow
              </button>
              <button className="deny-btn" onClick={() => setShowPopup(false)}>
                Deny
              </button>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default LocationPermission;
