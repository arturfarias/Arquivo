import './TextField.css';

const TextField = (props) => {

    const whenTyping = (event) => {
        props.whenChange(event.target.value);
    };

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyping} required={props.required} placeholder={props.placeholder} />
        </div>
    );
};

export default TextField;