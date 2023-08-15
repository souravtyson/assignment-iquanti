const Button = ({ buttontext, islegend = false }) => {
  return (
    <div>
      <button
        className={"custom-button " + (!islegend ? "custom-button-review" : "")}
      >
        <span className="common-font-weight-bold common-text-style">
          {buttontext}
        </span>
      </button>
      {islegend && (
        <h6 className="text-legend-button common-size-12 common-text-style common-font-weight-normal">
          on Credello
        </h6>
      )}
    </div>
  );
};

export default Button;
