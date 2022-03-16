export default function Joke(props){
    return (
        <div className="joke--container">
            {props.setup && <h2 className="joke--setup">Setup: {props.setup}</h2>}
            {props.punchline && <p>Punchline: {props.punchline}</p>}
            {props && <hr/>}
        </div>
    )
}