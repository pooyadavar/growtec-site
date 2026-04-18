import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const ProjectImageRotator = ({ images, clientName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Effect for image rotation
  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setIsFading(true); // Start fade out
        setTimeout(() => {
          setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
          // Introduce a very small delay before fading back in
          setTimeout(() => {
            setIsFading(false);
          }, 50); // A small delay (e.g., 50ms) to allow the browser to paint the new image
        }, 500); // Half of transition duration
      }, 2000); // Total cycle time for each image (fade out + image display + fade in)

      return () => {
        clearInterval(interval);
      };
    }
  }, [images]);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {images && images.length > 0 && (
        <img
          key={images[currentImageIndex]} // Use image src as key to force remount on image change for transition
          src={images[currentImageIndex]}
          alt={clientName}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: isFading ? 0 : 1, // Control opacity for fade effect
            transition: "opacity 0.5s ease-in-out", // CSS transition for opacity
          }}
        />
      )}
    </Box>
  );
};

export default ProjectImageRotator;
