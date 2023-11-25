import {Link} from "react-router-dom";

import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

import styles from './footerStyle/footer.module.scss';

import logo from "../assets/img/logo.svg";


const Footer = () => {
    return (
        <footer className={styles.footer_wrapper}>
            <div className={`${styles.footer} border`}>
                <Link to="" className="logo">
                    <img src={logo} alt="logo" className={styles.logo}/>
                </Link>
                <div className={styles.footer__content}>
                    <Link to="" >
                        Допомога та зворотній зв’язок
                    </Link>
                    <Link to="" >
                        Політика конфіденційності
                    </Link>
                </div>
                <div className={styles.footer__contacts}>
                    <p>Контакти:</p>
                    <a href="mailto:support@vse_market.ua" className={styles.mail}>support@vse_market.ua</a>
                    <div className={styles.contacts__social}>
                        <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                            <IoLogoFacebook size={40} className={styles.social_icon}/>
                        </a>
                        <a target="_blank" href="https://www.instagram.com" rel="noreferrer">
                            <RiInstagramFill size={40} className={styles.social_icon}/>
                        </a>
                    </div>
                </div>
                <div className={styles.footer__copyright}>
                    <p>Всі права захищені</p>
                    <p className={styles.copyright}>© 2023 ВСЕ MARKET</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer