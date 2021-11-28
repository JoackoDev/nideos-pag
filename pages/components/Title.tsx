import type {NextPage} from 'next';
import styled from '@emotion/styled';
import Image from 'next/image';
import Logo from '../../public/img/NideOS-V3.webp'
import Link from 'next/link'

const Title: NextPage = () => {
    const TitleStyled = styled.div`
        color: white;
        .title {
            text-align: center;
            margin-top: 150px;
        }
        
        .p-title {
            text-align: center;
            font-size: 20px;
            font-family: Catamaran;
        }

        form {
            display: flex;
            justify-content: center;
            align-items: center;
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
        <TitleStyled>
            <div>
                <h1 className="title">Introducing NideOS</h1>
                <p className="p-title">La mejor opcion para tu PC</p>
                <form action="#">
                <Link href="/compra" passHref><button className="button">Mas informacion</button></Link>
                </form>
            </div>
        </TitleStyled>
    )
}

export default Title;