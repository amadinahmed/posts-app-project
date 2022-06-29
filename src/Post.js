import { useState } from 'react';
import Comments from './Comments';
import PostForm from './PostForm';
import Voter from './Voter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function Post({ name, title, text }) {
	const [editing, setEditing] = useState(false);
	const [currentName, setCurrentName] = useState(name);
	const [currentTitle, setCurrentTitle] = useState(title);
	const [currentText, setCurrentText] = useState(text);

	const toggleEditMode = () => setEditing(!editing);

	const editPost = (name, title, text) => {
		setCurrentName(name);
		setCurrentTitle(title);
		setCurrentText(text);
		toggleEditMode();
	};

	return (
		<div className='post'>
			{editing ? (
				<PostForm
					initialName={currentName}
					initialTitle={currentTitle}
					initialText={currentText}
					onSubmit={editPost}
				/>
			) : (
				<div className='post-content'>
					<div className='post-text'>
						<h4>@{currentName}</h4>
						<h3>{currentTitle}</h3>
						<p>{currentText}</p>
						<button onClick={toggleEditMode}>
							<FontAwesomeIcon icon={faEdit} beatFade={editing} /> Edit
						</button>
					</div>
					<Voter />
				</div>
			)}
			<Comments />
		</div>
	);
}

export default Post;
