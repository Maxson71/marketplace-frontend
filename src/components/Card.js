import styles from './cardStyle/card.module.scss';

import heart_icon from '../assets/icons/heart_icon.svg';
import heart_fill_icon from '../assets/icons/heart-fill_icon.svg';

import date_icon from '../assets/icons/date_icon.svg';
import location_icon from '../assets/icons/location_icon.svg';
import new_icon from '../assets/icons/new_icon.svg';

import {useState} from "react";

function Tag (props) {
    switch (props.type) {
        case 'date':
            return <div className={styles.date}>
                <img className={styles.icon} src={date_icon} alt=""/>
                {props.info}
            </div>
        case 'location':
            return <div className={styles.location}>
                <img src={location_icon} alt=""/>
                {props.info}
            </div>
        case 'new':
            return <div className={styles.new}>
                <img src={new_icon} alt=""/>
                Нове
            </div>
        default:
            return null
    }
}

const Card = () => {
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    const LikeHandler = () => {
        setLike(!like)
        like? setLikeCount(likeCount-1) : setLikeCount(likeCount+1)
    };

    return (
        <div className={styles.card}>
            <div className={styles.img}>

            </div>
            <div className={styles.info}>
                <div className={styles.main_info}>
                    <div className={styles.title}>Назва товару</div>
                    <div className={styles.price}>Ціна грн./шт.</div>
                </div>
                <div className={styles.like}>
                    <div className={styles.like_icon} onClick={LikeHandler} >
                        <img className={like?styles.liked:styles.unliked} src={like?heart_fill_icon:heart_icon} alt="heart_icon"/>
                    </div>
                    <div className={styles.like_count}>{likeCount}</div>
                </div>
            </div>
            <div className={styles.tags}>
                <Tag type="date" info="01.11.2023"/>
                <Tag type="location" info="м. Дніпро"/>
                <Tag type="new"/>
            </div>
        </div>
    );
};

export default Card;