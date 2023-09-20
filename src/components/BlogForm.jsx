import React, { useState } from "react"
import { nanoid } from "nanoid"

function BlogForm(props) {
	const formData = {
		id: nanoid(),
		title: "",
		author: "",
		date: "",
		content: "",
		isEditing: false,
	}
	const [blogFormData, setBlogFormData] = useState(formData)

	function handleChange(e) {
		const { name, value } = e.target
		setBlogFormData({ ...blogFormData, [name]: value })
	}

	function handleSubmit(e) {
		e.preventDefault()
		props.addBlogPost(blogFormData)
		setBlogFormData(formData)
	}

	return (
		<>
			<div className="main-container">
				<form className="form" onSubmit={handleSubmit}>
					<label htmlFor="title">Title:</label>
					<input type="text" id="title" name="title" placeholder="title" value={blogFormData.title} onChange={handleChange} required />

					<label htmlFor="author">Author:</label>
					<input type="text" id="author" name="author" placeholder="author" value={blogFormData.author} onChange={handleChange} required />

					<label htmlFor="date">Date:</label>
					<input type="date" id="date" name="date" placeholder="date" value={blogFormData.date} onChange={handleChange} required />

					<label htmlFor="content">Content:</label>
					<textarea id="content" name="content" placeholder="content" value={blogFormData.content} onChange={handleChange} required />

					<button className="submit-btn">Submit</button>
				</form>
			</div>
			{/* <div className="blog-container">{blogPostElements}</div> */}
		</>
	)
}

export default BlogForm
