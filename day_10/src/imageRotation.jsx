import React, { useState, useEffect } from 'react'

const ImageRotation = () => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 90)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Image Rotation</h2>

      <img
        src="https://picsum.photos/id/40/400/400"
        alt="rotation"
        style={{
          height: "200px",
          width: "200px",
          objectFit: "cover",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.5s ease"
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setRotation((prev) => prev + 90)}>Rotate</button>
      </div>
    </div>
  )
}

export default ImageRotation
