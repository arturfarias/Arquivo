import "./DropdownList.css";

const DropdownList = (props) => {

    const whenSelected = (event) => {
        props.whenChange(event.target.value);
    };


    return (
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select onChange={whenSelected} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map((item) => {return <option key={item}>{item}</option>})}
            </select>
        </div>
    );
};

export default DropdownList;