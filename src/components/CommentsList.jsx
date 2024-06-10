import PropTypes from 'prop-types'

export const CommentsList = ({ comments }) => {
  return (
    <>
      <h3 className="sm:text-2xl text-xl font-bold my-6">
        Comentarios :
      </h3>
      {comments.map((comment, index) => (
        <div key={index}>
          <h4 className="text-xl font-bold">{comment.name}</h4>
          <p className="mt-1 mb-4">{comment.text}</p>
          <br />
        </div>
      ))}
    </>
  );
};

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  };