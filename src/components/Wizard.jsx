import { Children } from "react";

const Wizard = ({ children, currentPage = 0 }) => {
   const pages = Children.toArray(children);

   return pages[currentPage] || "";
};

export default Wizard;
