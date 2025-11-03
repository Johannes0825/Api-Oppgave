import type { Breed } from "../api/types";
import type { Facts } from "../api/types";

interface CardProps {
    breed: Breed;
    facts: Facts;
}

export default function Card({ breed, facts }: CardProps) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "1rem",
                margin: "1rem",
            }}
        >
            <h2>{breed.attributes.name}</h2>
            <p>{breed.attributes.description}</p>
            <p>
                Life span: {breed.attributes.life.min} -{" "}
                {breed.attributes.life.max} years
            </p>
            <p>
                Male weight: {breed.attributes.male_weight.min} -{" "}
                {breed.attributes.male_weight.max} kg
            </p>
            <p>
                Female weight: {breed.attributes.female_weight.min} -{" "}
                {breed.attributes.female_weight.max} kg
            </p>

            {facts && (
                <p style={{ color: "lime" }}>
                    Funfact: {facts.attributes.body}
                </p>
            )}
        </div>
    );
}
