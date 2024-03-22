import { useContext } from "react";
import { AssetContext, AssetMoney } from "../Grandpa/Grandpa";

const Cousin = ({name}) => {

    const gift = useContext(AssetContext);
    const Money = useContext(AssetMoney);
    return (
        <div>
            <h3>Cousin</h3>
            <h3>{name}</h3>
            <p>Your Gift : {gift}</p>
            <p>Your Money : {Money}</p>
        </div>
    );
};

export default Cousin;