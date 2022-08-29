import style from "./List.module.scss"
import ItemList from "./ItemList";
import { ITarefa } from "./../../types/ITarefa"

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h3>Tarefas do dia</h3>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <ItemList selecionaTarefa={selecionaTarefa} key={tarefa.id} {...tarefa} />
                ))}
            </ul>
        </aside>
    )
}

export default List;