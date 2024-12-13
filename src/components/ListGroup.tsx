import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

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

  //items = [];

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

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p> NO items found </p> : null}
      {items.length === 0 && <p> NO items found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
