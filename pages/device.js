import styles from '../styles/Home.module.css'

export default function Device(props) {
    return (
        <div className={styles.card}>
        <p>{ props.children }</p>
        </div>
        
    )
}