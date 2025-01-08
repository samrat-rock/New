import React, { useEffect, useState } from 'react'

function Hookks() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
      // Increment the number over time
      const targetNumber = 100; // Set the target number
      const duration = 3000; // Duration of animation in milliseconds
      const interval = 50; // Interval time in milliseconds
      const increment = targetNumber / (duration / interval);
  
      const timer = setInterval(() => {
        setNumber((prev) => {
          const nextValue = prev + increment;
          if (nextValue >= targetNumber) {
            clearInterval(timer);
            return targetNumber; // Stop at the target number
          }
          return Math.ceil(nextValue); // Update with the next value
        });
      }, interval);
  
      return () => clearInterval(timer); // Cleanup
    }, []);
    
  return (
    <div>
      {number}+
    </div>
  )
}

export default Hookks
