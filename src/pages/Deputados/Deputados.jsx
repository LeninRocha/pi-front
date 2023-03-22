import { useEffect, useState } from 'react';
import styles from './Deputados.module.scss'
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { IoMailOutline, IoPerson, IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

export function Deputados(){
    const [deputados, setDeputados] = useState([])
    const [page, setPage] = useState(1)
    useEffect(()=>{

        async function loadDeputados(){
          const response = await api.get('/deputados', { params: { itens: 20,  pagina: page }})
          setDeputados(response.data.dados)
          
        }
        loadDeputados();
      }, [page])
    return(
        <main>
            <div className={styles.wrap}>
            {deputados.map((deputados) => {
                return(
                  <article key={deputados.id} className={styles.card}>
                    <img src={deputados.urlFoto} alt={deputados.nome} className={styles.img}/>
                    <h3 className={styles.name}> <IoPerson size={14} color="#282b57"/> {deputados.nome}</h3>
                    <a className={styles.mail} href={`mailto:${deputados.email}`}> <IoMailOutline size={14} color="#282b57"/> {deputados.email}</a>
                    
                    <div className={styles.info}>
                        <span>{deputados.siglaUf}</span>
                        <span>{deputados.siglaPartido}</span>
                    </div>
                    <Link to={`/deputado/${deputados.id}`}>Acessar</Link>
                  </article>
                  )
            })}
                <div className={styles.pages}>
                    <button
                    className={styles.btn}
                     onClick={() =>setPage (page > 1 && page - 1 )}>
                        <IoArrowBackSharp size={20} color="#fff"/>
                    </button>
                    <span className={styles.showPage} >{page}</span>
                    <button
                    className={styles.btn} 
                    onClick={(e) =>setPage (page + 1)}>
                        <IoArrowForwardSharp size={20} color="#fff"/>
                    </button>
                </div>
            </div>

        </main>
    )
    
}