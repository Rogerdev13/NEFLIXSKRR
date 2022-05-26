import styles from './Search.module.css'
import {FaSistrix} from 'react-icons/fa';

import { useHistory } from 'react-router';
import { useQuery } from '../hooks/useQuery';

export function Search(){

    const query = useQuery();
    const search = query.get("search")
    
    const History = useHistory();

   



    const handleSubmit = (e) =>{
        e.preventDefault();
        History.push(`/?search=${search}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.search}>
                <div className={styles.form} >
                    <input onChange={(e) => {
                        const value = e.target.value;
 
                        History.push("/?search=" + value)
                    }} type="search" className={styles.input} placeholder="Search :" value={search}/>
                    <button type="submit" className={styles.button}><FaSistrix/></button>
                </div>
            </div>
        </form>
    )
}