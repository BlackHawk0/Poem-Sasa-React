import { NavLink } from "react-router-dom";

function Nav() {
      return (
                  <div className="Nav"
                  style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",

                  }}
                  >
                        <div className="Nav-links">
                              <NavLink to="/" className={"Link"}>All poems</NavLink>
                              <NavLink to="/collection" className={"Link"}>Personal</NavLink>
                              <NavLink to="/liked" className={"Link"}>Liked</NavLink>

                        <NavLink to="/poem-gram/create" className={"Btn"}
                        style={{
                              padding: "10px",
                              backgroundColor: "#0b489c",
                              color: "white",
                              borderRadius: "5px",
                              textDecoration: "none",
                              fontWeight: "bold",
                        }}
                        >Create</NavLink>
                        </div>
                  </div>
      );
}

export default Nav;
