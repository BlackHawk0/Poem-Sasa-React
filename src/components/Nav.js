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
                              <NavLink to="/poem-gram/" className={"Link"}>All poems</NavLink>
                              <NavLink to="/poem-gram/personal" className={"Link"}>Personal</NavLink>
                              <NavLink to="/poem-gram/liked" className={"Link"}>Liked</NavLink>

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
