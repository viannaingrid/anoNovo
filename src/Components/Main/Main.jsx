import s from '../Main/main.module.scss';
import anoNovo from '../../assets/img-anoNovo.png';

export default function Main() {
    return (
        <main className={s.mainContent}>
        <img src={anoNovo} alt="Imagem ANO NOVO 2025" />
        <div className={s.textos}>
            <p className={s.boasFestas}>Boas Festas!!!</p>
            <p className={s.felicidades}>Felicidades!!!</p>
            <p className={s.mensagem2025}>Em 2025, vamos juntos programar,Com mais código limpo e muito para alcançar!Que o ano novo traga só funções de felicidade,E que a paz seja nossa variável de realidade!Sem bugs, sem falhas, com muito amor,Vamos debugar os problemas com ardor!Que a vida seja sempre o output de alegria,o Vai Na Web te deseja um Ano Novo, que seja pura harmonia!
            </p>
        </div>
    </main>
    )
}