import { useState } from 'react';

function CommentForm({ comment_name, comment_text, onSubmit}) {

	const [name, setName] = useState();
	const [text, setText] = useState();

	const nameChange = e => setName(e.target.value);
	const textChange = e => setText(e.target.value);

	const submit = () => {
		onSubmit(name, text);
		setText('');
	};

	return (
		<form className=' pt-5 pb-2 flex gap-3 flex-row' >
			<input className='w-20 resize-none rounded-md bg-gray-600 h-6 pd-6 text-white ' onChange={nameChange} name='name' type='text' placeholder='Name' value={name} />
			<textarea className='w-17 resize-none rounded-md bg-gray-600 h-6 pd-6 text-white ' onChange={textChange} name='text' cols='30' rows='10' placeholder='Text' value={text}></textarea>
			<button className='bg-blue-500 w-50 hover:bg-blue-700 text-white font-md py-0.9 px-4 rounded ' onClick={submit} type='button'>Submit</button>
		</form>
	);
}

export default CommentForm;
