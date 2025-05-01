import React, { useEffect, useRef, useState } from 'react';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Check if VANTA and THREE are available before initializing
    if (!vantaEffect && window.VANTA && window.THREE) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 500.00,
          minWidth: 500.00,
          scale: 1.00,
          scaleMobile: 1.00,
          pointSize: 9.00,
          color:0xFC0848, // Color of the net lines
          backgroundColor: 0x0C0C14, // Background color (optional)
          points: 12.00, // Number of points
          maxDistance: 19.00, // Maximum distance between points to draw a line
          spacing: 12.00 // Spacing between points
        })
      );
    }

    // Cleanup function to destroy the Vanta effect when the component unmounts
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]); // Re-run effect only if vantaEffect changes

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default VantaBackground;