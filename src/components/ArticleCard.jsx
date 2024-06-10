import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

export const ArticleCard = ({articles}) => {
  return (
    <>
        {articles.map((article, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Link to={`/posts/${article.name}`}>
                  <img
                    className="lg:h-48 md:h36 w-full object-cover object-center"
                    src={article.thumbnail}
                    alt="blog"
                  />
                </Link>
                <div className="p-6">
                  <Link key={index} to={`/article/${article.name}`}>
                    <h3 className="text-lg font-medium mb-3">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="leading-realaxed mb-3">
                    {article.content[0].substring(0, 110)}...
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      to={`/posts/${article.name}`}
                    >
                      Aprender más
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  )
}

ArticleCard.propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  };