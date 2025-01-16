import Header from '../src/Components/Header/Header.jsx';
import Footer from '../src/Components/Footer/Footer.jsx';
import Main from '../src/Components/Main/Main.jsx';
import '../src/globalStyle/globalStyle.scss';

export default function app (){
    return(
        <section>
            <Header/>
            <Main/>
            <Footer/>
        </section>
    )
}