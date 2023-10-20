import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import DOMPurify from "dompurify";
import { GetAll } from "modules"
import { useParams } from "react-router-dom";


const Content = () => {
    const {id} = useParams()
  return (
    <GetAll queryKey={["content"]} url={`api/theme/${id}/`}>
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{ error }} />;
        console.log(items);
        return (
          <div className="container">
            {items.name}
            <img
              src={`http://127.0.0.1:8000${items?.images[0].image}`}
              alt=""
            />
            {items?.video_links.map((el, i) => {
              return (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: el?.link,
                  }}
                />
              );
            })}
          </div>
        );
      }}
    </GetAll>
  );
}

export default Content