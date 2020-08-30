import { Mongo } from "meteor/mongo";

interface TaskProps {
  _id?: string;
  title: string;
  createdAt?: Date;
  completed?: false
}

export default new Mongo.Collection<TaskProps>("tasks");
