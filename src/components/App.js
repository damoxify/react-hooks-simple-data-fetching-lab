// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    // To fetch a random dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        //  To update the state, after receiving a response.
        setDogImage(data.message);
        setIsLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, []); 

  return (
    <div className="App">
      <header>
        <h2>Random Dog Image</h2>
      </header>
      <main>
        {/* Step 4: To display "Loading..." while fetching */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          // Step 5: Display the dog image after receiving the response
          <img src={dogImage} alt="A Random Dog" />
        )}
      </main>
    </div>
  );
}

export default App;

