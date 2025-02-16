const Page5 = () => {
    return (
        <div className="h-screen  bg-white p-10">
            <div className="h-full w-full overflow-hidden bg-black rounded-[50px] relative">
                <video muted autoPlay loop className="h-full w-full object-cover" 
                    src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/720p/mp4/file.mp4">
                </video>
                <h1 className="font-[anzo4] absolute  text-[35vw] text-white top-1 bottom-40 left-40 uppercase">
                    About
                </h1>
            </div>
        </div>
    )
}
export default Page5;
