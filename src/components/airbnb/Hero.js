import heroImage from '../../images/airbnb-hero.png';

function Hero(){
    return(
       <section className="ab--hero">
           <img src={heroImage} alt="s"/>
           <h1>Online Experiences</h1>
           <p>Find vacation rentals, cabins, beach houses, unique homes and experiences ...</p>
       </section>
    )
}


export default Hero;