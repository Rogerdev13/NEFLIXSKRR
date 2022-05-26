
import styles from './MovieDetails.module.css'
import { useParams } from 'react-router'
import { getFetch } from '../functions/fetch';
import { useState , useEffect } from 'react';
import { Spinner } from '../components/Spinner';
import { getImageUrl } from '../functions/getImageUrl';



export function MovieDetails(){
    const {movieId} = useParams();
    const [movie , setMovie] = useState(null);
    const [isLoading , setIsLoading] = useState(true)

    useEffect(()=>{

        getFetch("/movie/" + movieId).then(data =>{
            setMovie(data);
            setIsLoading(false)
        })
    } , [movieId])
    if(isLoading){
        return <Spinner></Spinner>
    }

    if(!movie){
        return null
    }

    return (
        <div className={styles.card}>
            <img className={styles.img} src={getImageUrl(movie.poster_path , 300)} alt={movie.title}  />
            <div className={styles.texts}>
                <h1 className={styles.title}>{movie.title}</h1>
                <p className={styles.paragraph}><span className={styles.paragraphespecial}>Overview:</span> {movie.overview}</p>
                <p className={styles.paragraph}><span className={styles.paragraphespecial}>Genres:</span> {
                    movie.genres.map(genre => genre.name).join(' , ')
                }</p>
            </div>
        </div>
    )
}