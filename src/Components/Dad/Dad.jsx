import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = ({gift}) => {

    return (
        <div>
            <h1>Dad</h1>
           <section className="flex">
            <MySelf gift={gift}></MySelf>
            <Brother></Brother>
            <Sister></Sister>
           </section>
        </div>
    );
};

export default Dad;