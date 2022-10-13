export function Musicos(){

    //un arreglo de objetos es formato comun al consumir un api
    let musicos=[
        {
            nombre:"Kurt Cobain (Kurt Donald Cobain)",
            rol:"Cantante, Músico y Mompositor",
            url:"https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/Kurt5.webp?alt=media&token=1a2afd31-6a42-4822-98aa-d5d5a5d11a46"
        },
        {
            nombre:"Krist Novoselic (Krist Anthony Novoselić)",
            rol:"Bajista",
            url:"https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/Krist5.jpg?alt=media&token=ea90e5b7-e143-4df3-a0f3-bb136802a75b"
        },
        {
            nombre:"Dave Grohl (David Eric Grohl) ",
            rol:"Vocalista, Guitarrista y Compositor",
            url:"https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/Grohl5.jpg?alt=media&token=152ea2cb-8d45-4112-9564-ae316169aca9"
        }
    ]

    let  conciertosMemorables=[
        {
            fecha:"1993",
            pais:"New York ",
            descripcion:"Ese sonido oscuro que tuvo la banda en esta presentación, la decoración y aquellos temas tan míticos que le marcaron lo hace único. Una de las cosas que jamás voy a olvidar de este unplugged es ese desgarrador grito que manda Kurt en la canción de (where did you last night) un grito que reflejo todo ese dolor que cobain sentía en su interior. Sin duda, una obra de culto.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/nir6.jpg?alt=media&token=ba2ccdd3-8e17-4f8e-99f6-a7f214f4bcc7",
        },

        {
            fecha:"1991",
            pais:"GERMANY ",
            descripcion:"se demostraba el desorden que la banda podia lograr en vivo y toda la energía que cada uno expulsaba",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/2nir.jpg?alt=media&token=051c0a3c-1b2c-424b-a13a-34abedeaf8c4",
        },

        {
            fecha:"2011",
            pais:"Seatle",
            descripcion:"Live at paramount fue un concierto grabado en el teatro Paramount de la ciudad del grunge, Seatle. Lanzado en Blu Ray con alta definición en el año 2011 como un aniversario 20 del disco nevermind. Un gran concierto y como no olvidar cuando Kurt hizo mier... su Strat Al final del tema Endless Nameless",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/3nir.jpg?alt=media&token=48cce216-fb12-47b5-bee6-ab78b3fa7698",
        },

        {
            fecha:"1992",
            pais:"Los Angeles",
            descripcion:"Sin duda alguna uno de los conciertos que más polémica género en la banda, Kurt Cobain escupiendo frente a la multitud el piano de Elton John y MTV tratando de censurar su tema (rape me) ya que realmente nirvana siempre tuvo conflictos con esta empresa con ese tema. Una cosa que ame, fueron los constantes riffs que hacía Kurt parecidos al de rape me como si fuera a tocarlo igualmente",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/1nir.jpg?alt=media&token=97cd9f54-abd0-402b-bd62-6762d4dd6e94",
        },

        {
            fecha:"1993",
            pais:"Seatle",
            descripcion:" Kurt Cobain invitando a gente del público al escenario convirtiendo todo en un caos total. Presentado en Seatle es un concierto que nunca debe faltar si se habla de grunge o de rock",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/5nir.jpg?alt=media&token=4a69488e-4991-4a44-9e78-6926a74400af",
        },
    ]

    // mapeando un arreglo para hacer render

    return(
        <div className="row row-cols-2 row-cols-md-3 g-3 bg-dark">

            {
                musicos.map(function(musico){
                    return(
                        <>
                        <div className="col mx-auto">
                            <div className="card h-100 ">
                                <img src={musico.url}
                                className="img-fluid w-100 h-100" alt="foto"/>
                                <h1 className="text-center">{musico.nombre}</h1>
                                <h3 className="text-center">{musico.rol}</h3>                             
                            </div>            
                        </div>                                                                   
                        </>                    
                                              
                    )
                })
            }

{
                conciertosMemorables.map(function(musico){
                    return(
                        <>
                        <div className="col mx-auto">
                            <div className="card h-100 ">
                                <img src={musico.foto}
                                className="img-fluid w-100 h-100" alt="foto"/>
                                <h1 className="text-center">{musico.fecha}</h1>
                                <h3 className="text-center">{musico.pais}</h3>  
                                <h3 className="text-center">{musico.descripcion}</h3>                           
                            </div>            
                        </div>                                                                   
                        </>                    
                                              
                    )
                })
            }

        </div>
    )
    
}