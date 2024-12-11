import { NavLink } from "react-router-dom";
import css from './Card.module.css'

export default function Card({ person, image, quote, id }) {

    return (
        <>
            <div className={css.card}>
                <div className={css.cardTitle}>
                    <p>{person}</p>
                </div>
                <div className={css.cardBody}>
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <div className={css.cardContent}>
                        <p className="listItem">{quote}</p>
                    </div>
                </div>
                <div className={css.styleBtnRead}>
                    <span>Read more about.. </span><br />
                    <NavLink to={`/person/${id}`} className={css.linkBtn}>{person}</NavLink>
                </div>
            </div>
        </>
    )
}