import React from "react";

const pagination = ({next, prev}) => {
  return (
    <div>
      {prev && <button onClick={prev}>Previous</button>}
      {next && <button onClick={next}>Next</button>}
    </div>
  );
};

export default pagination;
