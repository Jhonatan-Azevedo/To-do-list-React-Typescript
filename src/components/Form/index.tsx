import React, { useState } from "react";
import { ITarefa } from "../../types/ITarefa";
import Button from "../Button";
import style from "./Form.module.scss"
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Form({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00")

    function saveAssigment(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTarefas((tarefasAntigas) => [...tarefasAntigas, { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() }])
        
        setTarefa("")
        setTempo("00:00")
    }
    return (
            <form className={style.novaTarefa} onSubmit={saveAssigment}>
                <div className={style.inputContainer}>
                    <label htmlFor="assignment">Tarefa: </label>
                    <input
                        type="text"
                        name="assignment"
                        id="assignment"
                        value={tarefa}
                        onChange={(event) => setTarefa(event.target.value)}
                        placeholder="Estudar"
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="timeAssingment">Tempo: </label>
                    <input
                        type="time"
                        name="timeAssingment"
                        id="timeAssingment"
                        min="00:00:00"
                        max="05:00:00"
                        value={tempo}
                        onChange={(event) => setTempo(event.target.value)}
                        placeholder="00:00"
                        required />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        )
}

export default Form;