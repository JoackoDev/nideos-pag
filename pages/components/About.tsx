import type {NextPage} from 'next';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloud, faTachometerAlt, faBalanceScale, faShieldAlt} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'


const About: NextPage = () => {
    const AboutStyled = styled.div`
        margin-top: 480px;
        background-color: #141415;
        .title-about {
            margin-top: 50px;
            color: white;
            text-align: center;
            margin-left: 30px;
            font-family: Dancing Script;
        }

        .p-about {
            text-align: center;
            color: white;
            margin-left: 30px;
            width: 600px;
            margin: 0 auto;
            font-family: Catamaran;
        }

        .container {
            margin-top: 100px;
            display: flex;
            justify-content: space-around;
        }

        .container-about {
            background-color: #1B1C1E;
            border-radius: 10px;
            padding: 10px;
        }

        .icon {
            color: #E9ED09;
            width: 100%;
            margin: 0 auto;
            font-size: 30px;
        }

        .title-about-h1 {
            color: white;
            text-align: center;
            font-size: 25px;
        }

        .p-features {
            color: #6C6C6D;
            width: 300px;
            font-size: 15px;
        }

        .linea {
            border-bottom: 1px solid #E9ED09;
            width: 300px;
            margin: 0 auto;
            margin-top: 50px;
        }

        .linea-2 {
            border-bottom: 1px solid #E9ED09;
            width: 300px;
            margin: 0 auto;
            margin-top: 110px;
        }

        .linea-3 {
            border-bottom: 1px solid #E9ED09;
            width: 300px;
            margin: 0 auto;
            margin-top: 89px;
        }

        @media (max-width: 658px) {

            .p-about {
                text-align: center;
                color: white;
                margin-left: 30px;
                width: 350px;
                margin: 0 auto;
            }
            
            .container {
                display: flex;
                flex-direction: column;
            }

            .container-about {
                margin-top: 20px;
            }
        }
    `

    return (
        <AboutStyled id="nosotros">
            <h1 className="title-about">Que es NideOS?</h1>
            <p className="p-about">NideOS es una versión de Windows que viene pre-ajustada con optimizaciones para FPS y latencia. NideOS minimiza el bloatware desde el primer momento, y no tendrás aplicaciones inútiles que consuman la potencia de tu CPU y reduce la latencia para que puedas obtener ventaja sobre tus oponentes en los juegos.</p>
            <div className="container">
                <div className="container-about">
                    <FontAwesomeIcon className="icon" icon={faCloud}/>
                    <h1 className="title-about-h1">NideOS Version</h1>
                    <p className="p-features">NideOS PRO 20h2 quita muchas más aplicaciones de windows asi llevando al máximo rendimiento teniendo más fotogramas y 0 Inputlag, incluye una configuración más exclusiva puedes seguir usandolo para trabajo como office, edición de video etc. sin problema</p>
                    <div className="linea"></div>
                </div>

                <div className="container-about">
                    <FontAwesomeIcon className="icon" icon={faTachometerAlt}/>
                    <h1 className="title-about-h1">Rendimiento</h1>
                    <p className="p-features">NideOS está diseñado para funcionar extremadamente rápido y garantizar la mayor velocidad de fotogramas en cualquier juego y reducir la latencia.</p>
                    <div className="linea-2"></div>
                </div>
            </div>

            <div className="container">
                <div className="container-about">
                    <FontAwesomeIcon className="icon" icon={faBalanceScale}/>
                    <h1 className="title-about-h1">Low ping</h1>
                    <p className="p-features">Te incluye una optimización personalizado y pre ajustada de tal manera podrás tener menos ping y asi tener la mejor configuración la cual se maneja directamente driver internet dedicado al gaming, Configuración lan,Configuración de router</p>
                    <div className="linea"></div>
                </div>

                <div className="container-about">
                    <FontAwesomeIcon className="icon" icon={faShieldAlt}/>
                    <h1 className="title-about-h1">Seguridad</h1>
                    <p className="p-features">NideOS es una versión donde no te tienes que preocupar por la seguridad de tu sistema, asi eliminando posibles ataques que puedas tener.</p>
                    <div className="linea-3"></div>
                </div>
            </div>
        </AboutStyled>
    )
}

export default About;