import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditEventPage() {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteConfirmationShowing, setIsDeleteConfirmationShowing] = useState(false);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/events/${eventId}`
        );

        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch (error) {
        console.log("Error loading event:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getEvent();
  }, [eventId]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/events/${eventId}`,
        {
          title,
          description,
        }
      );

      navigate(`/events/${eventId}`);
    } catch (error) {
      console.log("Update error:", error);
    }
  };

  const deleteEvent = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/events/${eventId}`
      );

      navigate("/events");
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="EditEventPage">
      <h3>Edit Event</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Event</button>
      </form>

      <button onClick={() => setIsDeleteConfirmationShowing(true)}>
        Delete Event
      </button>

      {isDeleteConfirmationShowing && (
        <div>
          <p>Are you sure?</p>

          <button onClick={deleteEvent}>YES</button>

          <button onClick={() => setIsDeleteConfirmationShowing(false)}>
            NO
          </button>
        </div>
      )}
    </div>
  );
}

export default EditEventPage;