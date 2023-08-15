import styles from '../styles/Home.module.css';

export default function Grid({ image, title, text }){
    return (
        <div className={styles.card}>
            {image}
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}