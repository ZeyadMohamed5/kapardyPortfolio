const Header = () => {
  return (
    <header className=" bg-background text-text w-full left-0 py-2 fixed top-0 z-100 shadow-lg">
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        <h1>
          <a href="" className="text-5xl uppercase font-semibold">
            Q
          </a>
        </h1>
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
