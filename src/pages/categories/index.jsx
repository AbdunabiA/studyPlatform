import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import { GetAll } from "modules";
import { useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import qs from "qs";
import s from "./catgeories.module.scss";
import ArrowLeft from "assets/icons/ArrowLeft";
import 'atropos/scss'
import Atropos from "atropos/react";

const Categories = () => {
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const { subjectid, courseid, parentCategoryId } = useParams();
  // const [url, setUrl] = useState(`api/subject/${id}/categories/`);
  const navigate = useNavigate();
  return (
    <GetAll
      queryKey={["categories"]}
      url={
        params.has_children
          ? `categories-with-parent-category/${parentCategoryId}/${courseid}/`
          : `related-categories/${subjectid}/${courseid}/`
      }
    >
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{ error }} />;
        console.log(items);
        return (
          <div className={s.page_wrapper}>
            <div className="container">
              <div className={s.arrow_left}>
                <ArrowLeft w="30" h="30" onClick={() => navigate(-1)} />
                <h2>{items?.subject.name}</h2>
                <h2>{items?.course.name}</h2>
              </div>
              <div className={s.category_cards}>
                {items?.categories?.map((el, i) => {
                  return (
                    <Atropos
                      activeOffset={40}
                      shadowScale={1.1}
                      key={i}
                      className={s.category_card}
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
                      <div
                        // activeOffset={40}
                        // shadowScale={1.1}
                        className={s.card_image}
                        // alwaysActive
                        // shadow
                        // shadowOffset={50}
                        highlight
                      >
                        <img
                          src={`http://study-project-api-production.up.railway.app${el.image}`}
                          alt=""
                          // data-atropos-offset="5"
                          // data-atropos-opacity="1;0.8"
                        />
                        <p className={s.category_name}>{el?.name}</p>
                      </div>
                      <div className={s.card_content}>
                        <h3>{el.name}</h3>
                      </div>
                    </Atropos>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }}
    </GetAll>
  );
};

export default Categories;
