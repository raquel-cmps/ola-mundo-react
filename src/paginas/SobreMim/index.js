import styles from "./SobreMim.module.css";

import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
    return (
        <PostModelo FotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={StyleSheet.subtitulo}>
                Olá, meu nome é Raquel Campos, sou desenvolvedora fullstack e apaixonada por tecnologia.
            </h3>
            <img src={'https://github.com/raquel-cmps.png'}
                alt="Foto da Raquel"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oie, tudo bem? Sou desenvolvedora DotNet e ReactJs, e estou sempre em busca de novos conhecimentos e desafios.
            </p>
        </PostModelo>
    )
}