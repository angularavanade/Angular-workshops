export interface Game {

    id: string;
    name: string;
    artist: string;
    designer: string;
    imageUrl: string;
    maxNumberOfPlayers: number;
    maxPlayingTime: number;
    minAge: number;
    minNumberOfPlayers: number;
    minPlayingTime: number;
    publisher: string;
    rate: number;
    year: number;
}