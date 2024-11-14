import BannerCarousel from "@/components/BannerCarousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Usp from "@/components/Usp";

const products = [
  {
    "productTitle": "Motor SE-3",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.",
    "orgPrice": '9,999',
    "disPrice": '8,889',
    "imageURL": "/img/1.jpg",
    "isOnSale": true,
    "saleLabel": "SALE"
  },
  {
    "productTitle": "V-guard Stablizer",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.",
    "orgPrice": '7,499',
    "disPrice": '6,999',
    "imageURL": "/img/2.jpg",
    "isOnSale": false,
    "saleLabel": ""
  },
  {
    "productTitle": "Refrigerant Gas",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.",
    "orgPrice": '1,800/Lit',
    "disPrice": '1,560/Lit',
    "imageURL": "/img/3.jpeg",
    "isOnSale": true,
    "saleLabel": "SALE"
  },
  {
    "productTitle": "Submersible set",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.",
    "orgPrice": '29,999',
    "disPrice": '24,699',
    "imageURL": "/img/4.webp",
    "isOnSale": false,
    "saleLabel": ""
  }
];


export default function Home() {
  return (
    <div className="font-montserrat">

      <Navbar />

      <BannerCarousel />

      <Usp />

      <div className="px-4 md:px-16 py-8 flex flex-col gap-12">
        <h1 className="text-2xl font-bold">Top Selling Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="px-4 md:px-16 py-8 flex flex-col gap-12">
        <h1 className="text-2xl font-bold">Recent Launches</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <Footer />

    </div>
  );
}
