

const Hero = () => {
  return (
    <div className="grid justify-center grid-flow-col grid-cols-1 mx-10">
      <div className=" flex flex-col text-start max-w-[500px] gap-6">
        <h1 className="text-3xl font-bold">New Released this week</h1>
        <p>It is time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week new releases offer something for everyone</p>
      <button className=" max-w-[30%] py-2 bg-[#FFCE1A] items-cente justify-center justify-items-center">Subscribe</button>
      </div>
      <div>
        <img src="/src/assets/Book Store/Animation.png" className=" w-[486px] h-[378px]" alt="" />
      </div>
    </div>
  )
}

export default Hero
