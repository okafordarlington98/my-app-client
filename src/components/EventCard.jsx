import { Link } from "react-router-dom";

function EventCard({ event, isFavorite, onToggleFavorite }) {

    return (
        <div className="EventCard card">

            <div className="card-header">
                <Link to={`/events/${event.id}`}>
                    <h3>{event.title}</h3>
                </Link>

                <button
                    className={`fav-btn ${isFavorite ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onToggleFavorite();
                    }}
                >
                    {isFavorite ? "⭐" : "☆"}
                </button>
            </div>

            <p>{event.description}</p>

            <p className="meta">📍 {event.location}</p>
            <p className="meta">📅 {event.date}</p>

        </div>
    );
}

//* or by receiving the spread props
// function EventCard({ id, title, description }) {

// return (
//  <div className="EventCard card">
//        <Link to={`/events/${id}`}>
//            <h3>{title}</h3>
//        </Link>
//        <p>{description}</p>
//    </div>
//    );
// }

export default EventCard;