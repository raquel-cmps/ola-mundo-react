import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {

    const localizacao = useLocation(); // cookie que armazena a localização da página


    return (
        <Link className={`${styles.link} 
                    ${localizacao.pathname === to ? styles.linkDestacado : ''} `} to={to}>
            {children}
        </Link>
    )
}