const Hero = () => {
  return (
  <div className="container pt-8">
    <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
      <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
       <img className="w-full h-full object-cover rounded-lg" src="/hero__1.webp" 
       alt="hero image" />
      </div>
    </div>
  </div> 
  )
};

export default Hero;