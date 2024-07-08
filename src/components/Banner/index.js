import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'


export default function Banner() {
    const minhaFoto = 'https://github.com/raquel-cmps.png'
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo</h1>
                <p className={styles.paragrafo}>Bem vindo ao meu espaço pessoal! Eu sou Raquel Campos</p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-label={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto de Raquel Campos'
                />
            </div>
        </div>
    )
}