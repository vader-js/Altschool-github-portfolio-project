import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useErrorHandler } from "react-error-boundary";
import { Helmet } from "react-helmet-async";

function Home({
  items,
  users,
  requiredPage,
  handleclick,
  handleoperation,
  page,
  totalpage,
  handlegenerate,
  value,
  handlevalue,
}) {
  const HandleError = useErrorHandler();

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="search using your github username and get a mini-portfolio"
        />
        <link rel="canonical" href="/home" />
      </Helmet>
      <div className="home">
        <div className="homewrapper">
          <h1 className="headtext">
            GitHub <br /> Portfolio App
          </h1>
          <div className="summarytext">
            <p className="summaryparagraph">
              View your Github Repo(s) from public information provided by
              Github containing top repositories, contributions, statistics and
              more...
            </p>
          </div>
          <div className="username">
            <p className="sometext">Enter github username</p>
            <div className="generate">
              <input
                type="text"
                name="username"
                id="username"
                value={value}
                onChange={handlevalue}
                placeholder="vader-js"
                required
              />
              <button onClick={handlegenerate} onDoubleClick={HandleError}>
                Generate
              </button>
            </div>
          </div>
        </div>

        <div className="result">
          <ul className="users">
            {items.map((item, index) => {
              return (
                <div className="userlist" key={item.id}>
                  <li className="list">{item.owner.login}</li>
                  <li className="list">{`project-name: ${item.name}`}</li>
                  <Link to={`info/${item.owner.login}/${item.name}`}>
                    <li className="list">{`url: ${item.svn_url}`}</li>
                  </Link>
                </div>
              );
            })}
          </ul>

          <div className="buttons">
            <div className="pagination">
            <span className="prev">
              <button
                onClick={handleoperation}
                disabled={page === 1}
                aria-disabled={page === 1}
              >
                prev
              </button>
            </span>
              {Array.from(
                { length: requiredPage },
                (value, index) => index + 1
              ).map((each) => (
                <button key={each} onClick={handleclick}>
                  {each}
                </button>
              ))}
              <span className="next">
              <button
                onClick={handleoperation}
                disabled={page === totalpage}
                aria-disabled={page === totalpage}
              >
                next
              </button>
            </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
