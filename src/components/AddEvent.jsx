import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";


function AddEvent(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const body = {
            title: title,
            description: description,
            eventId: props.eventId
        }
        console.log(body)

        try {
            // call the API here to create one event...
            // IMPORTANT: the ID of the Event should be part of the Event data
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/events`,body)

            // stay on this page, but reload all the data from the event state by calling again getData
            props.getData()

        }catch (error) {
            console.log(error)
            //todo proper error handling here
        }

    };

    return (
        <Form.Group className="AddEvent">
            <h3>Add New Event</h3>

            <Form onSubmit={handleSubmit}>
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

                <Button variant="success">Add Event</Button>
            </Form>
        </Form.Group>
    );
}

export default AddEvent;