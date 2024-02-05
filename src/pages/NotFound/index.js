import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NotFound = ({ txt }) => {
    const navegar = useNavigate();

    const [textoTitulo, setTitulo] = useState("Ops! Página não encontrada.");
    const [textoPrincipal1, setTextoPrincipal1] = useState("Tem certeza de que era isso que você estava procurando?");

    useEffect(() => {
        if (txt === "Post") {
            setTitulo("Ops! Post não encontrado.");
            setTextoPrincipal1(<span>O Post Procurado <b>não existe ou está <i>indisponível</i>!</b></span>);
        } else {
            setTitulo("Ops! Página não encontrada.");
            setTextoPrincipal1("Tem certeza de que era isso que você estava procurando?");
        }
    }, [txt]);

    return (
        <>

            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>

                <h1 className={styles.titulo}>
                    {textoTitulo}
                </h1>

                <p className={styles.paragrafo}>
                    {textoPrincipal1}
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                    </BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemGatinhoCoffe}
                    src='/assets/erro_404.png'
                    alt='Imagem de gatinho com um caffé com o texto 404 nele'
                />
                <span className={styles.circleImg}></span>
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    );
}

export default NotFound;