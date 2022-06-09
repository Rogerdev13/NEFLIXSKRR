
import styles from './Spinner.module.css'
export function Spinner(){
    return (
        <div className={styles.container}>
            <div class={styles.ldsellipsis}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}