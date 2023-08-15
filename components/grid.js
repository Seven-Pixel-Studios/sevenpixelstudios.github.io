import styles from '../styles/Home.module.css';

export default function Grid({ children }){
    return (
        <div className={styles.grid} style={{borderBottom:"1px solid #eaeaea"}}>{children}</div>
    );
}