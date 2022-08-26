
import Form from "../components/Form";
import List from '../components/List';
import Timer from '../components/Timer';
import style from "./App.module.scss"

function App() {
  return (
    <section className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </section>
  );
}

export default App;
