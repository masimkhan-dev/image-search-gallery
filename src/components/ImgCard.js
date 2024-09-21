import React from 'react';

function ImageCard({ image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="w-full h-48 object-cover"
        onError={(e) => {
          console.error('Image load error:', e);
          e.target.src = 'https://via.placeholder.com/400x300?text=Image+Load+Error';
        }}
      />
      <div className="p-4">
        <p className="text-sm text-gray-600">Photo by {image.user}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {image.tags.split(', ').map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
