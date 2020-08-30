import React from "react";
import { ListGroup, Button } from "react-bootstrap";

export interface TaskProps {
  _id?: string;
  title: string;
  onDelete?: () => void;
  completed: Boolean;
  onCompleted?: () => void;
}

const Tasks = ({ title, _id, completed, onDelete, onCompleted }: TaskProps) => {
  return (
    <ListGroup.Item
      key={_id}
      className={`list-group-item ${
        completed ? "completed" : ""
      } d-flex justify-content-between task align-items-center`}
      onDoubleClick={() => onCompleted(_id)}
    >
      <span className={completed ? "strike" : ""}>{title}</span>

      <Button variant="danger" size="sm" onClick={() => onDelete(_id)}>
        DEL
      </Button>
    </ListGroup.Item>
  );
};

export default Tasks;
