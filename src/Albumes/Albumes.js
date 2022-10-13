import { servicioSpoty } from "../services/servicioSpoty.js"
import { servicioTOKEN } from "../services/servicioTOKEN.js"
import { useState, useEffect } from "react"
import { Musicos } from "../Musicos/Musicos.js"

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //usando el useEffect
    useEffect(function(){
        servicioSpoty()
        .then(function(respuesta){
            console.log(respuesta)
            setCanciones(respuesta.tracks)
            setCarga(false)          
        })
        console.log(canciones)

    },[])

    if(carga==true){

        return(
            <>
                <h1>Estoy cargando...</h1>
            </>

        )

    }else{

        return(

            <>
                <div className="row row-cols-2 row-cols-md-3 g-3 bg-dark">
                {
                    canciones.map(function(canciones){
                        return(
                            <>
                            <div className="col mx-auto">
                                <div className="card h-100 ">
                                <img src={canciones.album.images[0].url}
                                className="img-fluid w-100 p1 h-100" alt="foto"/>
                                    <audio controls src={canciones.preview_url}></audio>
                                    <h1 className="text-center">{canciones.name}</h1>
                                    <h3 className="text-center">{canciones.tracks}</h3>                             
                                </div>            
                            </div>                                                                   
                            </>                    
                                                  
                        )
                    })
                }

                </div>
                
            </>
        )

    }   

    
}