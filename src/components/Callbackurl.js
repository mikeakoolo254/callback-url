import React, { useEffect } from 'react';

function Callbackurl() {
 




  useEffect(() => {
    // Make a request to the backend (replace with your actual backend URL)
    fetch('http://localhost:3001/callback')
      .then(response => response.json())
      .then(data => {
        // Handle the data from the server
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Your component UI */}
    </div>
  );
};

export default Callbackurl
