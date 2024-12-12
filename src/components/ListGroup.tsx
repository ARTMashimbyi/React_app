import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/css/bootstrap.css";

function ListGroup() {
  const items = [
    "Johannesburg",
    "Randfontein",
    "Roodepoort",
    "Soweto",
    "Benoni",
    "Boksburg",
    "Brakpan",
    "Germiston",

    "Pretoria",
    "Randburg",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
