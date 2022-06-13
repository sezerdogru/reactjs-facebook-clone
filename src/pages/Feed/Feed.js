import React from 'react';
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from '../Post'
import '../../styles/Feed.scss' 

function Feed() { 
  const posts = [
    {
      id:1,
      profilePic:"https://avatars.githubusercontent.com/u/10113841?v=4",
      image:"https://media.baamboozle.com/uploads/images/418213/1629292799_265774_url.jpeg",
      username:"Mick Thomson",
      time:"5d",
      message:"Such a great day!"
    }
  ]
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map(post => (
          <Post
            key={post.id}
            profilePic={post.profilePic}
            image={post.image}
            username={post.username}
            time={post.time}
            message={post.message}
          />
      ))}

    </div>
  )
}

export default Feed;