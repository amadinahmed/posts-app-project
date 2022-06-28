import { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment.js';

function Comments() {
	const [comments, setComments] = useState([]);

	return (
		<div>
			<CommentForm />
			<div>
				{comments.map(comment => (
					<Comment />
				))}
			</div>
		</div>
	);
}

export default Comments;
