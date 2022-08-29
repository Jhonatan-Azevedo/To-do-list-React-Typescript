import { ITarefa } from "../../../types/ITarefa"
import style from "./ItemList.module.scss"

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function ItemList({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    console.log("Item: ", {tarefa, tempo, selecionado, completado, id});
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({
             tarefa, tempo, selecionado, completado, id
         })}>
                <h4>{tarefa}</h4>
                <span>{tempo }</span>
        </li>
    )
}