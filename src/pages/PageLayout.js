import { HeaderDetail } from "../components/layout/HedearDetail.js";
import { Header, Footer } from "../components/index.js";

export const PageLayout = ({ children, isDetailPage = false }) => {
  return /*html*/ `
<div class="min-h-screen bg-gray-50">
  ${isDetailPage ? HeaderDetail() : Header()}
  <main class="max-w-md mx-auto px-4 py-4">
    ${children}
  </main>
  ${Footer()}
</div>
`;
};
