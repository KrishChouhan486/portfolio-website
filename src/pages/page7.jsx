
const Page7 = () => {
    return (
        <div className="h-screen bg-white p-5">
            <div className="relative h-full  bg-black rounded-[30px] overflow-hidden  ">
            <img
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[110vh] filter  contrast-150"

  src="/src/images/img1.png"
  alt=""
/>



                <img
                    className="absolute inset-y-[55vh] right-44 h-[350px ] w-[350px] z-10 "
                    src="/src/images/img2.png"
                    alt=""
                />
                <img
                    className="absolute inset-y-[27vh] right-1 h-[450px ] w-[450px]  "
                    src="https://static.wixstatic.com/media/f1c650_291a9a552504490c8842a00ea0cbedaa~mv2.png/v1/fill/w_325,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AIR%20V.png"
                    alt=""
                />

                <h1 className="font-[anzo4] absolute  text-[17vw] text-white top-1 bottom-40 left-20 uppercase">
                    ELEGANT
                </h1>
                <div className="absolute inset-y-80 w-[530px] left-20 text-[20px] mt-10">
                    <h1 className="text-zinc-500 text-[20px] font-[anzo3]">REFINED | SOPHISTICATED | IMPACTFUL</h1>
                    <h1 className="mt-3 text-[18px]  font-[anzo3]">
                        Elegance isn’t just style - it’s substance, the perfect balance of form and function. The most influential brands don’t follow trends - they define them through presence that feels both effortless and commanding.

                    </h1>
                    <button className="w-[300px] h-[50px] border-4 rounded-[25px] border-white mt-10 text-[15px]  ">CASE STUDY</button>
                </div>



            </div>

        </div>
    )
}
export default Page7;
