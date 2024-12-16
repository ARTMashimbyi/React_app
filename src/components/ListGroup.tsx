import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

//{ items:[], heding :string }
interface props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: props) {
  /*
  let items = [
    "Randfontein",
    "Roodepoort",
    "Johannesburg",
    "Soweto",
    "Pretoria",
    "Germiston",

    "Boksburg",
    "Brakpan",
    "Benoni",
    "Randburg",
  ];*/
  //let selectedIndex = 0;
  //hook
  //useState;
  const [selectedIndex, setSelectedindex] = useState(-1);

  /*arr[0]  variable (selectoreindex)
    arr[1]   updatre fuction

  items = [];

  
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
      <h1>{heading}</h1>
      {items.length === 0 ? <p> NO items found </p> : null}
      {items.length === 0 && <p> NO items found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setSelectedindex(index);
            }}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
