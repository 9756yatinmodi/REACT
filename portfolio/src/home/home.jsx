import React, { useEffect, useState } from "react";
import About from "../component/about/about";
import Projects from  "../component/project/project" ;
import Contact from  "../component/contact/contact" ;
import axios from "axios";

export default function Home() {
  const [githubData, setGithubData] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchApi().then((data) => setGithubData(data));
     fetchRepos().then((data) => setRepos(data));
  }, []);

  const fetchApi = async () => {
    const res = await axios.get("https://api.github.com/users/9756yatinmodi");
    return res.data;
  };

   const fetchRepos = async () => {
    const res = await axios.get(
      "https://api.github.com/users/9756yatinmodi/repos"
    );
    return res.data;
  };

  return (
    <div>
   <div>
      <About user={githubData} />
      <Projects repos={repos} length={repos.length} />
      <Contact/>
    
    </div>
    </div>
  );
}
