# African Events Germany

## Overview

African Events Germany is a responsive web application that helps users discover, create, and manage African cultural events across Germany. The platform showcases festivals, concerts, food fairs, film screenings, art exhibitions, and community gatherings while providing a simple and user-friendly experience on both desktop and mobile devices.

## Features

* View all available events
* Search events by title
* Filter events by city
* Display upcoming events only
* Save and manage favorite events
* View detailed event information
* Create new events
* Edit existing events
* Delete events
* Mobile-responsive design

## Technologies Used

### Frontend

* React
* React Router DOM
* Axios
* Vite
* CSS3

### Backend

* JSON Server
* REST API

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── EventCard.jsx
│   └── AddEvent.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── EventListPage.jsx
│   ├── EventDetailsPage.jsx
│   ├── CreateEventPage.jsx
│   └── EditEventPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate into the project

```bash
cd my-app-client
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

## Backend Setup

Install JSON Server if necessary:

```bash
npm install -g json-server
```

Run the backend:

```bash
npx json-server db.json --host 0.0.0.0 --port 3000
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_SERVER_URL=http://localhost:3000
```

For production:

```env
VITE_SERVER_URL=https://your-backend-url.onrender.com
```

## API Endpoints

### Get all events

```http
GET /events
```

### Get a single event

```http
GET /events/:id
```

### Create an event

```http
POST /events
```

### Update an event

```http
PUT /events/:id
```

### Delete an event

```http
DELETE /events/:id
```

## Responsive Design

The application is designed to work across:

* Desktop computers
* Tablets
* Mobile phones

The event cards automatically adapt to different screen sizes using CSS Grid and media queries.

## Future Improvements

* User authentication
* Event categories
* Event images
* Dark/Light mode toggle
* Persistent favorites using Local Storage
* Event registration and ticketing
* Event map integration

## Author

Developed by Darlington Okafor as a full-stack React project showcasing CRUD operations, API integration, responsive design, and modern frontend development practices.
