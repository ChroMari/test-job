import React from 'react';

import './addtivestyle.scss';

const Additive = ({ type, element, cl }) => {
  if (type.defaultView || type.defaultHover) {
    return (
      <div className="additive">
        Чего сидишь? Порадуй котэ, &nbsp; <span className="additive__link" onClick = {() => cl()}>купи.</span> 
      </div>
    );
  }
  if (type.selectedView || type.selectedHover) {
    return (
    <div className="additive-selected"> {element.addProduct.selected} </div>
    );
  }
  if (type.disabledView) {
    return (
    <div className="additive-disabled"> {element.addProduct.default} </div>
    );
  }
  return true;
 }

 export default Additive;