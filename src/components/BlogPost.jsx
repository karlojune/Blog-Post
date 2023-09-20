import React from "react"

function BlogPost(props) {
	const formattedDate = props.formatDateToString(props.blog.date)
	return (
		<div className="blog-post">
			<h1 className="blog-title">{props.blog.title}</h1>
			<span className="blog-description">
				By {props.blog.author} on {formattedDate}
			</span>
			<p className="blog-content">{props.blog.content}</p>
			<div className="btn-container">
				<button className="edit-btn" onClick={props.editPost}>
					Edit
				</button>
				<button className="delete-btn" onClick={props.deletePost}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default BlogPost
