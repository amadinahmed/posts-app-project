import { useState, forwardRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const CommentForm = forwardRef(
	({ initialName, initialText, onSubmit }, ref) => {
		const [valid, setValid] = useState(initialName && initialText);
		const [name, setName] = useState(initialName);
		const [text, setText] = useState(initialText);

		useEffect(() => {
			const isValid = name.trim().length && text.trim().length;
			if (isValid !== valid) setValid(isValid);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [name, text]);

		const nameChange = e => setName(e.target.value);
		const textChange = e => setText(e.target.value);

		const submit = () => {
			onSubmit(name.replace(/\s/g, ''), text);
			setName('');
			setText('');
		};

		return (
			<form ref={ref}>
				<input
					autoFocus
					onChange={nameChange}
					name='name'
					type='text'
					placeholder='Name'
					value={name}
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
);

CommentForm.defaultProps = {
	initialName: '',
	initialText: '',
};

export default CommentForm;
