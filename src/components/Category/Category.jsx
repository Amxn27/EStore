import "./Category.scss";
import { useParams} from "react-router-dom"
import Product from "../Products/Products"
import useFetch from "../../hooks/useFetch";
const Category = () => {
    const {id} = useParams();

    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

    return (<div className="category-main-content">
    <div className="layout">
        <div className="category-title">Catrgory Title</div>
        <Product innerPage={true} products={data} />
    </div>
    </div>
    );
};

export default Category;
