import FemaleCousin from "../FemaleCousin/FemaleCousin";
import Cousin from "../Cousin/Cousin";

const Aunt = () => {
    return (
        <div>
            <h1>Aunt</h1>
          <section className="flex">
            <FemaleCousin></FemaleCousin>
            <Cousin></Cousin>
          </section>
        </div>
    );
};

export default Aunt;