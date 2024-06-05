import { useParams } from "react-router-dom";


const Military = ( ) => {
    
    const {id } = useParams()
    return (
        <div>
            <h1>Military:id from {id}</h1>
        </div>
    );
};

export default Military;