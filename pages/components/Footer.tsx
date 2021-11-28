import type {NextPage} from 'next';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer: NextPage = () => {
    const FooterStyled = styled.div`
        margin-top: 150px;
        background-color: #141415;

        .icons-footer {
            color: white;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
            padding: 30px;
            font-size: 35px;
        }

        .icons:hover {
            transform: scale(1.3);
            transition: all 0.3s;
            color: #ffc107;
        }
    `
    return (
        <FooterStyled>
            <div className="icons-footer">
                <div className="icons"><a href="https://www.instagram.com/nide.tv/" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram}/></a></div>
                <div className="icons"><a href="https://discord.com/invite/xPWE9muMWe" target="_blank"><FontAwesomeIcon className="icon" icon={faDiscord}/></a></div>
                <div className="icons"><a href="https://twitter.com/nidefe19?lang=es" target="_blank"><FontAwesomeIcon className="icon" icon={faTwitter}/></a></div>
            </div>
        </FooterStyled>
    )
}

export default Footer;