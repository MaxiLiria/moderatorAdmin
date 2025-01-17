import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getChallengeById, deleteChallenge } from '../../app/api/challenge';
import { ChallengeStyle } from '../../app/Style';

const Challenge = () => {
	const { id } = useParams()
	const [challenge, setChallenge] = useState({})
	const navigate = useNavigate()

	useEffect(() => {
		getChallengeById(id).then(data => {
			setChallenge(data.data)
		})
	}, [id])

	const handleDelete = async () => {
		await deleteChallenge(id)
		navigate("/")
	}

	return (
		<ChallengeStyle>
			<h2>Username: {challenge.watcher ? challenge.watcher.username : challenge.watcher}</h2>
			<p>Description: {challenge.description}</p>
			<h2>Video</h2>
			<video src={challenge.videos ? challenge.videos.videoUrl : null} style={{ height: "370px" }} autoPlay controls />
			<br />
			<button onClick={handleDelete}>Delete</button>
		</ChallengeStyle>
	)
}

export default Challenge
