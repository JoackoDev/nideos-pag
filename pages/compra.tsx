import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import compra1 from '../public/img/compra-1.webp'
import compra2 from '../public/img/compra-2.webp'
import compra3 from '../public/img/compra-3.webp'

const Compra: NextPage = () => {
    const CompraStyled = styled.div`
        .title-compra {
            color: white;
            text-align: center;
            padding: 79px;
        }
        .container {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            padding: 50px;
        }

        .img-compra {
            box-shadow: 0px 0px 15px 0px #ffff;
        }

        form {
            display: flex;
            justify-content: space-around;
        }

        .button {
            margin-top: 10px;
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
        <CompraStyled>
            <h1 className="title-compra">Nuestras Versiones</h1>
            <div className="container">
                <div className="img-compra"><Image src={compra1} alt="Compra"></Image></div>
                <div className="img-compra"><Image src={compra2} alt="Compra"></Image></div>
                <div className="img-compra"><Image src={compra3} alt="Compra"></Image></div>
            </div>

            <form action="#">
                <Link href="/purchase" passHref><button className="button">Mas informacion</button></Link>
                <Link href="/purchase" passHref><button className="button">Mas informacion</button></Link>
                <Link href="/purchase" passHref><button className="button">Mas informacion</button></Link>
            </form>
        </CompraStyled>
    )
}

export default Compra;