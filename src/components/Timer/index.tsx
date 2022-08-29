import { useState, useEffect } from "react";
import { ITarefa } from "../../types/ITarefa";
import Button from "../Button";
import { tempoParaSegundos } from "../common/utils/time";
import Clock from "./Clock";
import style from "./Timer.module.scss"

interface Props {
    selecionado: ITarefa | undefined
}

export default function Timer({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    


    return (
        <section className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro.</p>
            <div className={style.relogioWrapper}>
            <Clock tempo={tempo} />
            </div>
            <Button>
                Começar!
            </Button>
        </section>
    )
}