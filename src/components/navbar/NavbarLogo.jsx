const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/logo.png" 
        alt="Logo"  
        width="60" 
        height="60" 
        className="mr-1"
      />
      <div className="relative inline-flex group">
        <div
          className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <h2 className="text-white text-2xl sm:hidden md:block relative inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-200 bg-purple-900 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
          Aishwarya Pol
        </h2>
      </div>
      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">AP</h1>
    </div>
  );
};

export default NavbarLogo;
