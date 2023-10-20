import ErrorPage from "components/errorPage"
import Loader from "components/loader"
import { GetAll } from "modules"
import { useNavigate, useParams } from "react-router-dom"


const Themes = () => {
    const {id} = useParams()
    const navigate = useNavigate()
  return (
    <GetAll
      queryKey={["themes"]}
      url={`api/category/${id}/themes/`}
    >
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{ error }} />;
        console.log(items);
        return (
            <div className="container">
                {
                    items?.themes?.map((el, i)=>{
                        return (
                            <p 
                                style={{cursor:"pointer"}}
                                key={i}
                                onClick={()=>navigate(`/content/${el.id}`)}
                            >
                                {el.name}
                            </p>
                        )
                    })
                }
            </div>
        )
      }}
    </GetAll>
  );
}

export default Themes