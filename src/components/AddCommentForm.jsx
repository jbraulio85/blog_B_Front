import { useState } from "react";
import { useAddComment } from "../hooks";
import PropTypes from "prop-types";

export const AddCommentForm = ({ articleName, onCommentAdded }) => {
  const [formState, setFormState] = useState({
    name: "",
    text: "",
  });

  const { submitComment, reset } = useAddComment(articleName, formState);

  const handleInputValueChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await submitComment();
    if(!response.error){
      reset();
      setFormState({name: "", text:""})
      onCommentAdded();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow rounded px-10 pt-8 pb-8 mb-4"
    >
      <h3 className="text-xl font-bold mb-4">Agrega un comentario</h3>
      <label className="block text-sm font-bold mb-2">Nombre :</label>
      <input
        name="name"
        type="text"
        value={formState.name}
        onChange={handleInputValueChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-6 leading-tight focus:outline-none focus:shadow-outline"
      />
      <label className="block text-sm font-bold mb-2">Comentario :</label>
      <textarea
        name="text"
        rows="4"
        cols="50"
        value={formState.text}
        onChange={handleInputValueChange}
        className="shadow appearance-none border rounded w-full py-2 mb-6 px-3 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rouded focus:outline-none focus:shadow-outline mx-auto block"
      >
        Agregar
      </button>
    </form>
  );
};

AddCommentForm.propTypes = {
  articleName: PropTypes.string.isRequired,
  onCommentAdded: PropTypes.func.isRequired,
};
