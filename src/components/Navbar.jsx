import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>

            <Link to="/events">
                <button>Events</button>
            </Link>

            <Link to="/events/create">
                <button>Create Event</button>
            </Link>
        </nav>
    );
}

export default Navbar;