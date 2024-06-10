import { useState, useEffect } from "react";
import { getCommentByPostName } from "../services";

export const useComments = (name, refreshComments) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await getCommentByPostName(name);
      if (!response.error) {
        setComments(response.data.comments);
      } 
    };
    fetchComments();
  }, [name, refreshComments]);

  return comments;
};
