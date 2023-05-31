import { useEffect, useState } from 'react';
import api from '../../services/api';
import styles from './Jogo.module.scss'
export function  Jogo() {
    const [deputados, setDeputados] = useState([])
    const [cards, setCards] = useState([])
    const [load, setLoad] = useState(false)
    useEffect(()=>{

        async function loadDeputados(){
          const response = await api.get('/deputados')
          selectRandom(response.data.dados)
        }
        loadDeputados();
        const selectRandom = (resultado) => {
            const Results = resultado.sort(() => 0.5 - Math.random());
            const selected = Results.slice(0, 5);
            //duplicar o array
            const arrayConcat = selected.concat(selected)

            //array aleatorio

            const randomComparator = () => Math.random() - 0.5;
            const newArray = arrayConcat.sort(randomComparator);
            setCards(newArray);
          }
        setLoad(true)
      }, [])

      if(!load){
        return(
            <div className=''>
                <h1>Carregando seu deputado...</h1>
            </div>
        )
      }
      console.log("cards", cards)
    return (
        <div className={styles.wrapGame}>
            {cards.map((cards, i) => {
                return(
                  <article key={i} className={styles.cardGame}>
                    <img src={cards.urlFoto} alt={deputados.nome} className={styles.imgGame}/>
                  </article>
                  )
            })}
      </div>
    )
}
