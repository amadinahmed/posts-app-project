function PostForm() {
	return (
		<form>
			<input name='Name' type='text' placeholder='Name' />
			<input name='Title' type='text' placeholder='Title' />
			<textarea name='text' cols='30' rows='10' placeholder='Text'></textarea>
			<button>Submit</button>
		</form>
	);
}

export default PostForm;
