import { useState } from 'react';
import styles from './Header.module.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header(){
    const [name, setName] = useState('');
    const [catagory, setCategory] = useState('deputado');
    function handleSubmit(e){
        e.preventDefault()
        console.log('salve')
    }
    return(
        <header className={styles.header}>
            <div className={styles.wrap}>
                <Link to="/" className={styles.logo}>
                    <h1 className={styles.header}>Deputados</h1>
                </Link>
                <nav className={styles.menu}>
                        <Link to={`/deputados`} className={styles.menuItem} href="">Deputados</Link >
                        <Link to="/" className={styles.menuItem} href="">Comparar Deputados</Link >
                    </nav>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            value={name}
                            placeholder="Buscar"
                            onChange={ (e) => setName(e.target.value)}
                            className={styles.input}
                        />
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