import { Actor } from "./actor.model";
import { Category } from "./category.model";
import { Director } from "./director.model";

export interface Movie{
    _id:string;
    title: string;
    description: string;
    image: string;
    trailer: string;
    year: string;
    movieDate:string;
    price: number;
    theater: string;
    categories: Category[];
    actors: Actor[];
    directors: Director[];
}