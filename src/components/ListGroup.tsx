import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items = [
    "Benoni",
    "Boksburg",
    "Brakpan",
    "Germiston",
    "Johannesburg",
    "Pretoria",
    "Randburg",
    "Randfontein",
    "Roodepoort",
    "Soweto",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
