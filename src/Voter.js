import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Voter() {
	const [votes, setVotes] = useState(0);

	const upvote = () => setVotes(votes + 1);
	const downvote = () => setVotes(votes - 1);

	return (
		<div className='voter'>
			<button onClick={upvote}>
				<FontAwesomeIcon icon={faChevronUp} />
			</button>
			<p>{votes}</p>
			<button onClick={downvote}>
				<FontAwesomeIcon icon={faChevronDown} />
			</button>
		</div>
	);
}

export default Voter;
