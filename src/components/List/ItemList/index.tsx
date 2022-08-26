import style from "./../List.module.scss"

export default function ItemList({ tarefa, tempo }: { tarefa: string, tempo: string }) {
    return (
         <li className={style.item}>
                <h4>{tarefa}</h4>
                <span>{tempo }</span>
        </li>
    )
}