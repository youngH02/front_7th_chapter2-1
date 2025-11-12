import { ProductList, SearchForm } from "../components/index.js";
import { PageLayout } from "./PageLayout.js";

export const HomePage = ({ categories, products, loading, selectedCat1, selectedCat2, currentSearch }) => {
  const { filters, pagination, products: productList } = products || {};

  return PageLayout({
    children: `
    ${SearchForm({ categories, filters, pagination, selectedCat1, selectedCat2, currentSearch })}
    ${ProductList({ loading, products: productList })}
    `,
  });
};
