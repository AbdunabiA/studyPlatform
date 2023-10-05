import pageTransition from "pageTransition";
import Home from "pages/home";
import Categories from "pages/categories";

export const pages = [
         {
           path: "/",
           component: pageTransition(Home),
         },
         {
           path: "/categories",
           component: pageTransition(Categories),
         },
       ];