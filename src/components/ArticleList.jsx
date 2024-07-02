import { usePosts } from "../hooks";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const articlesList = usePosts();
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6">Publicaciones</h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <ArticleCard articles={articlesList}/>
        </div>
      </div>
    </div>
  );
};
