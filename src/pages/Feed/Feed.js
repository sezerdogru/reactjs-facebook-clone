import React from 'react';
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from '../Post/Post'
import './Feed.css'

function Feed  ( )  {
  return (
    <div className="feed"> 
    <StoryReel />
    <MessageSender />
    <Post 
      profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"
      username="adsasad"
      timestamp="sad"
      message="asd"
    />
    <Post 
      profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"
      username="adsasad"
      timestamp="sad"
      message="asd"
    />
    <Post 
      profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"
      username="adsasad"
      timestamp="sad"
      message="asd"
    />
    <Post 
      profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"
      username="adsasad"
      timestamp="sad"
      message="asd"
    />

    </div>
  )
}

export default Feed;