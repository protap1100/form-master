import FemaleCousin from "../FemaleCousin/FemaleCousin";
import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h1>Uncle</h1>
            <section className="flex">
                <FemaleCousin name={'Proma'}></FemaleCousin>
                <Cousin name={'Piyas'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;