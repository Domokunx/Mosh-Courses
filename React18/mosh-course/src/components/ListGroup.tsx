import { Fragment } from "react"

function ListGroup() {
    const items = [
        'Singapore',
        'San Francisco',
        'Batam',
        'Indonesia',
        'Neleh\'s House'
    ];
    
    return (
        <Fragment>
          <h1>List</h1>
          <ul className="list-group">
                {items.map(item =>
                    <li>{item}</li>)
                }
          </ul>
    </Fragment>
  );
}

export default ListGroup;
