import Posts from './Posts';


function App() {

	return (
		<div className=' bg-gray-400 flex items-center place-content-center'>
		<div className=' pt-5 pr-5 pl-5  bg-gray-500 rounded'>
			<h1 className='text-xl pb-5 leading-6 font-medium text-center text-white'>Post Comment App</h1>
			<Posts />
		</div>
		</div>
	);
}

export default App;
