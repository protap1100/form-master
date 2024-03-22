import { createContext } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';
import { useState } from "react";

export const AssetContext = createContext('Gold Ring');
export const AssetMoney =  createContext(10000);

const Grandpa = () => {

    const anniversaryRing = 'Diamond Ring';
    const [money,setMoney] =useState(1000);



    return (
        <div className="grandpa">
            <h1>Grandpa</h1>  
          <section className="flex">
               <AssetMoney.Provider value={[money, setMoney]}>
                    <AssetContext.Provider value="gold">
                        <Dad gift ={anniversaryRing}></Dad>
                        <Uncle></Uncle>
                        <Aunt></Aunt>
                    </AssetContext.Provider>
               </AssetMoney.Provider>
            </section>
        </div>
    );
};

export default Grandpa;