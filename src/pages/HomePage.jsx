import { useState } from "react";


function HomePage() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <h1>Home Page</h1>

            <div>
                <label htmlFor="">Search Events!</label>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <p>Searching for: {search}</p>
            </div>

        </div>
    );
}

export default HomePage;