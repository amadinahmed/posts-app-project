import { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment.js';

function Comments() {
	const [comments, setComments] = useState([]);

	const addComment = (name, text) => {

		const id = Math.floor(Math.random() * 10000) + 1
		setComments([...comments, { 
			key: id, 
			name,  
			text 
		}]);
	}

	return (
		<div>
			<div>
				{comments.map(comment => (
					<Comment {...comment} />
				))}
				<CommentForm onSubmit={addComment} />
			</div>
		</div>
	);
}

export default Comments;
