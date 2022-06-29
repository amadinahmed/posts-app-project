import { useState } from 'react';
import Comments from './Comments';
import CommentForm from './CommentForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const MAX_DEPTH = 5;

function Comment({ name, text, depth }) {
	const [editing, setEditing] = useState(false);
	const [currentName, setCurrentName] = useState(name);
	const [currentText, setCurrentText] = useState(text);

	const toggleEditMode = () => setEditing(!editing);

	const editComment = (name, text) => {
		setCurrentName(name);
		setCurrentText(text);
		toggleEditMode();
	};

	return (
		<div className='comment'>
			{editing ? (
				<CommentForm
					initialName={currentName}
					initialText={currentText}
					onSubmit={editComment}
				/>
			) : (
				<>
					<h4>@{currentName}</h4>
					<p>{currentText}</p>
					<button onClick={toggleEditMode}>
						<FontAwesomeIcon icon={faEdit} beatFade={editing} />
						Edit
					</button>
				</>
			)}
			{depth < MAX_DEPTH && <Comments depth={depth + 1} />}
		</div>
	);
}

export default Comment;
