import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import { GetAll } from "modules";
import { Link, useLocation, useNavigate } from "react-router-dom";
import s from "./home.module.scss";
import { motion } from "framer-motion";
import qs from "qs";

const Home = () => {
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const navigate = useNavigate();
  return (
    <GetAll url={"/subjects-courses/"} queryKey={["subjects"]}>
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{ error }} />;
        console.log(items);
        return (
          <div className={s.main_wrapper}>
            <div className="container">
              <div className={s.subjects_wrapper}>
                {items.map((el, i) => {
                  return (
                    <div
                      key={i}
                      // onClick={() =>
                      //   navigate({
                      //     pathname: `/categories/${el.id}/${el.courses[0].id}`,
                      //     search: qs.stringify({ bg: el.image }),
                      //   })
                      // }
                    >
                      <motion.div
                        className={s.subject_card}
                        whileHover={{ y: -10 }}
                      >
                        <div className={s.subject_image}>
                          <img
                            src={`http://study-project-api-production.up.railway.app${el.image}`}
                            alt=""
                          />
                        </div>
                        <div className={s.hovered_text}>
                          <h3>{el.name}</h3>
                        </div>
                        <div className={s.subject_info}>
                          <h3>{el.name}</h3>
                        </div>
                        <div className={s.courses}>
                          {el.courses.map((course, i) => {
                            return (
                              <div
                                key={i}
                                className={s.course}
                                onClick={() =>
                                  navigate({
                                    pathname: `/categories/${el.id}/${course.id}`,
                                  })
                                }
                              >
                                <p>{course.name}</p>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
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

export default Home;
