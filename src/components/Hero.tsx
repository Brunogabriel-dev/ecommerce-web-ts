const Hero = () => {
  return (
  <div className="container pt-8">
    <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
      <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
       <img 
       className="w-full h-full object-cover rounded-lg" src="/hero__1.webp" 
       alt="hero image" 
       />

       <div className="absolute max-w[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
        <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
          Dried Fruits Best Quality

        </h2>
       </div>
      </div>
    </div>
  </div> 
  )
};

export default Hero;