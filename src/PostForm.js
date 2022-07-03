import { useState } from 'react';


function PostForm({ name_form, titles_form, text_form, onSubmit }) {
	
	const [name, setName] = useState();
	const [title, setTitle] = useState();
	const [text, setText] = useState();


	const nameChange = e => setName(e.target.value);
	const titleChange = e => setTitle(e.target.value);
	const textChange = e => setText(e.target.value);

	const submit = () => {
		onSubmit(name, title, text);
		setTitle('');
		setText('');
	};

	return (
		<form className=' pb-6 flex gap-3 flex-row'>
			<input className='w-50 resize-none rounded-md bg-gray-600 h-6 text-white ' onChange={nameChange} name='name' type='text' placeholder='Name' value={name} />
			<input className='w-50 resize-none rounded-md bg-gray-600 h-6 text-white ' onChange={titleChange} name='title' type='text' placeholder='Title' value={title}/>
			<textarea className='w-50 resize-none rounded-md bg-gray-600 h-6 pd-6 text-white ' onChange={textChange} name='text' placeholder='Text' value={text}></textarea>

			<button className='bg-blue-500 w-50 hover:bg-blue-700 text-white font-md py-0.9 px-4 rounded ' onClick={submit} type='button'>
				<span>Submit</span>
				
			</button>
		</form>
	);
}



export default PostForm;