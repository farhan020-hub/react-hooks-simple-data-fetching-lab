import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false);
      });
  }, []); // The empty dependency array ensures this effect runs once on component mount

  return (
    <div className="App">
      <h2>Random Dog Image</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
