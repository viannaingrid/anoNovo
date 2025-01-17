import logoAnoNovo from '../../assets/logoAnoNovo.png';
import s from './header.module.scss';


export default function Header() {
    return (
        <header>
            <section>
                <img className={s.logo} src={logoAnoNovo} alt="Imagem de um champagne estourando com uma taça cheia e escrito feliz ano novo" />
            </section>
            <nav>
                <ul>
                    <li>
                        <a className={s.linkHeader}  >Paz</a>
                    </li>
                    <li>
                        <a className={s.linkHeader}  >Saúde</a>
                    </li>
                    <li>
                        <a className={s.linkHeader}  >Alegria</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
