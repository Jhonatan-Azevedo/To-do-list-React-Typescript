
import React, { useState } from "react"
import Form from "../components/Form";
import List from '../components/List';
import Timer from '../components/Timer';
import { ITarefa } from "../types/ITarefa";
import style from "./App.module.scss"

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) { 
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }
  
  return (
    <section className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Timer selecionado={ selecionado } />
    </section>
  );
}

export default App;
