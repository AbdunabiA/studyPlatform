import { Suspense} from 'react'
import RoutesWrapper from 'routes';


function App() {

  return (
    <>
    {/* <Suspense fallback="loading..."> */}
      <RoutesWrapper />
    {/* </Suspense> */}
    </>
  );
}

export default App
