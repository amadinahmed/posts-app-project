import { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment.js';

function Comments() {
	const [comments, setComments] = useState([]);

	return (
		<div>
			<CommentForm />
			<div>
				{comments.map(() => (
					<Comment />
				))}
			</div>
		</div>
	);
}

export default Comments;
