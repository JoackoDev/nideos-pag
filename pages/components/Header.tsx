import type {NextPage} from 'next';
import styled from '@emotion/styled';
import Link from 'next/link'

const Header: NextPage = () => {
    const HeaderStyled = styled.div`
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      padding-left: 30px;
      padding-right: 30px;
      top: 0px;
      width: 100%;
      transition: 300ms all;
      .logo {
        color: white;
        margin: 40px;
      }

      .nav {
        color: white;
        
        ul {
          display: flex;
          flex-flow: row wrap;
          li {
            list-style: none;
            display: block;
            margin: 30px;
            text-align: center;
            opacity: 0.8;
            transition: 300ms all;
            font-family: Catamaran;
            .link * {
                font-size: 15px;
                font-weight: bold;
            }
            .bar {
              background-color: white;
              width: 0px;
              height: 2px;
              border-radius: 20px;
              transition: 300ms all;
            }
          }
          li:hover {
            opacity: 1;
            .bar {
              width: 100%;
            }
          }
         }
      }
      .menu {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 40px;
        color: white;
        font-weight: bold;
        display: none;
        transition: 300ms all;
      }
      @media (max-width: 924px) {
        flex-flow: column wrap;
        align-items: center;
        .divLogo {
          width: 100%; 
          flex-flow: row wrap;
          justify-content: center;
          text-align: center;
        }
      }


      @media (max-width: 629px) {
        height: 100px;
        overflow: hidden;
        .menu {
          display: block;
        }
        .nav {
          width: 350px;
        }
      }
      @media (max-width: 455px) {
        .nav {
          width: 200px;
          ul {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            margin: 0px;
            padding: 0px;
          }
        }
      }
      @media (max-width: 352px) {
        .logo {
          font-size: 25px;
          .barMaquina {
            animation: none;
            border: none;
          }
        }
      }
    `

    const clickMenu = () => {
      const header: HTMLElement|null = document.querySelector('.header')
      const menu: HTMLElement|null = document.querySelector('.menu')
      if (header && menu) {
        if (header.style.height === 'auto') {
          header.style.height = '100px'
          menu.style.transform = 'rotateZ(0deg)'
        } else {
          header.style.height = 'auto'
          menu.style.transform = 'rotateZ(-90deg)'
        }
      }
    }

    return (
        <HeaderStyled className='header'>
            
            <div className='divLogo'>
                <h1 className="logo">
                    <Link href="/" passHref>NideOS</Link>
                </h1>
            </div>

            <div className="nav">
                <ul>
                    <li>
                      <div className="link">
                        <a href="#">Inicio</a>
                      </div>
                      <div className="bar"></div>
                    </li>
                    <li>
                      <div className="link">
                        <a href="#nosotros">Nosotros</a>
                      </div>
                      <div className="bar"></div>
                    </li>
                    <li>
                      <div className="link">
                        <a href="#versiones">Versiones</a>
                      </div>
                      <div className="bar"></div>
                    </li>
                    <li>
                        <div className="link">
                          <a href="https://www.instagram.com/nide.tv/" target="_blank" rel="noreferrer">Contacto</a>
                        </div>
                        <div className="bar"></div>
                    </li>
                </ul>
            </div>
            <div className="menu" onClick={clickMenu}>
              {'<'}
            </div>

        </HeaderStyled>
    )
}

export default Header;