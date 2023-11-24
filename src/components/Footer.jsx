import {Link} from "react-router-dom";
import styles from './styles/Footer.module.css';

import logo from "../assets/img/logo.svg";
import icon_facebook from "../assets/icon/icon-facebook.svg";
import icon_instagram from "../assets/icon/icon-instagram.svg";

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
                            <img src={icon_facebook} alt="Facebook"/>
                        </a>
                        <a target="_blank" href="https://www.instagram.com" rel="noreferrer">
                            <img src={icon_instagram} alt="Instagram"/>
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