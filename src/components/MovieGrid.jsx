import styles from './MovieGrid.module.css'
import {Spinner} from './Spinner'
import {MovieCard} from './MovieCard'
import { useEffect , useState } from 'react'
import { getFetch } from '../functions/fetch';
import {Empty} from './Empty'

import InfiniteScroll from 'react-infinite-scroll-component';

import React from 'react';



export function MovieGrid({search}){

   


    const [movies , setMovies] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [page , setPage] = useState(1)
    const [hasMore , setHasMore]  = useState(true)
    
  
    useEffect(()=>{
        const urlImg = search ? "/search/movie?query=" + search + "&page=" + page : "/discover/movie?page=" + page;
        
        getFetch(urlImg).then(data => {
            setHasMore(data.page < data.total_pages)
            setMovies(prevMovies => prevMovies.concat(data.results));
            setIsLoading(false)
        })

    } , [search , page]);

    if (!isLoading && movies.length === 0) {
        return <Empty />;
    }

  
    
    return(
        <InfiniteScroll loader={<Spinner></Spinner>} hasMore={hasMore} dataLength={movies.length} next={() => setPage((prevPage) => prevPage + 1)}>
               <div className={styles.grid}>
            {
                movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie}></MovieCard> 
                ))
            }
        </div>
        </InfiniteScroll>
    )
}