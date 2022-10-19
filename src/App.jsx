import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'

const posts =[
  {
    id:1,
    author:{
      avatarUrl:'https://github.com/murieldelvaux.png',
      name: 'Muriel Delvaux Daher',
      role: 'Developer @Femto'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-10-15 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rockeseat'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-10-17 08:00:00')
  },
]

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        < Sidebar />
        <main>
          {
            posts.map((value)=>{
              return(
                <Post
                  key={value.id}
                  author={value.author}
                  content={value.content}
                  publishedAt={value.publishedAt} 
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

