export interface GameFilter {
    name: string;
    minPlayingTime: number;
    maxPlayingTime: number;
    minAge: number;
    rate: number;
    minNumberOfPlayers: number;
    maxNumberOfPlayers: number;
    publisher: string;
}