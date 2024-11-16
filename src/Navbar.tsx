const Navbar = () => {
  return (<div className="container hidden lg:block">
    <div className="flex justify-between items-center pt-8">
      <h1 className="text-4x1 font-medium">Logo</h1>
      <div className="relative w-full max-w-[500px]">
        <input className="bg-[#f2f3f5]  border-none outline-none px-6 py-3 rounded-[30px]" type="text" placeholder="Search Product..."/>
      </div>
    </div>
  </div>
  );
};

export default Navbar