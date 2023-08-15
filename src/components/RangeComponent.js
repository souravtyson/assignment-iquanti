const RangeComponent = ({ rangelegend, range }) => {
  const formattedVal = () => {
    if (range?.min && range?.max) {
      return `${range.min}% - ${range.max}%*`;
    }
    if (rangelegend === "Mo. Payment") {
      return range;
    }
    if (rangelegend === "Origination Fee") {
      return `${range?.min}%`;
    }
  };

  return (
    <div>
      <div className="range common-flex-row">
        {<h3 className="range-text common-size-17">{formattedVal()}</h3>}
      </div>
      <span className="common-text-style common-size-12 common-font-weight-normal range-legend">
        {rangelegend}
      </span>
    </div>
  );
};

export default RangeComponent;
