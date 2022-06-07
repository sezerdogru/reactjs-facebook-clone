import React , {useState, useEffect} from 'react';
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from '../Post/Post'
import './Feed.css'
import db, {collection, query, orderBy,onSnapshot} from "../../firebase"

function Feed() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{ 
    const unsubscribe = onSnapshot(query(collection(db, "posts"),orderBy("timestamp", "desc")), (snapshot) => {
      const posts = [];
      snapshot.forEach((doc) => {
          posts.push({id:doc.id,data:doc.data()});
      });
      setPosts(posts)
      console.log("posts: ", posts );
    });
  },[])
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map(post => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            image={post.data.image}
            username={post.data.username}
            timestamp={post.data.timestamp}
            message={post.data.message}
          />
      ))}

    </div>
  )
}

export default Feed;