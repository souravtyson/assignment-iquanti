const ProsConsComponent = ({ pros, cons }) => {
  function formatPros(val) {
    return val ? val.split("|") : [];
  }
  return (
    <div className="pros-cons">
      <p className="pros-cons-title">Pros & Cons</p>
      <div className="pros-cons-list common-justify">
        <div className="pros common-text-style common-style-align">
          {formatPros(pros).map((pro, index) => (
            <p key={index} className="xyz">
              <i className="fa fa-check fa-xs" aria-hidden="true"></i>{" "}
              {pro.trim()}
            </p>
          ))}
        </div>
        <div className="cons common-text-style common-style-align">
          {formatPros(cons).map((con, index) => (
            <p key={index} className="xyz">
              <i className="fa fa-times fa-xs" aria-hidden="true"></i>{" "}
              {con.trim()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProsConsComponent;
