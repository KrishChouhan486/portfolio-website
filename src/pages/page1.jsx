import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap"; // Import gsap correctly
import Page1Bottom from "../components/Page1Bottom";
import TiltText from "../components/TiltText";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const handleMouseMove = (e) => {
    if (tiltRef.current) {
      const rect = tiltRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setXVal((e.clientX - centerX) / 40); 
      setYVal(-(e.clientY - centerY) / 40); 
    }
  };

  useEffect(() => {
    if (tiltRef.current) {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 0.5, 
        ease: "power2.out", 
        onUpdate: () => { 
          tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`; 
        }
      });
    }
  }, [xVal, yVal]); 

  return (
    <div
      onMouseMove={handleMouseMove}
      className="  h-screen p-5 bg-white"
    >
      <div
        id="page1-in"
        className="py-20 shadow-xl shadow-gray-700 h-full w-full bg-cover rounded-[40px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1861,h_874,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]"
      >
        <img
          className="h-20 ml-20"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
          alt=""
        />
        <TiltText ref={tiltRef} /> 
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;