import styles from './Banner.module.css';

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hello, World
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Renan C. Wuicik, monitor do fórum da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src='/assets/circulo_colorido.png'
                    alt='Circulo Colorido'
                    aria-hidden={true}
                />
                <img 
                    className={styles.minhaFoto} 
                    src='/assets/minha-foto.png'
                    alt='Foto em estilo anime represantativa do dono do blog sorrindo e acenando em fundo e paleta de cores neutros'
                />
            </div>
        </section>
    );
};