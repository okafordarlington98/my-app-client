import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import EventListPage from "./pages/EventListPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import CreateEventPage from "./pages/CreateEventPage";
import EditEventPage from "./pages/EditEventPage";

import './App.css';

function App() {

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/events" element={<EventListPage />} />
        <Route path="/events/:eventId" element={<EventDetailsPage />} />

        <Route path="/events/create" element={<CreateEventPage />} />
        <Route path="/events/edit/:eventId" element={<EditEventPage />} />

        {/* //! error handling routes should be here */}

      </Routes>

    </div>
  )
}

export default App
