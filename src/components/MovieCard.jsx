import { Link } from "react-router-dom";
import styles from './MovieCard.module.css'
import {getImageUrl} from '../functions/getImageUrl'


export function MovieCard({movie}){
    const  urlImg= getImageUrl(movie.poster_path , 300);
    return(
        <div className={styles.card}>
        <div className={styles.thumb}>
            <Link to={`/movies/${movie.id}`}><img className={styles.img} src={urlImg} alt={movie.title}  width={230}
            height={425} /></Link>
        </div>
        <p className={styles.title}>{movie.title}</p>
        </div>
    )
}