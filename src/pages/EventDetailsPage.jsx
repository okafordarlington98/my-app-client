import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"; // used for calling the API

import AddEvent from "../components/AddEvent"; // for rendering Event Add Form


function EventDetailsPage () {

    const { eventId } = useParams() // destructuring the event id from dynamic params (see App.jsx => /:eventId)

    const [ event, setEvent ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    try {

      // call the API here to receive event details...
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/events/${eventId}`
      );

      //console.log(response.data)

      setEvent(response.data)

      //setIsLoading(false) // render the component once the data finished loading

    } catch (error) {
      console.log(error)
      //todo proper error handling here
      setIsLoading(false);
    }
  }


  
  return (
    <div className="EventDetailsPage">

      <div>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </div>

      {/* ... list of all events for this Project should be rendered here */}

      {/* example of a single EventCard being rendered */}
      {/* <EventCard /> */}


      {/* ... form for adding a new Task should be rendered here    */}
      <AddEvent eventId={event.id} getData={getData}/>

      <Link to="/events">
        <button>Back to events</button>
      </Link>
      
      <Link to={`/events/edit/${event.id}`}>
        <button>Edit Events</button>
      </Link>      
      
    </div>
  );
}

export default EventDetailsPage;