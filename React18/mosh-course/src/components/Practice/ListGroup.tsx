import { Fragment, useState } from "react"

// Props
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
    // Hook (tap into built in react features)
    // Variable, Updater Fn = userState(variable_value)
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    return (
      <Fragment>
        <h1>{heading}</h1>
        <ul className="list-group">
          {items.map((item, index) => (
            <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={index} onClick={ () => {
              setSelectedIndex(index); 
              onSelectItem(item);
            }}>
              {item}
            </li>
          ))}
        </ul>
      </Fragment>
    );
}

export default ListGroup;
