import Link from "next/link";

const Navbar = () => {
  return (
    <>
        <nav>
          <ul>
            <li>
              <Link className="links" href="/">
                {" "}
                🥑 Avo Store
              </Link>
            </li>
          </ul>
        </nav>
    </>
  );
};

export default Navbar;
