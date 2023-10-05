import React, { Suspense } from "react";
import Layout from "../components/layout";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { pages } from "./routes";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";

const appRoutes = (routes) => {
  return routes.map((route, key) => (
    <React.Fragment key={key}>
      <Route
        path={route.path}
        element={<Suspense fallback="LOADING...">{route.component}</Suspense>}
      />
      {route.children && appRoutes(route.children)}
    </React.Fragment>
  ));
};

const RoutesWrapper = () => {
  const location = useLocation();

  const { i18n } = useTranslation();
  if (i18n.language == "ru-RU") {
    i18n.changeLanguage("ru");
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="*"
          element={
            <h2>
              Not Fonund <Link to={"/"}>Home page</Link>
            </h2>
          }
        />
        <Route path="/" element={<Layout />}>
          {appRoutes(pages)}
        </Route>
      </Routes>
    </AnimatePresence>
  );
  // return <Routes>{appRoutes(privateRoutes)}</Routes>;
};

export default RoutesWrapper;
