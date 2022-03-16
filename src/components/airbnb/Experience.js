import starIcon from "../../images/star.png";
// import memberOne from '../../images/memberOne.png';

function Experience(props) {
	const item = props.item;

	let badgeText;
	if (item.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (item.location === "Online") {
		badgeText = "ONLINE";
	}

	return (
		<div className="ab--exp">
			{badgeText && <div className="badge">{badgeText}</div>}
			<img
				src={process.env.PUBLIC_URL + "/images/" + item.coverImg}
				alt="s"
				className="ab--profile"
			/>

			<div className="ab--ratings">
				<img src={starIcon} alt="star" />
				<p>
					<span>{item.stats.rating}</span> ({item.stats.reviewCount})
					• {item.location}
				</p>
			</div>
			<h3>{item.title}</h3>
			<p>From ${item.price} / person</p>
		</div>
	);
}

export default Experience;
