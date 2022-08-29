import { useState, useEffect } from "react";
import { ITarefa } from "../../types/ITarefa";
import Button from "../Button";
import { tempoParaSegundos } from "../../common/utils/time";
import Clock from "./Clock";
import style from "./Timer.module.scss"

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Timer({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1)
            } 
            
            return finalizarTarefa();
        }, 1000)
    }
  

    return (
        <section className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro.</p>
            <div className={style.relogioWrapper}>
            <Clock tempo={tempo} />
            </div>
            <Button onClick={() => regressiva(tempo)}>
                Começar!
            </Button>
        </section>
    )
}