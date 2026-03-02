import { useMemo, useState, useEffect } from "react";
import "./App.css";

import useProducts from "./hook/useProduct";
import { PAGE_SIZE } from "./utils/constants";

import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";

const App = () => {
  const { products, loading, error } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const totalProducts = filteredProducts.length;
  const numberOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setCurrentPage={setCurrentPage}
      />

      {filteredProducts.length === 0 ? (
        <h1>No Data Found</h1>
      ) : (
        <>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numberOfPages={numberOfPages}
          />

          <div className="product-container">
            {filteredProducts
              .slice(start, end)
              .map((p) => (
                <ProductCard
                  key={p.id}
                  title={p.title}
                  image={p.thumbnail}
                  category={p.category}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default App;