import { Link } from "react-router-dom";

function EventCard(props) {

    return (
        <div className="EventCard card">
            <Link to={`/events/${props.event.id}`}>
                <h3>{props.event.title}</h3>
            </Link>
            <p>{props.event.description}</p>
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