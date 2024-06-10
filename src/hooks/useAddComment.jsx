import { useState } from "react";
import { addComment } from "../services";

export const useAddComment = (articleName, commentDetails) => {
  const [status, setStatus] = useState("idle");

  const submitComment = async () => {
    setStatus("loading");
    const comment = {
      name: commentDetails.name,
      text: commentDetails.text,
    };

    const response = await addComment(articleName, comment);
    
    if (!response.error) {
      setStatus("success");
      return response;
    } else {
      console.log(response.e);
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
  };

  return { status, submitComment, reset };
};
