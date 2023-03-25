import React, { useState } from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
    const [showComments, setShowComments] = useState(true);
    const commentsList = comments.map((comment) => (<Comment key={comment.id} {...comment} />));
    const handleCommentClick = (e) => setShowComments(!showComments);

    return (
        <div>
            <br />
            <button onClick={handleCommentClick}>{showComments ? "Hide" : "Show"} Comments</button>
            <hr />
            {showComments ?
                (
                    <div>
                        <h2>{commentsList.length} Comments</h2>
                        {commentsList}
                    </div>
                )
                : (null)}
        </div>
    );
}

export default CommentsList;