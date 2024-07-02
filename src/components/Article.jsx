import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import { ArticleCard } from "./ArticleCard";
import { CommentsList } from "./CommentsList";
import { AddCommentForm } from "./AddCommentForm";
import { usePostByName, usePosts, useComments } from "../hooks";
import { useState } from "react";
import { BounceLoader } from "react-spinners";


export const Article = () => {
  const { name } = useParams();
  const { post, isFetching } = usePostByName(name);
  const allArticles = usePosts();
  const [refreshComments, setRefreshComments] = useState(false);
  const comments = useComments(name, refreshComments);

  if (isFetching) return <BounceLoader />;
  if (!post) return <NotFound />;

  const otherArticles = allArticles.filter((post) => post.name !== name);

  const handleCommentAdded = () => {
    setRefreshComments(!refreshComments);
  };

  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6">{post.title}</h1>
      <img
        src={post.thumbnail}
        alt="Imagen de bienvenida"
        className="w-full h-64 md:h-72 lg:h-80 xl:h-96 mb-6"
      />
      {post.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      {comments && <CommentsList comments={comments} />}
      <AddCommentForm articleName={name} onCommentAdded={handleCommentAdded} />
      <h1 className="sm:text-2xl text-xl font-bold my-4">
        Otras publicaciones
      </h1>
      <div className="flex flex-wrap -m-4">
        <ArticleCard articles={otherArticles} />
      </div>
    </>
  );
};
