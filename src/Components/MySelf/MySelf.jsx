import Special from "../Special/Special";

const MySelf = ({gift}) => {
    return (
        <div>
            <h3>MySelf</h3>
            <section>
                <Special gift={gift}></Special>
            </section>
        </div>
    );
};

export default MySelf;