import { SearchForm } from "../components/category";
import { ProductList } from "../components/product";
import { PageLayout } from "./PageLayout.js";

export const HomePage = ({ categories, products, loading }) => {
  const { filters, pagination, products: productList } = products || {};
  const hasMore = pagination?.hasNext ?? true;

  return PageLayout({
    children: `
    ${SearchForm({ categories, pagination, filters })}
    ${ProductList({ loading, products: productList, hasMore })}
    `,
  });
};
