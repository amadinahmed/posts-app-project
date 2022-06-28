function CommentForm() {
	return (
		<form>
			<input name='name' type='text' placeholder='Name' />
			<textarea name='text' cols='30' rows='10' placeholder='Text'></textarea>
			<button>Submit</button>
		</form>
	);
}

export default CommentForm;
