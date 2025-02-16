import { useEffect } from 'react';
import gsap from 'gsap';

const Page1Bottom = () => {
  useEffect(() => {
    gsap.to("#banner img", { 
      rotate: 360, 
      duration: 3, 
      ease: 'linear', 
      repeat: -1 
    });
  }, []); 

  return (
    <div className="absolute p-20 flex items-end justify-between bottom-0 left-0 w-full  ">
      <div >
        <h1 className="ml-[2.4vw] text-[1.3vw]  font-[anzo2]">BRAND DESIGN | WEBSITE DESIGN</h1>
        <h2 className="ml-[2.4vw] text-[1.3vw] text-gray-400 leading-5">BESPOKE FREELANCE</h2>
      </div>
      <div id='banner'>
        <img 
          className="mb-7 w-20" 
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" 
          alt="" 
        />
        <img 
          className="w-20 " 
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" 
          alt="" 
        />
      </div>
    </div>
  );
};

export default Page1Bottom;