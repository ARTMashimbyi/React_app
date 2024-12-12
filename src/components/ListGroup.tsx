import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/css/bootstrap.css";

function ListGroup() {
  let items = [
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

  items = [];

  /*
  if (items.length === 0) {
    return (
      <>
        {" "}
        <h1>List</h1> <p> NO items found </p>{" "}
      </>
    );
  }*/

  const getMessage = () => {
    return items.length === 0 ? <p> NO items found </p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p> NO items found </p> : null}
      {items.length === 0 && <p> NO items found </p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
