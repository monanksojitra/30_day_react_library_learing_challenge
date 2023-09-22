import React from "react";
import { atom, useAtom } from "jotai";
import { Card, Button } from "react-bootstrap";

const isRunningAtom = atom(false);
const elapsedTimeAtom = atom(0);

function Day9() {
  const [isRunning, setIsRunning] = useAtom(isRunningAtom);
  const [elapsedTime, setElapsedTime] = useAtom(elapsedTimeAtom);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  // Calculate minutes, seconds, and milliseconds from elapsed time
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = (elapsedTime % 1000)
    .toString()
    .padStart(3, "0")
    .slice(0, 2);

  React.useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 10); // Update every 10 milliseconds
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mx-auto">
          <Card>
            <Card.Body>
              <Card.Text className="text-center">
                <h1>
                  {minutes < 10 ? "0" : ""}
                  {minutes}:{seconds < 10 ? "0" : ""}
                  {seconds}.{milliseconds}
                </h1>
              </Card.Text>
              <div className="text-center">
                <Button
                  variant={isRunning ? "danger" : "success"}
                  onClick={startStop}
                >
                  {isRunning ? "Stop" : "Start"}
                </Button>{" "}
                <Button variant="secondary" onClick={reset}>
                  Reset
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Day9;
