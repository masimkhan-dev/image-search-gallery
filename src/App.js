import React, { useEffect, useState } from "react";
import "./assets/main.css";
import ImageCard from "./components/ImgCard"
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState('nature');

  const API_KEY = '45688504-87cec1bb1398058179eb92a8d';

  useEffect(() => {
    if (term) {
      setLoading(true);
      console.log('Fetching with term:', term);
      fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('API response:', data);
          setImages(data.hits);
          setLoading(false);
        })
        .catch(error => {
          console.error('API error:', error.message);
          setLoading(false);
        });
    }
  }, [term]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Image Search</h1>
      <ImageSearch term={term} setTerm={setTerm} />
      
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
