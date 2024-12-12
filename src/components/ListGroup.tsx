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
    if (items.length === 0) {
      return <p> NO items found </p>;
    }
  };

  return (
    <>
      <h1>List</h1>
      {getMessage}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
