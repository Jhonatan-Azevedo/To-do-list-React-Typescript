import React from "react";
import Button from "../Button";
import style from "./Form.module.scss"

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="assignment">Tarefa: </label>
                    <input type="text" name="assignment" id="assignment" placeholder="Estudar" required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="timeAssingment">Tempo: </label>
                    <input type="time" name="timeAssingment" id="timeAssingment" placeholder="00:00:00" />
                </div>
                <Button>
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;