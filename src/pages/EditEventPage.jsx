import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // used for calling the API

function EditEventPage() {

    const navigate = useNavigate()
    const { eventId } = useParams() // destructuring the event id from dynamic params (see App.jsx => /:eventId)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [isDeleteConfirmationShowing, setIsDeleteConfirmationShowing] = useState(false)

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_SERVER_URL}/events/${eventId}`)
            .then((response) => {
                console.log(response.data)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const body = {
            title, // => title: title
            description // => description: description
        }

        try {
            // call the API here to edit one event...
            await axios.put(`${import.meta.env.VITE_SERVER_URL}/events/${eventId}`, body)

            navigate(`/events/${eventId}`)

        } catch (error) {
            console.log(error)
            //todo proper error handling here
        }
    };

    const deleteEvent = async () => {
        try {
            // call the API here to delete one event...
            await axios.delete(`${import.meta.env.VITE_SERVER_URL}/events/${eventId}`)
            navigate("/events")

        } catch (error) {
            console.log(error)
            //todo proper error handling here
        }
    };

    if (isLoading) return <h3>Loading...</h3> //todo proper loading animation here

    return (
        <div className="EditEventPage">
            <h3>Edit the Event</h3>

            <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Update Event</button>
            </form>

            <button onClick={() => setIsDeleteConfirmationShowing(true)}>Delete Event</button>

            {isDeleteConfirmationShowing && <div>
                <p>Are you sure</p>
                <button onClick={deleteEvent}>YES</button>

                <button onClick={() => setIsDeleteConfirmationShowing(false)}>
                    NO
                </button>
            </div>}
        </div>
    );
}

export default EditEventPage;