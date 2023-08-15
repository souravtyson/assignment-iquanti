const OfferComponent = ({ offer }) => {
  return (
    <div className="offers common-text-style common-size-16 common-style-align">
      <div className="offers-content">
        <h3 className="offers-quote">Good For:</h3> {offer}
      </div>
    </div>
  );
};

export default OfferComponent;
