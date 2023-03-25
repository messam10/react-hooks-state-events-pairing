import { useState } from "react";
import video from "../data/video.js";
import Video from "../components/Video";
import Likes from "../components/Likes";
import CommentsList from "../components/CommentsList";

function App() {
  console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownVotes] = useState(video.downvotes);

  return (
    <div className="App">
      <Video
        title={video.title}
        embedUrl={video.embedUrl}
        views={video.views}
        createdAt={video.createdAt}
      />
      <Likes
        upvotes={upvotes}
        setUpVotes={setUpvotes}
        downvotes={downvotes}
        setDownVotes={setDownVotes}
      />
      <CommentsList comments={video.comments} />
    </div>
  );
}

export default App;
