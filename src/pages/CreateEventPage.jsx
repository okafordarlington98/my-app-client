import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"; // used for calling the API

function CreateEventPage() {

    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ isCreating, setIsCreating ] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault();

        const body = {
            title: title,
            description: description
        }

        try {
            setIsCreating(true) // disable the button while the call to the backend is made.
            // call the API here to create one event...
            await axios.post(`${import.meta.env.VITE_SERVER_URL}/events`,body)

            navigate("/events")

        } catch (error) {
            console.log(error)
            //todo proper error handling here
        }
    };

    return (
        <div className="CreateEventPage">
            <h3>Add Event</h3>

            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />

                <button disabled={isCreating} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateEventPage;