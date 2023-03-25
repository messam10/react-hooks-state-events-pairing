import React from "react";

const Likes = (props) => {
    const handleButtonClick = (e) => e.target.name === "+" ? props.setUpVotes(props.upvotes + 1) : props.setDownVotes(props.downvotes + 1);

    return (
        <div>
            <button name="+" onClick={handleButtonClick}>{props.upvotes} 👍</button>
            <button name="-" onClick={handleButtonClick}>{props.downvotes} 👎</button>
        </div>
    );
}

export default Likes;