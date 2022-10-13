import './Home.css'

import { SubMenu } from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js';
export function Home(){

    let descripcionBanda="El nirvana es el estado transcendente libre de sufrimiento y de la existencia fenoménica individual; es la experiencia religiosa más identificada con el budismo. La palabra procede de un verbo que significa enfriarse o apagarse, como el final de una vela. La connotación es que sólo en el nirvana están extinguidas las llamas del odio, el apego y la ignorancia. En estado de nirvana se rompe el ciclo de la transmigración, que de otra manera sería eterno. Su naturaleza ha sido muy debatida por el pensamiento occidental, algunos de cuyos investigadores sostienen que implica una total aniquilación aunque otros lo interpretan como beatitud eterna. Ambos puntos de vista son problemáticos en ocasiones, ya que el nirvana es indescriptible y solo puede conocerse desde su experiencia.En el hinduismo se habla de la unión con el uno absoluto (Brahman), por tanto aunque el nirvana apunta a un mismo suceso de paz interior, no se debe considerar exactamente con las mismas consecuencias que en el budismo, ya que de hecho el budismo redefinió el concepto de nirvana según sus propios postulados. Cada una por tanto tiene su propio marco religioso."

    return(
        <>
            <div className="banner">

            </div>

            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">NIRVANA</h1>
                            <p className='text-center'>{descripcionBanda}</p>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <SubMenu></SubMenu>
                <Footer></Footer>
            </div>
        </>
    );

}