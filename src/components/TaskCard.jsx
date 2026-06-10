
function EventCard(props) {
    return (
        <div className="EventCard card">
            <h3>{props.event.title}</h3>
            <h4>Description:</h4>
            <p>{props.event.description}</p>
        </div>
    );
}

export default EventCard;