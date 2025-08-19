const Header = () => {
  return (
    <header className=" bg-background text-text w-full left-0 fixed top-0 z-100 shadow-lg">
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        <div className="w-18 h-18 flex items-center justify-center">
          <h1>
            <img
              className="max-w-full max-h-full object-cover"
              src="./assets/Qabardino.png"
              alt=""
            />
          </h1>
        </div>
        <nav>
          <ul className="flex gap-4 font-semibold items-center justify-between text-lg">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
