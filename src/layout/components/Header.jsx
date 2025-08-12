const Header = () => {
  return (
    <header className="flex justify-between items-center px-30 py-3 bg-background text-text w-full relative">
      <h1>
        <a href="" className="text-5xl uppercase font-semibold">
          Q
        </a>
      </h1>

      <ul className="flex gap-4 font-semibold items-center justify-between text-lg">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Work</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
