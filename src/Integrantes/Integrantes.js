import './Integrantes.css'
import 'animate.css'
import WOW from 'wowjs'
import { useEffect } from 'react'


export function Integrantes() {

    useEffect(() => {
        new WOW.WOW({
            live:false
        }).init();
    },[])

    return (
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/kurt2.jpg?alt=media&token=c26c99dd-6144-4207-9f0e-2037256d53b7" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center animate__animated animate__backInRight'>
                    <h2>Nombre del artista</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                        Kurt Donald Cobain (Aberdeen, Washington; 20 de febrero de 1967-Seattle, Washington; 5 de abril de 1994) fue un cantante, músico y compositor estadounidense, conocido por haber sido el cantante, guitarrista y principal compositor de la banda grunge Nirvana. Es considerado como un ícono y voz de la generación X. Cobain formó Nirvana con Krist Novoselic en su ciudad natal en 1985 y la estableció como parte de la escena musical de Seattle, con su álbum Bleach (1989) lanzado por el sello discográfico independiente Sub Pop. Después de firmar con el sello DGC Records, la banda logró el éxito de manera sorpresiva con «Smells Like Teen Spirit», primer sencillo de su segundo álbum Nevermind (1991). 
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">                
                <div className='col-12 col-md-4 align-self-center animate__animated animate__backInRight'>
                    <h2>Nombre del artista</h2>
                    <h3>Vocalista</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/kris3.jpg.crdownload?alt=media&token=eae52bcf-a6f5-4969-a3f8-7d94928bdcfd" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                        Krist Novoselić nació el 16 de mayo de 1965 en Compton (California). Sus padres, Kristo y María Novoselić, son inmigrantes yugoslavos: Kristo Novoselić llegó a los Estados Unidos en 1963, y al año siguiente llegó quien sería su esposa. Compraron una casa en Gardena y Kristo Novoselić consiguió trabajo como conductor de un camión de agua. Cuando Krist tenía dos años, en 1967, nació su hermano Robert. Los Novoselić, en este entonces, se mudaban constantemente. En 1973 nació Dina Novoselić, la hermana de Krist y Robert. «Robert y yo éramos una especie de chicos grandes y nos gustaba meternos en problemas.
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tiendasuraabc.appspot.com/o/dave2.jpg?alt=media&token=c6dfc90e-5910-4277-aee4-ede9098f7240" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow"  data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center animate__animated animate__backInRight'>
                    <h2>Nombre del artista</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                        David Eric Grohl (Warren, Ohio, 14 de enero de 1969) es un músico multiinstrumentista estadounidense de rock. Saltó a la fama a comienzos de los años 1990 como batería de la icónica banda de grunge Nirvana. En 1994, tras la muerte de Cobain y el fin de Nirvana, formó otra banda, Foo Fighters, siendo él en un principio el único miembro y más tarde el vocalista, guitarrista y compositor.Grohl empezó su carrera musical en los años 1980 como batería para varias bandas de Washington, DC, de las cuales la más destacada fue Scream. 
                        </div>
                    </div>
                </div>
            </div>        

        </>
    )
}