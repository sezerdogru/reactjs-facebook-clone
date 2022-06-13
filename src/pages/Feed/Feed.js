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
      image:"https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480",
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