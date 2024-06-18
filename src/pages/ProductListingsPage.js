import Filter from "../components/Filter";
import ProductBrowser from "../components/ProductBrowser";
import "./ProductListingsPage.css";
import Header from "../components/custom-header/Header";
import Footer from "../components/custom-footer/Footer";

const ProductListingsPage = () => {
  return (
      <>
          <Header/>
          <div className="productlistingspage">
              <Header/>
              <main className="content">
                  <section className="product-listings2">
                      <Filter/>
                      <ProductBrowser/>
                  </section>
              </main>
          </div>
          <Footer/>
      </>
  );
};

export default ProductListingsPage;
