const MessageComponent = ({
  title,
  mincreditscore,
  debtincomeratio,
  paymentfees,
  latepenalty,
  returnpaymentfee,
}) => {
  return (
    <div className="message">
      <hr />
      <h3 className="message-title common-text-style common-size-17 common-font-weight-bold common-margin-top common-style-align">
        {title}
      </h3>
      <div className="common-flex-row common-justify">
        {title === "Qualification Requirements" && (
          <div className="common-flex-row flex-wrap-text">
            <h4 className="common-text-style common-font-weight-normal mes-subtitle common-style-align">
              Min. Credit Score:
            </h4>
            <h4 className="common-text-style">{mincreditscore}+</h4>
          </div>
        )}
        {title === "Qualification Requirements" && (
          <div className="common-flex-row flex-wrap-text">
            <h4 className="common-text-style common-font-weight-normal mes-subtitle common-style-align">
              Max. DTI ratio:
            </h4>
            <h4 className="common-text-style common-font-weight-bold">
              {debtincomeratio === null ? "-" : debtincomeratio}
            </h4>
          </div>
        )}
        {title === "Qualification Requirements" && <div></div>}
        {title === "Fees & Penality" && (
          <div className="common-flex-row flex-wrap-text">
            <h4 className="common-text-style common-font-weight-normal mes-subtitle common-style-align">
              Late Penalties:
            </h4>
            <h4 className="common-text-style common-font-weight-bold">
              {latepenalty ? "" : latepenalty}
            </h4>
          </div>
        )}
        {title === "Fees & Penality" && (
          <div className="common-flex-row flex-wrap-text">
            <h4 className="common-text-style common-font-weight-normal mes-subtitle common-style-align">
              Prepayment Fees:
            </h4>
            <h4 className="common-text-style common-font-weight-bold">
              {paymentfees ? "" : paymentfees}
            </h4>
          </div>
        )}
        {title === "Fees & Penality" && (
          <div className="common-flex-row flex-wrap-text">
            <h4 className="common-text-style common-font-weight-normal mes-subtitle common-style-align">
              Returned Payment Fees:
            </h4>
            <h4 className="common-text-style common-font-weight-bold">
              {returnpaymentfee ? "" : returnpaymentfee}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageComponent;
