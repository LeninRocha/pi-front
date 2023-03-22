import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../services/api';
import styles from './Perfil.module.scss'
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter,BsInstagram, BsYoutube } from "react-icons/bs";

export function Perfil(){
    const { id } =useParams();
    const [deputado, setDeputado] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{

        async function loadPerfil(){
            const response = await api.get(`/deputados/${id}`)
            setDeputado(response.data.dados);
            setLoading(false)
        }
        loadPerfil()


    }, [ id])
    console.log(deputado)
    if(loading){
        return(
            <div className=''>
                <h1>Carregando seu deputado...</h1>
            </div>
        )
    }
    return(
        <main>
            <div className={styles.wrap}>
                <div className={styles.foto}>
                    <img src={deputado.ultimoStatus.urlFoto} alt={deputado.nomeCivil} />
                </div>
                <div className={styles.infos}>
                    <div className={styles.sociais}>
                        <Link className={styles.sociaisLinks}><BsTwitter size={40} color="#282b57"/></Link>
                        <Link className={styles.sociaisLinks}><BsFacebook size={40} color="#282b57"/></Link>
                        <Link className={styles.sociaisLinks}><BsInstagram size={40} color="#282b57"/></Link>
                        <Link className={styles.sociaisLinks}><BsYoutube size={40} color="#282b57"/></Link>
                    </div>
                    <ul>
                        <li>Data de Nascimento: {deputado.dataNascimento}</li>
                        <li>Nome: {deputado.nomeCivil}</li>
                        <li>Municipio: {deputado.municipioNascimento}</li>
                        <li>Email: {deputado.ultimoStatus.email}</li>
                        <li>Partido: {deputado.ultimoStatus.siglaPartido}</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </main>
    )
    
}