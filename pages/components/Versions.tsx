import type {NextPage} from 'next';
import styled from '@emotion/styled';
import Image from 'next/image'
import img1 from '../../public/img/img.jpg'

const Versions : NextPage = () => {
    const VersionsStyled = styled.div`
        height: 650px;
        margin-top: 200px;
        .title-versions {
            color: white;
            text-align: center;
            font-family: Dancing Script;
            font-size: 35px;
        }

        .container {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            margin-top: 60px;
        }

        .img {
            width: 430px;
        }

        .container-2 {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
        }   

        .button {
            margin-top: 10px;
            padding: 15px;
            border-style: none;
            border-radius: 5px;
            font-weight: bold;
            font-size: 20px;
            background-color: #E9ED09;
        }

        .button:hover {
            background-color: white;
            transition: all 0.5s;
        }

        .button-2 {
            margin-top: 10px;
            padding: 15px;
            border-style: none;
            border-radius: 5px;
            font-weight: bold;
            font-size: 20px;
            background-color: #E9ED09;
        }

        .button-2:hover {
            background-color: white;
            transition: all 0.5s;
        }

        @media (max-width: 320px) {
            .img {
                margin-top: 20px;
            }

            .button {
                display: none;
            }

            .button-2 {
                padding-bottom: 40px;
            }
        }
    `

    return (
        <VersionsStyled id="versiones">
            <h1 className="title-versions">Versiones de NideOS</h1>
            <div className="container">
                <div className="img"><Image src={img1} alt="NideOS Versions"/></div>
                <div className="img"><Image src={img1} alt="NideOS Versions"/></div>
                <div className="img"><Image src={img1} alt="NideOS Versions"/></div>
            </div>

            <div className="container-2">
                <button className="button-2">Comprar</button>
                <button className="button">Comprar</button>
                <button className="button">Comprar</button>
            </div>
        </VersionsStyled>
    )
}

export default Versions;