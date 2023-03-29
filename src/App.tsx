import Button from './components/button';
import Checkbox from './components/checkbox';
import Form from './components/form';
import Header from './components/header';
import Main from './components/main';
import ModalWindow from './components/modalwindow';
import Page from './components/pagination';
import Tags from './components/tags';
import './styles/styles.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Button />
        <Checkbox label="My Value"/>
        <Form />
        <Page />
        <Tags />
        <ModalWindow />
        <Main />
      </div>
    </div>
  )
}

export default App;
