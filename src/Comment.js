import { useState } from 'react';
import CommentForm from './CommentForm';
import Comments from './Comments';

function Comment({name,text}) {
	const [editing, setEditing] = useState(false);
	const [addSubComment, setSubComment] = useState(false);
	const [Name, currName] = useState(name);
	const [Text, currText] = useState(text);

	const toggleEditMode = () => setEditing(!editing);

	const editComment = (name, text) => {
		currName(name);
		currText(text);
		toggleEditMode();
	};


	return (
		<div>
			<div className='px-5 pt-5'>
				{editing ? (
					<CommentForm
						name_form={Name}
						text_form={Text}
						onSubmit={editComment}
					/>
				) : (
					<div className='block p-5 max-w-sm bg-gray rounded-lg border border-gray-200 '>
						<div className='comment-content'>
							<h3 className='text-white font-bold ' >Comment</h3>
							<h4 className=' text-white font-medium text-sm sm:text-base truncate' >@{Name}</h4>
							<p className=' text-white'>{Text}</p>
							<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={toggleEditMode}>
								Edit
							</button>
							<div className='pt-2'>
							{addSubComment ? (
								<Comments/>
							) : (
								<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={() => setSubComment(true)}>
								Make Comment
								</button>
							)}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Comment;
