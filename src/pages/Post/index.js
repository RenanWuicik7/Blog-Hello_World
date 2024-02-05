import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import Markdown from "react-markdown";
import NotFound from "pages/NotFound";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

const Post = () => {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return (
            <NotFound txt="Post" />
        )
    };

    const conteudoPost = post.texto;

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route
                    index
                    element={
                        <PostModelo
                            fotoCapa={`/assets/posts/${post.id}/capa.png`}
                            titulo={post.titulo}
                        >
                            <div className="post-markdown-container">
                                <Markdown>{conteudoPost}</Markdown>

                                <h3>Outros posts que você pode gostar:</h3>
                                <ul className="container-recomendados">
                                    {
                                        postsRecomendados.map(
                                            (post) => (
                                                <li key={post.id}>
                                                    <PostCard post={post} />
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    );
}

export default Post;