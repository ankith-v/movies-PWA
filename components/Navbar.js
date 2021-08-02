import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href="/"> Home </Link>
        <Link href="/search"> Search </Link>
      </nav>
    </div>
  );
};

export default Navbar;
