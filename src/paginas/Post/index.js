import './Post.css'
import styles from './Post.module.css'

import { Route, Routes, useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostModelo from "components/PostModelo"
import ReactMarkdown from 'react-markdown'
import NaoEncontrada from 'paginas/NaoEncontrada'
import PaginaPadrao from 'components/PaginaPadrao'
import PostCard from 'components/PostCard'

export default function Post() {

    const parametros = useParams() // pega os parametros da URL

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id) // ordena do maior para o menor 
        .slice(0, 4) // pega os 4 primeiros

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        FotoCapa={`/assets/posts/${post.id}`}
                        título={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar</h2>
                        <ul className={styles.postsRecomendados}>
                            {postRecomendados.map((post) => {
                                return (
                                    <li key={post.id}>
                                        <PostCard post={post} />
                                    </li>
                                )
                            })}
                        </ul>
                    </PostModelo>
                } />
            </Route>
        </Routes>

    )
}
