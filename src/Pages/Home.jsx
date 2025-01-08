import React, { useState, useEffect } from "react";
import Hookks from "./Hookks";

function Home() {
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
    <>
      <section
        className='bg-[url("https://gameplex-final.vercel.app/assets/img/banner/bnbg3.jpg")] h-[500px] relative'
      >
        <div>
          {/* Banner Images */}
          <div className="py-6">
            <img
              src="https://gameplex-final.vercel.app/assets/img/banner/banner1.png"
              alt=""
              className="w-[250px] rounded-lg h-[150px]"
            />
          </div>
          <div className="absolute bottom-[70px] rounded-lg border-2 border-white">
            <img
              src="https://gameplex-final.vercel.app/assets/img/banner/banner3.png"
              alt=""
              className="w-[250px] h-[150px] rounded-lg"
            />
          </div>
          <div className="absolute bottom-[70px] right-0">
            <img
              src="https://gameplex-final.vercel.app/assets/img/banner/banner3.png"
              alt=""
              className="w-[250px] h-[150px] rounded-lg border-2 border-white"
            />
          </div>

          {/* Heading */}
          <div className="absolute left-[400px] top-[90px]">
            <h3 className="text-orange-600 text-[30px] text-center font-serif">
              Introducing GamePlex
            </h3>
            <p className="font-serif text-[40px] text-white py-2">
              GamePlex - A Gaming <br /> Platform HTML Template
            </p>
          </div>
        </div>

        {/* Navigation Section with Number Animation */}
        <div className="absolute left-[430px] bottom-[90px] flex gap-5">
          <div className="border-2 border-orange-600 py-[30px] px-[30px] rounded-lg text-white">
            <h4>Home</h4>
            <p className="text-orange-400 text-[24px] font-bold mt-2">
              <Hookks/>
            </p>
          </div>
          <div className="border-2 border-orange-600 py-[30px] px-[30px] rounded-lg text-white">
            <h4>Inner Page</h4>
            <p className="text-orange-400 text-[24px] font-bold mt-2">
              <Hookks/>
            </p>
          </div>
          <div className="border-2 border-orange-600 py-[30px] px-[30px] rounded-lg text-white">
            <h4>Elements</h4>
            <p className="text-orange-400 text-[24px] font-bold mt-2">
              <Hookks/>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
