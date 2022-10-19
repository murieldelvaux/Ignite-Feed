import { format , formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] =useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true, /* adiciona o prefixo "há" */
    })

    //delete comment
    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('') //preciso fazer isso para não ficar acusando erro
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Este campo é obrigatório!!!')
    }

    function handleCreateNewComment(event){
        event.preventDefault();
        const newCommentText = event.target.comment.value
        
        setComments([...comments,newCommentText]);
        setNewCommentText('')
    }

    const isNewCommentEmpty = newCommentText.length===0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line=>{
                        if(line.type ==='paragraph'){
                            return(
                                <p key={line.content}>{line.content}</p>
                            )
                        }else if(line.type ==='link'){
                            return(
                                <p key={line.content}><a>{line.content}</a></p>
                            )
                        }
                    })
                }
                <p>
                    <a>#novoprojeto</a>{' '}
                    <a>#nlw</a>{' '}
                    <a>#rocketseat</a>
                </p>
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button 
                        type='submit'
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment =>{
                        return(
                            <Comment 
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment}

                            />
                        )
                    })
                }
            </div>
        </article>
    )    
}