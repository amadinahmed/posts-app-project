import { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import { v4 as uuid } from 'uuid';

function Posts() {
	const [posts, setPosts] = useState([]);

	const addPost = (name, title, text) =>
		setPosts([...posts, { key: uuid(), name, title, text }]);

	return (
		<div>
			<PostForm onSubmit={addPost} />
			<div>
				{posts.map(post => (
					<Post {...post} />
				))}
			</div>
		</div>
	);
}

export default Posts;
