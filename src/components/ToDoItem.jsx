import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


function To_do_Item(props) {
  const { data, idx, Success, Remove } = props;

  return (
    <div>
      <div className={"todoName" + (data.success ? " success" : "")}>{data.title}</div>

      <div className='icons'>
        <div className="successi" onClick={ () => Success(idx) }>
          <FontAwesomeIcon icon={ faCheck }/>
        </div>
        <div className="remove" onClick={ () => Remove(idx) }>
          <FontAwesomeIcon icon={ faXmark } />
        </div>
      </div>
    </div>
  );
}

export default To_do_Item;