const Page6 = () => {
    return (
        <div className="relative ">

            <div className="fixed inset-0 -z-10 ">
                <video
                    muted
                    autoPlay
                    loop
                    className="w-full h-full object-cover"
                    src="https://video.wixstatic.com/video/f1c650_9e12ba46db6147cc811946ee16fa9fc4/720p/mp4/file.mp4"
                ></video>
            </div>


            <div className="relative h-screen  border-[1vw] border-white rounded-[40px] flex justify-center items-center px-20 my-5 mx-5">


                <div className="w-[400px] h-[400px] border-[1vw] border-white rounded-full backdrop-blur-xl"></div>

            </div>
            <h1 className="font-[anzo4] absolute  text-[20vw] text-white top-1 bottom-40 left-32 uppercase">
                THE
            </h1>
            <h1 className="font-[anzo4] absolute  text-[20vw] text-white top-64 bottom-40 left-32 uppercase">
                FOCUS
            </h1>


        </div>
    );
};

export default Page6;
