import logoFacebook from '../../assets/logoFacebook.png';
import logoInstagram from '../../assets/logoInstagram.png';
import logoLinkedin from '../../assets/logoLinkedin.png';
import s from '../Footer/footer.module.scss';

export default function Footer() {
    return(
        <section className={s.footerSection}>
            <a href="https://www.instagram.com/" target="_blank"><img src={logoInstagram} alt="Logo do Instagram"/></a>
            <a href="https://www.facebook.com/" target="_blank"><img src={logoFacebook} alt="Logo do Facebook"/></a>
            <a href="https://www.linkedin.com/in/ingrid-vianna/" target="_blank"><img src={logoLinkedin} alt="Logo do Linkedin"/></a>
        </section>
    )
}