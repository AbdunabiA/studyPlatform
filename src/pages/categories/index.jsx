import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import { GetAll } from "modules";
import { useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import qs from "qs";

const Categories = () => {
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const { id } = useParams();
  // const [url, setUrl] = useState(`api/subject/${id}/categories/`);
  const navigate = useNavigate();
  return (
    <GetAll
      queryKey={["categories"]}
      url={
        params.has_children
          ? `api/category/${id}/`
          : `api/subject/${id}/categories/`
      }
    >
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{ error }} />;
        console.log(items);
        return (
          <div className="container">
            {items?.child_categories?.map((el, i) => {
              return (
                <p
                  style={{cursor:"pointer"}}
                  key={i}
                  onClick={() =>
                    navigate({
                      pathname: el.has_children
                        ? `/categories/${el.id}`
                        : `/themes/${el.id}`,
                      search: qs.stringify({
                        has_children: el.has_children ? true : false,
                      }),
                    })
                  }
                >
                  {el.name}
                </p>
              );
            })}
            <h1>{id}</h1>
          </div>
        );
      }}
    </GetAll>
  );
};

export default Categories;
