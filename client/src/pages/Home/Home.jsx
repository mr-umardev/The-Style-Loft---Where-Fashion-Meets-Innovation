
import Categories from "../../components/header/Categories";
import Banner from "./Banner/Banner";
import ProductSlider from "./ProductsListing/ProductSlider";
import { mensShoes } from "../../utils/menshoes";
import { shirts } from "../../utils/shirts";
import { fashionProducts } from "../../utils/fashion";

const Home = () => {
    return (
        <>
            <Categories />
            <main className="flex flex-col items-center gap-3 px-2 pb-5 sm:mt-2">
                <Banner />
                <ProductSlider
                    title={"Best of Men Shoes"}
                    products={mensShoes}
                />
                <ProductSlider
                    title={"Kids Fashion & more"}
                    products={shirts}
                />

                <ProductSlider
                    title={"Fashion Top Deals"}
                    products={fashionProducts}
                />
            </main>
        </>
    );
};

export default Home;
