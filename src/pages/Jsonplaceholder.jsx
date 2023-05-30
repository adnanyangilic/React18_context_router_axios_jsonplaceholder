import React, { useState, useEffect } from 'react';
import ".././css/Jsonplaceholder.css"
import axios from 'axios';
import { Routes, Route, Outlet, Link } from "react-router-dom";
const client = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

const Jsonplaceholder = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [posts, setPosts] = useState([]);

	// GET with Axios
	useEffect(() => {
		const fetchPost = async () => {
			try {
				let response = await client.get('?_limit=10');
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, []);

	// DELETE with Axios
	const deletePost = async (id) => {
		try {
			await client.delete(`${id}`);
			setPosts(
				posts.filter((post) => {
					return post.id !== id;
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	// handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		addPosts(title, body);
	};

	// POST with Axios
	const addPosts = async (title, body) => {
		try {
			let response = await client.post('', {
				title: title,
				body: body,
			});
			setPosts([response.data, ...posts]);
			setTitle('');
			setBody('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
	<div>
		<nav className="topabsolute navbar navbar-expand-lg navbar-light bg-light">
		  <ul className="navbar-nav mr-auto linkmargin">
			<li className="nav-item">
			  <Link to="/">Home</Link>
			</li>
			<li className="nav-item">
			  <Link to="/about">About</Link>
			</li>
			<li className="nav-item">
			  <Link to="/services">Services</Link>
			</li>
			<li className="nav-item">
			  <Link to="/contact">Contact</Link>
			</li>
			<li className="nav-item">
			  <Link to="/jsonplaceholder">Jsonplaceholder</Link>
			</li>
		  </ul>
		  <form className="form-inline my-2 my-lg-0">
			<table className="float-right">
			  <tbody>
				<tr>
				  <td><input className="nav-item form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /></td>
				  <td><button className="nav-item btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></td>
				</tr>
			  </tbody>
			</table>
		  </form>
		</nav>
        <br/> <br/>
		
  
		<Outlet />
		</div>
		<div className="app">
			<nav>
				<h1>jsonplaceholder.typicode.com/posts</h1>
			</nav>
			<div className="add-post-container">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="form-control"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						name=""
						className="form-control"
						id=""
						cols="10"
						rows="8"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					></textarea>
					<button type="submit">Add Post</button>
				</form>
			</div>
			<div className="posts-container">
				<h2>All Posts</h2>
				{posts.map((post) => {
					return (
						<div className="post-card" key={post.id}>
							<h2 className="post-title">{post.title}</h2>
							<p className="post-body">{post.body}</p>
							<div className="button">
								<div className="delete-btn" onClick={() => deletePost(post.id)}>
									Delete
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
		</div>
	);
};

export default Jsonplaceholder;
