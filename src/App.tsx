import Button from "./components/button";
import Checkbox from "./components/checkbox";
import FormField from "./components/formField";
import Header from "./components/header";
import Main from "./components/main";
import ModalWindow from "./components/modalwindow";
import Page from "./components/pagination";
import Tags from "./components/tags";
import TransfromExe from "./components/tranformExe";
import Flex from "./components/flex";
import FlexCard from "./components/flexcard";
import Input from "./components/input";
import "./styles/styles.scss";
import Card from "./components/card";
import Grid from "./components/grid";
import CardTwo from "./components/card2";
import Grid2 from "./components/grid2";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="container--component">
          <h2>Card</h2>
          <CardTwo title="Gameweek 17" desc="Signed BVB Jersey" value="987" />
        </div>
        <div className="container--component">
          <h2>Card grid</h2>
          <Grid2 />
        </div>
        <div className="container--component">
          <h2>Card</h2>
          <Card
            title="Kartica"
            text="Kartica text hjkxsdhfkjhfk jshfgkjdhgkjdhf  fdhfdjfkj"
            src="https://source.unsplash.com/random/250x250/?nature"
          />
        </div>
        <div className="container--component">
          <h2>Card grid</h2>
          <Grid />
        </div>
        <div className="container--component">
          <h2>Input</h2>
          <Input rounded label="First name" />
          <Input label="Last name" validation="lalalal" />
          <hr />
        </div>
        <div className="container--component">
          <h2>Button</h2>
          <Button animate={true} value="Stisni me" color="yellow" />
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
        <div className="container--component">
          <h2>Transform property exercise</h2>
          <TransfromExe />
          <hr />
        </div>
        <div className="container--component">
          <h2>Flex</h2>
          <Flex />
          <hr />
        </div>
        <div className="container--component">
          <h2>Flex-cards</h2>
          <FlexCard />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
