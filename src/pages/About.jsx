import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useGlobalContext } from '../components/context';

function About() {
  const { name, setName } = useGlobalContext();
  return (
    <div className="container">
      <nav className="topabsolute navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto linkmargin">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/jsonplaceholder">Jsonplaceholder</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <table className="float-right">
            <tbody>
              <tr>
                <td><input className="nav-item form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /></td>
                <td><button className="nav-item btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </nav>
      <div className="container">
        <hr />

        <Outlet />
        <div>
          <h1 className="aboutpage">This is about page</h1><p>your name: {name}</p>
        </div>

      </div>
    </div>
  );
}
export default About;