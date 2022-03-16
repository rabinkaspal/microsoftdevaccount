import "./App.css";
import Header from "./components/airbnb/Header";
import Hero from "./components/airbnb/Hero";
import Experience from "./components/airbnb/Experience";
import data from "./data.js";

function App() {
	const experiences = data.map((item) => {
		return <Experience item={item} key={item.id} />;
	});

	return (
		<div>
			<Header />
			<Hero />
			<section className="ab--experiences">{experiences}</section>
		</div>
	);
}

export default App;
