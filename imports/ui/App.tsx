import React, { useEffect, useState } from "react";
import {
  Container,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

import Tasks from "./Tasks";
import Header from "./Header";
import tasks from "../api/tasks";
import { useTracker } from "meteor/react-meteor-data";

/* Tasks */
const noDbtasks = [
  { _id: "1", title: "First Task", completed: false },
  { _id: "2", title: "Second Task", completed: false },
  { _id: "3", title: "Third Task", completed: false },
];

export const App = () => {
  const [newTask, setNewTask] = useState("");

  // Load Tasks from Database
  const dBtasks = useTracker(() =>
    tasks.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  // Adds a new task
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!newTask) return alert("Please enter a new task");

    tasks.insert({
      createdAt: new Date(),
      title: newTask.trim(),
    });

    setNewTask("");
  };

  // Delete a task
  const onDelete = (_id: string) => {
    tasks.remove(_id);
  };

  // Completed Task
  const onCompleted = (id: string) => {
    // Get the item
    const { _id, completed } = tasks.findOne({ _id: id });

    tasks.update(_id, {
      $set: {
        completed: !completed,
      },
    });
  };

  // useEffect(() => {
  // tasks.remove({ _id: "WXfMkYKniYqN2cZ53" });
  // }, []);

  return (
    <Container>
      <div className="mcontainer d-flex justify-content-flex-end flex-column">
        <Header />
        <div className="note-wrapper">
          <ListGroup className="list-group">
            {dBtasks.map(({ title, _id, completed }, key) => (
              <div {...{ key }}>
                <Tasks {...{ _id, title, completed, onDelete, onCompleted }} />
              </div>
            ))}
          </ListGroup>
        </div>

        <div className="input-wrapper">
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter a task"
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
              />
              <InputGroup.Append>
                <Button type="submit">Submit</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </div>
    </Container>
  );
};
