import React, { useEffect, useState } from "react";
import "./repo.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Repo() {
  let { username, projectname } = useParams();
  const [display, setDisplay] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${projectname}`)
      .then((result) => result.json())
      .then((response) => {
        setDisplay(response);
      });
  }, []);
  return (
    <>
    <Helmet>
    <title>Portfolio</title>
    <meta name="description" content="a mini-portfolio showcasing your github repository data "/>
    <link rel="canonical" href="/info/:username/:projectname" />
    </Helmet>
    <div className="repo">
      <div className="repowrapper">
        <h1 className="headtext">
          GitHub <br /> Portfolio App
        </h1>
        <div className="summarytext">
          <p className="summaryparagraph">
            View your Github Repo(s) from public information provided by Github
            containing top repositories, contribution, statistics and more...
          </p>
        </div>
        <div className="previous">
          <Link to={"/"}> Go back</Link>
        </div>
      </div>
      <div className="reporesult">
        {!display ? (
          <p style={{textAlign: "center"}}>loading...</p>
        ) : (
          <div className="resultwrapper">
            <div className="topmenu">
              <div className="top">
                <img src={display.owner.avatar_url} alt="user" />
              </div>
              <div className="top-right">
                <h2 className="usernamehead">{display.owner.login}</h2>
                <p className="name">{display.name}</p>
                <p className="status">public</p>
              </div>
            </div>
            <div className="middle">
              This repository was created on{" "}
              {new Date(display.created_at).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}{" "}
              by {display.owner.login}
            </div>
            <div className="middle-low">
              <div className="link">
                <a
                  className="linkurl"
                  href={display.html_url}
                  target="_blank"
                  rel="noreferrer"
                > view Repo</a>
              </div>
              <ul className="lists">
                <li className="list">
                  {display.stargazers_count.toLocaleString()} stars
                </li>
                <li className="list">
                  {display.watchers_count.toLocaleString()} Watchers
                </li>
              </ul>
            </div>
            <div className="bottom">
                <p className="language">{`language: ${display.language}`}</p>
                <div className="topics">
                    <p className="topic">Topics:</p>
                    <ul className="topiclists">
                {display.topics &&
              display.topics.map((topic, index) => (
                  <li className="topiclist" key={index}>
                    {topic}
                  </li>
              ))}
              </ul>
                </div>
            </div>
          </div>
        )}
         
      </div>
      <div className="previous2">
          <Link to={"/"}> Go back</Link>
        </div>
    </div>
    </>
  );
}

export default Repo;
