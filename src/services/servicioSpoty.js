import { servicioTOKEN} from "./servicioTOKEN.js"
export async function servicioSpoty(){

    const URI="https://api.spotify.com/v1/artists/7okwEbXzyT2VffBmyQBWLz/top-tracks?market=US"

    const TOKEN= await servicioTOKEN()

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos    
}