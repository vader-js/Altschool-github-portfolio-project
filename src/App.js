import { useEffect, useState } from "react";
import "./App.css";
import Home from "./HomePage/home";
import { ErrorBoundary } from "react-error-boundary";
import { FallBackPage } from "./fallbackPage";

function App() {
  const [user, setUser] = useState("vader-js");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");

  const Totalpage = result.length;
  const RequiredPage = Math.ceil(Totalpage / 4);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/${user}/repos?per_page=4&page=${page}&sort=updated`
    )
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setItems(result);
      });
  }, [user, page]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setResult(result);
      });
  }, [user]);

  const HandleClick = (event) => {
    let pageNumber = event.target.innerText;
    setPage(pageNumber);
  };

  const HandleOperation = (event) => {
    let target = event.target.innerText;
    switch (target) {
      case "prev":
        setPage((prev) => prev - 1);
        break;
      case "next":
        setPage((prev) => prev + 1);
        break;

      default:
        setPage(1);
        break;
    }
  };

  const HandleValue = (e) => {
    let value = e.target.value;
    setValue(value);
  };

  const HandleGenerate = () => {
    setUser(value);
  };

  const ErrorHandler = (error, errorInfo) => {
    console.log("error", error, errorInfo);
  };

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallBackPage} onError={ErrorHandler}>
        {loading ? (
          <p>loading ...</p>
        ) : (
          <Home
            items={items}
            users={user}
            requiredPage={RequiredPage}
            handleclick={HandleClick}
            handleoperation={HandleOperation}
            page={page}
            totalpage={RequiredPage}
            handlegenerate={HandleGenerate}
            value={value}
            handlevalue={HandleValue}
          />
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;
