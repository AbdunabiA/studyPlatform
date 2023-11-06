import pageTransition from "pageTransition";
import Home from "pages/home";
import Categories from "pages/categories";
import Themes from "pages/themes";
import Content from "pages/content";

export const pages = [
         {
           path: "/",
           component: pageTransition(Home),
         },
         {
           path: "/categories/:subjectid/:courseid",
           component: pageTransition(Categories),
         },
         {
           path: "/themes/:id",
           component: pageTransition(Themes),
         },
         {
           path: "/content/:id",
           component: pageTransition(Content),
         },
       ];