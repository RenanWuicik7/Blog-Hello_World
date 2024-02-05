import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
import BotaoPrincipal from 'componentes/BotaoPrincipal';

export default function PostCard({ post }) {
    return (
        <div className={styles.post} >
            <img 
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt={`Imagem de capa do artigo de ${post.titulo}`}
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <Link to={`/posts/${post.id}`}>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </Link>
        </div>
    );
};