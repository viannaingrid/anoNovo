import Header from '../src/Components/Header/Header.jsx';
import '../src/globalStyle/globalStyle.scss';
import s from '../src/app.module.scss';
import Footer from '../src/Components/Footer/Footer.jsx';
import Main from '../src/Components/Main/Main.jsx';

export default function app (){
    return(
        <section className={s.content}>
            <Header/>
            <Main/>
            <Footer/>
        </section>
    )
}