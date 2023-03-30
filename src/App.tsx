import Button from "./components/button";
import Checkbox from "./components/checkbox";
import FormField from "./components/formField";
import Header from "./components/header";
import Main from "./components/main";
import ModalWindow from "./components/modalwindow";
import Page from "./components/pagination";
import Tags from "./components/tags";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="container--component">
          <h2>Button</h2>
          <Button />
          <hr />
        </div>
        <div className="container--component">
          <h2>Checkbox</h2>
          <Checkbox label="Check me out!" />
          <hr />
        </div>
        <div className="container--component">
          <h2>Form Field</h2>
          <FormField />
          <hr />
        </div>
        <div className="container--component">
          <h2>Page</h2>
          <Page />
          <hr />
        </div>
        <div className="container--component">
          <h2>Tags</h2>
          <Tags />
          <hr />
        </div>
        <div className="container--component">
          <h2>Modal</h2>
          <ModalWindow />
          <hr />
        </div>
        <div className="container--component">
          <h2>Main</h2>
          <Main />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
