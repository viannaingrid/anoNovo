import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Paz from '../../Pages/Paz/';
import Alegria from '../../Pages/Alegria';
import Saude from '../../Pages/Saude';
import logoAnoNovo from '../../assets/logoAnoNovo.png';
import s from './Header/header.module.scss';


export default function Header() {
    return (
        <BrowserRouter>
        <header>
            <section>
                <img src={logoAnoNovo} alt="Imagem de um champagne estourando com uma taça cheia e escrito feliz ano novo" />
            </section>
            <nav>
                <ul>
                    <li>
                        <Link className={s.linkHeader} to="/" >Paz</Link>
                    </li>
                    <li>
                        <Link className={s.linkHeader} to="/Alegria" >Alegria</Link>
                    </li>
                    <li>
                        <Link className={s.linkHeader} to="/Saude" >Saúde</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
        <Routes>
            <Route path='/' element={<Paz/>}/>
            <Route path='/Alegria' element={<Alegria/>}/>
            <Route path='/Saude' element={<Saude/>}/>
        </Routes>
        </BrowserRouter>
    )
}
