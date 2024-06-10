import "./Form.css"
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from "../Button";
import { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    const whenSaving = (event) => {
        event.preventDefault();
        props.whenCollaboratorsRegistered({
            name,
            position,
            image,
            team
        });
        setName('');
        setPosition('');
        setImage('');
        setTeam('');
    };

    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    whenChange={value => setName(value)}
                /> 
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={position}
                    whenChange={value => setPosition(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    whenChange={value => setImage(value)}
                />
                <DropdownList
                    required={true} 
                    label="Time"
                    itens={props.teams}
                    value={team}
                    whenChange={value => setTeam(value)}
                />
                <Button> Criar Card </Button>
            </form>
        </section>
    );
};

export default Form;