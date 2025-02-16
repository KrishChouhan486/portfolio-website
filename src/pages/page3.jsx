const Page3 = ()=>{
return (
<div className="bg-white relative h-screen flex items-center justify-center">
    <img  className ="absolute h-[80vh] w-[65vw] z-20 " src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_704,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
<video  autoPlay loop muted className="h-[70vh] w-[48vw] object-cover mb-4 relative z-10" src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
<div className="h-0.5 w-3/5 bg-black top-[35%] absolute "></div>
<div className="h-0.5 w-4/5 bg-black top-[55%] absolute  " ></div>
<div className="h-0.5 w-full bg-black top-[75%] absolute  " ></div>
</div>
)
}
export default Page3;