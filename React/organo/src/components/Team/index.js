import Collaborator from '../Collaborator';
import './Team.css';

const Team = (props) => {
    const teamCss = {backgroundColor: props.secondaryColor};
    const teamH3Css = {borderColor: props.primaryColor};

    return (
        props.collaborators.length > 0 && <section className='team' style={teamCss}>
            <h3 style={teamH3Css}>{props.name}</h3>
            <div className='collaborators'>
            {props.collaborators.map(collaborator => <Collaborator
                key={collaborator.name}
                name={collaborator.name}
                position={collaborator.position}
                image={collaborator.image}
                color={props.primaryColor}
                />)
            }
            </div>
        </section>
    );
}
export default Team;