import './Collaborator.css';

const Collaborator = (props) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{backgroundColor:props.color}}>
                <img src={props.image} alt={props.name}></img>
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    );
};

export default Collaborator;