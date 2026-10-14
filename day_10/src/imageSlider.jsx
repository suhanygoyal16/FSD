import React, { useState, useEffect } from 'react'

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/id/10/400/400",
    "https://picsum.photos/id/20/400/400",
    "https://picsum.photos/id/30/400/400"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Image Slider</h2>
      <img
        src={images[currentIndex]}
        alt="slider"
        style={{ height: "200px", width: "200px", objectFit: "cover" }}
      />
    </div>
  )
}

export default ImageSlider