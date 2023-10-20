import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import { GetAll } from "modules";
import { Link } from "react-router-dom";
import s from "./home.module.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <GetAll url={"/api/subjects"} queryKey={["subjects"]}>
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
                    <Link key={i} to={`/categories/${el.id}`}>
                      <motion.div
                       className={s.subject_card}
                       whileHover={{y:-10}}
                      >
                        <div className={s.subject_image}>
                          <img
                            src={`http://127.0.0.1:8000${el.image}`}
                            alt=""
                          />
                        </div>
                        <div className={s.hovered_text}>
                          <h3>{el.name}</h3>
                        </div>
                        <div className={s.subject_info}>
                          <h3>{el.name}</h3>
                        </div>
                      </motion.div>
                    </Link>
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
