import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/' >
                    Home
                </MenuLink>
                <MenuLink to='sobre-mim' >
                    About Me
                </MenuLink>
            </nav>
        </header>
    );
};