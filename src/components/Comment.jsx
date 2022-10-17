import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/87376098?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Muriel Delvaux</strong>
                            <time title="11 de Maio as 8:13h" dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>2</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}