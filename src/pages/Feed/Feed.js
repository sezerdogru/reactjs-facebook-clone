import React , {useState, useEffect} from 'react';
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from '../Post'
import '../../styles/Feed.scss' 

function Feed() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{ 
    
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