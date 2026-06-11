import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // used for calling the API

import EventCard from "../components/EventCard"; // used to render each Event

function EventListPage() {

    const [allEvents, setAllEvents] = useState([])
    const [search, setSearch] = useState("");
    const [cityFilter, setCityFilter] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const [showUpcomingOnly, setShowUpcomingOnly] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {

            // call the API here to receive all events...
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/events`)

            setAllEvents(response.data)

            setIsLoading(false); // render the component once the data finished loading

        } catch (error) {
            console.log(error)
            //todo proper error handling here
        }
    };

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id)
                ? prev.filter((f) => f !== id)
                : [...prev, id]
        );
    };

    const now = new Date();

    const filteredEvents = allEvents
        .filter((event) =>
            event.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter((event) =>
            cityFilter
                ? event.location.toLowerCase().includes(cityFilter.toLowerCase())
                : true
        )
        .filter((event) =>
            showFavoritesOnly ? favorites.includes(event.id) : true
        )
        .filter((event) =>
            showUpcomingOnly ? new Date(event.date) >= now : true
        );


    if (isLoading) return <h3>Loading...</h3> //todo proper loading animation here

    return (
        <div className="EventListPage">

            <Link to="/events/create">
                <button>Create Event</button>
            </Link>

            {/* FILTER UI */}
            <div style={{ margin: "10px 0" }}>
                <input
                    placeholder="Search events..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <input
                    placeholder="Filter by city..."
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                />

                <button onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}>
                    {showFavoritesOnly ? "Show All" : "Favorites"}
                </button>

                <button onClick={() => setShowUpcomingOnly(!showUpcomingOnly)}>
                    {showUpcomingOnly ? "All Events" : "Upcoming"}
                </button>
            </div>

            {/* EVENT LIST */}
            {filteredEvents.map((event) => (
                <EventCard
                    key={event.id}
                    event={event}
                    isFavorite={favorites.includes(event.id)}
                    onToggleFavorite={() => toggleFavorite(event.id)}
                />
            ))}
        </div>
    );
}

export default EventListPage;