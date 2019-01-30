import { of, Observable } from "rxjs";
import { Game } from "../models/game";
const gameMockArray = [
    {
        id: '234',
        name: 'testName1'
    },
    {
        id: '567',
        name: 'testName2'
    }
] as Game[];
export default gameMockArray;

export class HttpClientMock {
    get(): Observable<Game[]> { 
        return of(gameMockArray);
    }
}