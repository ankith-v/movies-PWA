import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href="/"> Home </Link>
        <Link href="/watchlist"> WatchList </Link>
      </nav>
    </div>
  );
};

export default Navbar;
