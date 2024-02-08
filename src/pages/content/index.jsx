import ArrowLeft from "assets/icons/ArrowLeft";
import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import DOMPurify from "dompurify";
import { GetAll } from "modules";
import { useNavigate, useParams } from "react-router-dom";
import s from "./content.module.scss";
import File from "assets/icons/File";

const Content = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <GetAll queryKey={["content"]} url={`theme/${id}/`}>
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{ error }} />;
        console.log(items);
        return (
          <div className={s.page_wrapper}>
            <div className="container">
              <div className={s.arrow_left}>
                <ArrowLeft w="30" h="30" onClick={() => navigate(-1)} />
              </div>
              <div className={s.theme_content}>
                <h1>{items?.name}</h1>
                <p>{items?.text}</p>
              </div>
              <div className={s.files} >
              {items.files
                ? items.files.map((el, i) => {
                    // console.log(el.file);
                    return (
                      <div className={s.file} key={i}>
                        <a
                          href={`https://1079583-cp51749.tmweb.ru${el?.file}`}
                          download
                          target="_blank"
                        >
                          <File />
                          <span>{el?.name}</span>
                        </a>
                      </div>
                    );
                  })
                  : null}
              </div>
              {items?.images ? (
                <div className={s.images}>
                  {items?.images.map((el, i) => {
                    return (
                      <div className={s.image} key={i}>
                        <img
                          src={`https://1079583-cp51749.tmweb.ru${el?.image}`}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              ) : null}
              {items?.video_links ? (
                <div className={s.videos}>
                  {items?.video_links.map((el, i) => {
                    return (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{
                          __html: el?.link,
                        }}
                        className={s.video}
                      />
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        );
      }}
    </GetAll>
  );
};

export default Content;
