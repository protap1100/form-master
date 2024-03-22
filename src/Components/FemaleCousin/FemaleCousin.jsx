import { useContext } from "react";
import { AssetContext, AssetMoney } from "../Grandpa/Grandpa";

const FemaleCousin = ({name}) => {

    const gift =useContext(AssetContext);
    const[money,setMoney] = useContext(AssetMoney)
    return (
        <div>
            <h3>Female Cousin</h3>
            <h4>{name}</h4>
            <p>Also Has: {gift}</p>
            <p>State Money:  {money}</p>
            <button onClick={() => setMoney(money +1000) }>
                    click me
            </button>
        </div>
    );
};

export default FemaleCousin;