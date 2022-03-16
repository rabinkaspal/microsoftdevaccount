import airbnbLogo from '../../images/airbnb-logo.png';


function Header(){
    return(
        <header className="ab--header">
            <img src={airbnbLogo} alt="s"/>
        </header>
    )
}


export default Header;