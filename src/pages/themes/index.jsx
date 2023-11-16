import ArrowLeft from "assets/icons/ArrowLeft";
import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import { GetAll } from "modules";
import { useNavigate, useParams } from "react-router-dom";
import s from './themes.module.scss'

const Themes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <GetAll queryKey={["themes"]} url={`category/${id}/themes/`}>
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{ error }} />;
        console.log(items);
        return (
          <div className="container">
            <div className={s.page_wrapper}>
              <div className={s.arrow_left}>
                <ArrowLeft w="30" h="30" onClick={() => navigate(-1)} />
                <h2>{items?.name}</h2>
              </div>
              {items?.themes?.map((el, i) => {
                return (
                  <p
                    style={{ cursor: "pointer" }}
                    key={i}
                    onClick={() => navigate(`/content/${el.id}`)}
                  >
                    {el.name}
                  </p>
                );
              })}
            </div>
          </div>
        );
      }}
    </GetAll>
  );
};

export default Themes;
