function CommentForm() {
	return (
		<div>
			<input type='text' placeholder='Name' />
			<textarea name='text' cols='30' rows='10' placeholder='Text'></textarea>
			<button>Submit</button>
		</div>
	);
}

export default CommentForm;
