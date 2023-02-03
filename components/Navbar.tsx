import Link from "next/link";

const Navbar = () => {
  return (
    <>
        <nav>
          <ul>
            <li>
              <Link className="links" href="/">
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
