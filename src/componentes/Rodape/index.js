import styles from './Rodape.module.css';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div>
                <img 
                    src='/assets/marca_registrada.svg'
                    alt='Imagem de copyright'
                />
                <span>Desenvolvido por Renan C. Wuick;</span>
            </div>
            <br />
            <span>Alguns Direitos Reservados</span>
        </footer>
    );
};