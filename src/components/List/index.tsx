import { useState } from "react";
import style from "./List.module.scss"
import ItemList from "./ItemList";

function List() {
    const [tarefas, setTarefas] = useState([
        {
            tarefa: "Estudar Node JS",
            tempo: "03:00:00"
        },
        {
            tarefa: "Estudar Python",
            tempo: "01:00:00"
        },
    ]);

    function AddTarefas() {
        setTarefas([...tarefas, {tarefa: "Caminhar", tempo: "01:30:00"}])
    }

    return (
        <aside className={style.listaTarefas}>
            <h3 onClick={() => AddTarefas()}>Tarefas do dia</h3>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <ItemList key={index} {...tarefa} />
                ))}
            </ul>
        </aside>
    )
}

export default List;