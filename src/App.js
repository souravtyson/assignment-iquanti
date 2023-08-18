import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import MessageComponent from "./components/MessageComponent";
import OfferComponent from "./components/OfferComponent";
import ProsConsComponent from "./components/ProsConsComponent";
import RangeComponent from "./components/RangeComponent";
import env from "./services/environment";
import request from "./services/request";

function App() {
  const [products, setProducts] = useState([]);
  const [isHide, setIsHide] = useState({})

  const fetchData = async () => {
    await fetch(`${env.baseURL}${request["static-products"]}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleContent = (val) => {
    
    if(isHide[val]){
      isHide[val] = !isHide[val]
    } else{
      isHide[val] = true;
    }
    setIsHide({...isHide})
  }

  return (
    products.map(product => {
      return (
        <div className="App" key={product.lender_id}>
          <div className="flex-column">
            <div className="logo-title common-text-style font-size-24 common-font-weight-bold line-height-31 padding-15 text-align-left">
              <span>{product.lender_name}</span>
            </div>
            <div className="padding-15 text-align-left">
              <img className="img-size" src={product.lender_image} alt="logo" />
            </div>
            <div className="padding-15">
              <Button buttontext="Get Offer" islegend={true} />
            </div>
          </div>
          <div className="flex-column">
            <div className="common-flex-row common-justify margin-15" style={{minWidth: '555px'}}>
              <RangeComponent rangelegend="Est. APR Range" range={product.apr} />
              <RangeComponent rangelegend="Mo. Payment" range="$500" />
              <RangeComponent
                rangelegend="Origination Fee"
                range={product.origination_fee}
              />
            </div>
            <div className="margin-15">
              <OfferComponent offer={product.best_for} />
            </div>
            <div className="margin-15">
              <ProsConsComponent
                pros={product.detailed_info?.pro}
                cons={product.detailed_info?.con}
              />
            </div>
            <div className={"margin-15" + (isHide[product.lender_id] ? " hide-content" : "")}>
              <MessageComponent
                title="Qualification Requirements"
                mincreditscore={product.detailed_info?.min_credit_score}
                debtincomeratio={product.detailed_info?.max_debt_income_ratio}
              />
            </div>
            <div className={"margin-15" + (isHide[product.lender_id] ? " hide-content" : "")}>
              <MessageComponent
                title="Fees & Penality"
                paymentfees={product.detailed_info?.prepayment_fee}
                latepenalty={product.detailed_info?.late_penalties}
                returnpaymentfee={product.returned_payment_fee}
              />
            </div>
            <div className="common-text-style common-style-align  margin-15">
              <button className="button-solid common-font-weight-bold common-size-16 message-title" onClick={() => toggleContent(product.lender_id)}>{isHide[product.lender_id] ? "More" : "Show Less"}</button>
            </div>
            <div className={"margin-15 common-flex-row common-justify" + (isHide[product.lender_id] ? " hide-content" : "")}>
              <Button buttontext="Read Full Review" islegend={false} />
              <Button buttontext="Get Offer" islegend={true} />
            </div>
          </div>
        </div>
      )
    })
  );
}

export default App;
