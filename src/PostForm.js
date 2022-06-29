import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function PostForm({ initialName, initialTitle, initialText, onSubmit }) {
	const [valid, setValid] = useState(
		initialName && initialTitle && initialText
	);
	const [name, setName] = useState(initialName);
	const [title, setTitle] = useState(initialTitle);
	const [text, setText] = useState(initialText);

	useEffect(() => {
		const isValid =
			name.trim().length && title.trim().length && text.trim().length;
		if (isValid !== valid) setValid(isValid);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name, title, text]);

	const nameChange = e => setName(e.target.value);
	const titleChange = e => setTitle(e.target.value);
	const textChange = e => setText(e.target.value);

	const submit = () => {
		onSubmit(name.replace(/\s/g, ''), title.trim(), text);
		setTitle('');
		setText('');
	};

	return (
		<form>
			<input
				autoFocus
				onChange={nameChange}
				name='name'
				type='text'
				placeholder='Name'
				value={name}
			/>
			<input
				onChange={titleChange}
				name='title'
				type='text'
				placeholder='Title'
				value={title}
			/>
			<textarea
				onChange={textChange}
				name='text'
				placeholder='Text'
				value={text}
			></textarea>
			<button disabled={!valid} onClick={submit} type='button'>
				<span>Submit </span>
				<FontAwesomeIcon icon={faPaperPlane} />
			</button>
		</form>
	);
}

PostForm.defaultProps = {
	initialName: '',
	initialTitle: '',
	initialText: '',
};

export default PostForm;
