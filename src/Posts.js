import { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';


function Posts() {
	const [posts, setPosts] = useState([]);

	const addPost = (name, title, text) => {

		const id = Math.floor(Math.random() * 10000) + 1
		setPosts([...posts, { 
			key: id, 
			name, 
			title, 
			text 
		}]);
	}

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


		// {
		// 	id:1,
		// 	name:'bob',
		// 	title:'Some title',
		// 	text:'I like trains',
		// }