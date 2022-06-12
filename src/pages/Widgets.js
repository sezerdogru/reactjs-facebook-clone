import React from 'react';
import '../styles/Widgets.scss'

function Widgets() {
	return (
		<div className="widgets"> 
			<iframe
				src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&width=340&show_text=false&height=200&appId"
				width="100%"
				height="100%"
				style={{ border: "none", overflow: "hidden" }}
				scrolling="no"
				title="sd"
				frameBorder="0" 
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
				allowFullScreen="true">
			</iframe>



		</div>
	)
}

export default Widgets;