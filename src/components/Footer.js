import {Link} from "react-router-dom";

import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

import styles from './footerStyle/footer.module.scss';

import logo from "../assets/images/logo.svg";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.block} border`}>
                <Link to="">
                    <img src={logo} alt="logo" className={styles.logo}/>
                </Link>
                <div className={styles.content}>
                    <Link to="" >
                        Допомога та зворотній зв’язок
                    </Link>
                    <Link to="" >
                        Політика конфіденційності
                    </Link>
                </div>
                <div className={styles.contacts}>
                    <p>Контакти:</p>
                    <a href="mailto:support@vse_market.ua" className={styles.mail}>support@vse_market.ua</a>
                    <div className={styles.social}>
                        <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                            <IoLogoFacebook size={40} className={styles.social_icon}/>
                        </a>
                        <a target="_blank" href="https://www.instagram.com" rel="noreferrer">
                            <RiInstagramFill size={40} className={styles.social_icon}/>
                        </a>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>Всі права захищені</p>
                    <p className={styles.copyright}>© 2023 ВСЕ MARKET</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer