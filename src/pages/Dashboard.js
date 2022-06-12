import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar"
import Feed from "./Feed/Feed"
import Widgets from './Widgets'

function Dashboard() {
  return (
    <div>
    	<Header />
	    <div className="app__body">
	      <Sidebar />
	      <Feed />
	      <Widgets />
	    </div>
    </div>
  )
}

export default Dashboard;