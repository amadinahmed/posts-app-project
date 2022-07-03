import { useState ,useCallback } from 'react';

import Comments from './Comments';
import PostForm from './PostForm';


import { VscArrowDown ,VscArrowUp } from 'react-icons/vsc';


function Post({ name, title, text }) {
	const [editing, setEditing] = useState(false);
	const [subPost, setSubpost] =useState(false);
	const [count, setCount]=useState(0);
	const [Name, currName] = useState(name);
	const [Title, currTitle] = useState(title);
	const [Text, currText] = useState(text);

	const toggleEditMode = () => setEditing(!editing);

	const editPost = (name, title, text) => {
		currName(name);
		currTitle(title);
		currText(text);
		toggleEditMode();
	};

	const upClick = useCallback((e) => {
        setCount(count+1);
      }, [count]);

      const downClick = useCallback((e) => {
        setCount(count-1);
    }, [count]);

	return (
		<div className='p-5'>
			{editing ? (
				<PostForm
					name_form={Name}
					titles_form={Title}
					text_form={Text}
					onSubmit={editPost}
				/>
			) : (
				<div className='flex p-5 max-w-lg bg-gray rounded-lg border border-gray-200 '>
					<div className='pt-3'>
						<div class="flex gap-3 flex-col">
							<div className='block text-white  relative'>
								<button onClick={upClick}><VscArrowUp size="20px" color="white"/></button>
								<div className='pl-1.5'>{count}</div>
								<button onClick={downClick}><VscArrowDown size="20px" color="white"/></button>
							</div>
							<div className='relative'>
							<h3 className=' text-white text-2xl font-bold'>{Title}</h3>
							<h4 className=' text-white'>@{Name}</h4>
							<p className=' text-white pb-4'>{Text}</p>
							</div>
							
						</div>
						<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={toggleEditMode}>
							 Edit
						</button>
						<div className='pt-2' >
							{subPost ? (
								<Comments/>
							):(
								<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={() => setSubpost(true)}>
									Create A Comment
								</button>
							) }
						</div>

					</div>
					
				</div>
			)}
			
			
		</div>
	);
}

export default Post;