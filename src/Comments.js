import { useState, useEffect, useRef } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment.js';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

function Comments({ depth }) {
	const [comments, setComments] = useState([]);
	const [commenting, setCommenting] = useState(false);
	const replyForm = useRef();

	const addComment = (name, text) => {
		setCommenting(false);
		setComments([...comments, { key: uuid(), name, text }]);
	};

	const toggleCommenting = () => setCommenting(!commenting);

	useEffect(() => {
		const autoQuitReply = e =>
			!replyForm.current?.contains(e.target) && setCommenting(false);
		window.addEventListener('pointerdown', autoQuitReply);
		return () => window.removeEventListener('pointerdown', autoQuitReply);
	}, []);

	return (
		<div>
			<button
				onClick={toggleCommenting}
				onPointerDown={e => e.stopPropagation()}
			>
				<FontAwesomeIcon icon={faReply} beatFade={commenting} /> Reply
			</button>
			{commenting && <CommentForm ref={replyForm} onSubmit={addComment} />}
			<div className='comments'>
				{comments.map(comment => (
					<Comment {...comment} depth={depth} />
				))}
			</div>
		</div>
	);
}

Comments.defaultProps = {
	depth: 1,
};

export default Comments;
