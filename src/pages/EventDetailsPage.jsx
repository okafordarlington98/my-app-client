import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"; // used for calling the API

import AddEvent from "../components/AddEvent"; // for rendering Event Add Form


function EventDetailsPage() {

    const { eventId } = useParams() // destructuring the event id from dynamic params (see App.jsx => /:eventId)

    const [event, setEvent] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {

            // call the API here to receive event details...
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/events/${eventId}`
            );

            //console.log(response.data)

            setEvent(response.data)

            //setIsLoading(false) // render the component once the data finished loading

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    if (!event) {
        return <h3>Event not found</h3>;
    }



    return (
        <div className="EventDetailsPage">
            <h1>{event.title}</h1>

            <p>{event.description}</p>

            <p>
                <strong>📍 Location:</strong> {event.location}
            </p>

            <p>
                <strong>📅 Date:</strong> {event.date}
            </p>

            {/* Comment this out temporarily if page still crashes */}
            <AddEvent eventId={event.id} getData={getData} />

            <Link to="/events">
                <button>Back to Events</button>
            </Link>

            <Link to={`/events/edit/${event.id}`}>
                <button>Edit Events</button>
            </Link>

        </div>
    );
}

export default EventDetailsPage;