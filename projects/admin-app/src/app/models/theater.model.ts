import { Cinema } from "./cinema.model";

export interface Theater{
    theaterNumber: number;
    capacity: number;
    cinema: Cinema;
}