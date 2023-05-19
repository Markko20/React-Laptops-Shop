import React from 'react';
import CheckBox from '../CheckBox';

const index = ({ items, id, name }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`panelsStayOpen-heading${id}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapse${id}`}
          aria-expanded="true"
          aria-controls={`panelsStayOpen-collapse${id}`}>
          {name}
        </button>
      </h2>
      <div
        id={`panelsStayOpen-collapse${id}`}
        className="accordion-collapse collapse show"
        aria-labelledby={`panelsStayOpen-heading${id}`}>
        <div className="accordion-body">
          {items.map((name) => {
            return <CheckBox key={name} title={name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
