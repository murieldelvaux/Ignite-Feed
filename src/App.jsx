import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post }from "./Post"

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        < Sidebar />
        <main>
          <Post 
          author='Muriel' 
          content='Olá, tudo bem? Meu nome é Muriel.' 
          />
          <Post 
            author='Maria' 
            content='conteudo muito legal' 
          />
        </main>
      </div>
    </>
  )
}

