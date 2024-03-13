import { useContext } from "react";
import { RoutesMain } from "./routes"
import "./styles/index.scss"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./providers/UserContext";
import { Loading } from "./components/Loading";
function App() {
  const { loading } = useContext(UserContext);

  return (
    <>
    {loading ? <Loading /> : <RoutesMain />}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  )
}

export default App
