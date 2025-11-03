import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import { fetchBreeds, fetchFacts } from "./api/dogApi";
import type { Breed, Facts } from "./api/types";

function App() {
    const [breed, setBreed] = useState<Breed | null>(null);
    const [fact, setFact] = useState<Facts | null>(null);

    const getNewCard = async () => {
        const BreedResponse = await fetchBreeds();
        const randomIndex = Math.floor(
            Math.random() * BreedResponse.data.length
        );

        const randomBreed = BreedResponse.data[randomIndex];
        //   console.log(randomBreed);
        //   console.log(BreedResponse);

        console.log(BreedResponse.data);

        const FactResponse = await fetchFacts();
        const randomFact = FactResponse.data[0];

        setBreed(randomBreed);
        setFact(randomFact);

        //   console.log(breed);
        //   console.log(fact);
    };

    return (
        <div>
            <button onClick={getNewCard}>Get New Dog</button>
            {breed && fact && <Card breed={breed} facts={fact} />}
        </div>
    );
}

export default App;
