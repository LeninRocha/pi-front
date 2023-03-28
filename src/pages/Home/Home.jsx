import { useState } from 'react';
import styles from './Home.module.scss'
import { Link } from 'react-router-dom';
export function Home(){

    return(
        <main>
            <div className={styles.wrap}>
                <div className={styles.w100}><div className={styles.logo}></div></div>
                <div className={styles.w50}>
                    
                    <h1 className={styles.title}>
                        AQUI VOCÊ FICA POR<br/>
                        DENTRO DOS<br/>
                        GASTOS E DESPEZAS<br/>
                        DE CADA DEPUTADO
                    </h1>
                    <button className={styles.btnHome}>
                        <Link to="/deputados">entre aqui</Link>
                    </button>
                </div>
                <div className={styles.w50}>
                    <div className={styles.fundo}>

                    </div>
                </div>
            </div>
        </main>
    )
    
}