interface Range {
    min: number;
    max: number;
}

interface BreedAttributes {
    name: string;
    description: string;
    life: Range;
    male_weight: Range;
    female_weight: Range;
}

export interface Breed {
    id: string;
    type: string;
    attributes: BreedAttributes;
}

export interface BreedResponse {
    data: Breed[];
}

export interface Facts {
    attributes: {
        body: string;
    };
}

export interface FactsResponse {
    data: Facts[];
}
