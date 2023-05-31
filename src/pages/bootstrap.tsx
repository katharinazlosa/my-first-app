import { useState } from "react";
import {
  Accordion,
  Alert,
  Col,
  ProgressBar,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import kenny from "./../assets/kenny.png";
import strongwoman from "./../assets/strongwoman.png";
import grass from "./../assets/grass.png";

type StudentType = {
  name: string;
  lastName: string;
  height: number;
  hobby: string;
};

const Bootstrap = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleClick = () => {
    setIsAlertVisible(true);

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 10000);
  };
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const frontendRazred: StudentType[] = [
    {
      name: "Ivan",
      lastName: "Sakoman",
      height: 183,
      hobby: "Cycling",
    },
    {
      name: "Goran",
      lastName: "Viljanac",
      height: 185,
      hobby: "Musician",
    },
    {
      name: "Katharina",
      lastName: "Zlosa",
      height: 180,
      hobby: "reading",
    },
    {
      name: "Antun",
      lastName: "Glumac",
      height: 185,
      hobby: "Football",
    },
    {
      name: "Nikolina",
      lastName: "Kirčanski",
      height: 164,
      hobby: "Martial arts",
    },
    {
      name: "Robert",
      lastName: "Đujić",
      height: 182,
      hobby: "Books, movies, games",
    },
    {
      name: "Monika",
      lastName: "Ivankovic",
      height: 164,
      hobby: "roller skating",
    },
    {
      name: "Maja",
      lastName: "Juratovac",
      height: 169,
      hobby: "dancing",
    },
    {
      name: "Ivan",
      lastName: "Puljić",
      height: 175,
      hobby: "running",
    },
    {
      name: "Sara",
      lastName: "Cindric",
      height: 161,
      hobby: "writing",
    },
    {
      name: "Kristian",
      lastName: "Radoš",
      height: 188,
      hobby: "Netflix",
    },
    {
      name: "Ivana",
      lastName: "Arbutina",
      height: 166,
      hobby: "slikanje",
    },
  ];

  return (
    <>
      <h1>Bootstrap</h1>
      <h4>Accordion</h4>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {isAlertVisible && (
        <div className="alert-container">
          <Alert variant="danger" dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        </div>
      )}
      <div className="alert-container">
        <h4>Naslov</h4>
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="tabs">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="dashboard" title="Dashboard">
            <div className="cards">
              <Row xs={2} md={2} className="g-4">
                <Col>
                  <Card style={{ height: "10rem" }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                      <div className="text-container">
                        <Card.Title className="left">45</Card.Title>
                        <Card.Text className="right">
                          Ovo je neki tekst <br></br> koji nešto objašnjava
                        </Card.Text>
                      </div>
                      <ProgressBar now={30} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ height: "10rem" }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                      <LineChart width={300} height={100} data={data}>
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#8884d8"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>

            <div className="table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>Visina</th>
                    <th>Hobby</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {frontendRazred.map((student) => {
                      return (
                        <tr>
                          <td>{student.name}</td>
                          <td>{student.lastName}</td>
                          <td>{student.height}</td>
                          <td>{student.hobby}</td>
                        </tr>
                      );
                    })}
                  </>
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="game" title="Game">
            <div className="player-container">
              <img src={strongwoman} className="game-img strongwoman"></img>
              <img src={grass} className="grass-img"></img>
            </div>
            <div className="player-container">
              <img src={kenny} className="game-img kenny"></img>
              <img src={grass} className="grass-img"></img>
            </div>
          </Tab>
        </Tabs>
      </div>

      {/* tabovi onda - 1. dashboard - jedna kartica - pola ekrana široka (broj napisan i progress bar 45%) 2. kartica graf(chart.js) pola ekrana široka */}
    </>
  );
};

export default Bootstrap;
