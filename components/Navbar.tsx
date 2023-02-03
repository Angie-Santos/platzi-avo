import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav id="principal-header">
        <ul>
          <li>
            <Link id="navbar" href="/">
              <img className="logo" src="/images/avocado-icon.png" alt="logo" />
              Avo Store
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
