import { Movie } from "../types/Movie"

export function Movie(this:Movie,id:number, title:string, description:string, text:string){
    this.id=id
    this.title=title
    this.description=description
    this.text=text
}