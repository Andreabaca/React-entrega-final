export async function servicioTOKEN(){

//uri
const URI="https://accounts.spotify.com/api/token"

//datos
const DATO1="grant_type=client_credentials"
const DATO2="client_secret=d49f98b386e44f8ebfc903c9a3435b0d"
const DATO3="client_id=d06467723ddf48d1add747a866c53955"

//peticion
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body: DATO1+"&"+DATO2+"&"+DATO3

    }

//fetch
let respuesta=await fetch(URI,PETICION)
let datos=await respuesta.json()
datos=datos.token_type+' '+datos.access_token;

return datos


}