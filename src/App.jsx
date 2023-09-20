import "./App.css"
import Header from "./components/Header"
import BlogForm from "./components/BlogForm"
import BlogPost from "./components/BlogPost"
import { useEffect, useState } from "react"

function App() {
	const [blogPosts, setBlogPosts] = useState(() => JSON.parse(localStorage.getItem("blogs")) || [])

	useEffect(() => {
		localStorage.setItem("blogs", JSON.stringify(blogPosts))
		console.log(blogPosts)
	}, [blogPosts])

	function addBlogPost(newPost) {
		setBlogPosts([...blogPosts, newPost])
	}

	function editPost(id) {
		console.log(id)
	}

	function handleSavePost() {}

	function handleCancelEdit() {}

	function deletePost(id) {
		setBlogPosts(oldBlogPosts => oldBlogPosts.filter(post => post.id !== id))
	}

	function formatDateToString(date) {
		const options = { year: "numeric", month: "long", day: "numeric" }
		return new Date(date).toLocaleDateString(undefined, options)
	}

	const blogPostElements = blogPosts.map(blog => {
		return <BlogPost blog={blog} deletePost={() => deletePost(blog.id)} formatDateToString={formatDateToString} editPost={() => editPost(blog.id)} />
	})

	return (
		<>
			<Header />
			<BlogForm addBlogPost={addBlogPost} />
			<div className="blog-container">{blogPostElements}</div>
		</>
	)
}

export default App
