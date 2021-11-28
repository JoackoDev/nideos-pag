import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const Purchase: NextPage = () => {
    const PurchaseStyled = styled.div`
        padding: 132px;
        .titulo-compra {
            color: white;
            text-align: center;
        }

        .sub-titulo {
            color: white;
            width: 500px;
            line-height: 3;
            margin: 0 auto;
        }

        .container-button {
            display: flex;
            justify-content: space-around;
        }

        .button {
            margin-top: 30px;
            padding: 15px;
            border-style: none;
            border-radius: 5px;
            font-weight: bold;
            font-size: 15px;
            background-color: #E9ED09;
        }

        .button:hover {
            background-color: white;
            transition: all 0.5s;
        }
    `

    return (
        <PurchaseStyled>
            <h1 className="titulo-compra">Pago NideOS</h1>
            <h3 className="sub-titulo">Para poder brindarte los metodos de pago envia un mensaje a insta (Metodos de pago para el NideOS y tu pais) Y ahi recibieras el mejor metodo </h3>
            <div className="container-button">
                <a href="https://www.instagram.com/nide.tv/" target="_blank"><button className="button">Mas informacion</button></a>
            </div>
        </PurchaseStyled>
    )
}

export default Purchase;