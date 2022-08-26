import React from "react";
import Button from "../Button";
import style from "./Form.module.scss"

class Form extends React.Component {
    state = {
        assignment: "",
        timeAssingment: "00:00:00"
    }

    saveAssigment(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("state: ", this.state);
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.saveAssigment.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="assignment">Tarefa: </label>
                    <input
                        type="text"
                        name="assignment"
                        id="assignment"
                        value={this.state.assignment}
                           onChange={(event) => this.setState({ ... this.state, assignment: event.target.value })}
                        placeholder="Estudar"
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="timeAssingment">Tempo: </label>
                    <input
                        type="time"
                        name="timeAssingment"
                        id="timeAssingment"
                        value={this.state.timeAssingment}
                        onChange={(event) => this.setState({ ... this.state, timeAssingment: event.target.value })}
                        placeholder="00:00:00"
                        required />
                </div>
                <Button>
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;