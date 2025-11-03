import type { BreedResponse, FactsResponse } from "./types.tsx";

const BASE_URL = "https://dogapi.dog/api/v2";

export const fetchBreeds = async (): Promise<BreedResponse> => {
    const res = await fetch(`${BASE_URL}/breeds`);
    const data: BreedResponse = await res.json();
    // console.log(data);
    return data;
};

export const fetchFacts = async (): Promise<FactsResponse> => {
    const res = await fetch(`${BASE_URL}/facts`);
    const data: FactsResponse = await res.json();
    // console.log(data);
    return data;
};
