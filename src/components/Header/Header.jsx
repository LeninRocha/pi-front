import { useState } from 'react';
import styles from './Header.module.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header(){
    const [name, setName] = useState('');
    const [catagory, setCategory] = useState('deputado');
    function handleSubmit(){
        console.log('salve')
    }
    return(
        <header className={styles.header}>
            <div className={styles.wrap}>
                <a link="/" className={styles.logo}>
                    <h1 className={styles.header}>Deputados</h1>
                </a>
                <nav className={styles.menu}>
                        <Link to={`/deputados`} className={styles.menuItem} href="">Deputados</Link >
                        <Link to="/" className={styles.menuItem} href="">Partidos</Link >
                        <Link  to="/" className={styles.menuItem} href="">Blocos</Link >
                    </nav>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            value={name}
                            placeholder="Buscar"
                            onChange={ (e) => setName(e.target.value)}
                            className={styles.input}
                        />
                        <select value={catagory} onChange={(e) =>setCategory (e.target.value)} className={styles.select}>
                            <option value="deputado">Deputado</option>
                            <option value="Partido">Partido</option>
                        </select>
                        <button 
                            className={styles.button}
                            type="submit"
                            >
                            <AiOutlineSearch
                            size={25} 
                            color='#FFF'
                            />
                        </button>
                    </form>
            </div>

        </header>
    )
    
}