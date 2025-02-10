export const Header = () => {
  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-10">
      <nav className="flex gap-2 p-1 sm:gap-4 sm:p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item text-xs sm:text-sm">Home</a>
        <a href="#projects" className="nav-item text-xs sm:text-sm">Projects</a>
        <a href="#About" className="nav-item text-xs sm:text-sm">About</a>
        <a href="#Contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 text-xs sm:text-sm">Contact</a>
      </nav>
    </div>
  );
};

