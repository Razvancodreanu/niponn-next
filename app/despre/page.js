import styles from './despre.module.css';

export default function Despre() {
    return (
        <main className={styles.container}>
            <h1 className={styles.titlu}>Despre Niponn General Company</h1>
            <p className={styles.paragraf}>
                Suntem o companie specializată în sudură, confecții metalice și reparații industriale.
                Cu peste 10 ani de experiență, livrăm calitate, seriozitate și soluții personalizate.
            </p>
            <p className={styles.paragraf}>
                Ne mândrim cu echipe bine pregătite, proiecte finalizate la timp și colaborări de durată.
            </p>
        </main>
    );
}


