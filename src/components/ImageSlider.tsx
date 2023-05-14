import React, { useState } from "react";
type ImageSliderProps = {
    images: string[];
    thumbnails: string[];
  };

  
const ImageSlider = ({ images, thumbnails }: ImageSliderProps) => {
    const [activeImage, setActiveImage] = useState(images[0]);
    function handleThumbnailClick(thumbnail: string) {
        setActiveImage(thumbnail);
      }
  return (
   
         <div className="image-slider">
      <div className="image-container">
        <img src={activeImage} alt="" />
      </div>
      <div className="thumbnail-container">
        {thumbnails.map((thumbnail) => (
          <img
            key={thumbnail}
            src={thumbnail}
            alt=""
            onClick={() => handleThumbnailClick(thumbnail)}
          />
        ))}
      </div>
    </div>

  )
}

export default ImageSlider