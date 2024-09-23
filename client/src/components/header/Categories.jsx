
import MenShirts from "../../assets/images/Categories/MenShirts.jpeg";
import MenShoes from "../../assets/images/Categories/MenShoes.jpeg";
import KidShoes from "../../assets/images/Categories/KidShoes.jpeg";
import MenTShirt from "../../assets/images/Categories/MenTShirt.jpeg";
import MenJacket from "../../assets/images/Categories/MenJacket.jpeg";
import KidsJacket from "../../assets/images/Categories/KidsJacket.jpeg";
import MenPant from "../../assets/images/Categories/MenPant.jpeg";
import KidsPant from "../../assets/images/Categories/KidsPant.jpeg";
import KidsShirt from "../../assets/images/Categories/KidsShirt.jpeg";

import { Link } from "react-router-dom";

const catNav = [
    {
        name: "Shirts",
        icon: MenShirts,
    },
    {
        name: "Trousers",
        icon: MenPant,
    },
    {
        name: "Shoes",
        icon: MenShoes,
    },
    {
        name: "T Shirts",
        icon: MenTShirt,
    },
    {
        name: "Jackets",
        icon: MenJacket,
    },
    {
        name: "Kids Shirt",
        icon: KidsShirt,
    },
    {
        name: "Kids Lower",
        icon: KidsPant,
    },
    {
        name: "Kids Jacket",
        icon: KidsJacket,
    },
    {
        name: "Kids Shoes",
        icon: KidShoes,
    },
];

const Categories = () => {
    return (
        <section className="hidden sm:block bg-white p-0 min-w-full px-12 shadow overflow-hidden">
            <div className="flex items-center justify-between group">
                {catNav.map((item, i) => (
                    <Link
                        to={`/products?category=${item.name}`}
                        className="flex flex-col gap-1 items-center p-2"
                        key={i}
                    >
                        <div className="h-16 w-16 ">
                            <img
                                draggable="false"
                                className="h-full w-full object-contain"
                                src={item.icon}
                                alt={item.name}
                            />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;
