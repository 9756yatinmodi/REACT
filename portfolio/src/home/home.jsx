import React, { useEffect, useState } from "react";
import About from "../../component/about/about";
import Projects from "../../component/Projects/Projects";
import axios from "axios";

export default function Home() {
  const [githubData, setGithubData] = useState({});
  useEffect(() => {
    fetchApi().then((data) => setGithubData(data));
  }, []);

  const fetchApi = async () => {
    const res = await axios.get("https://api.github.com/users/theakhilsarkar");
    return res.data;
  };

  return (
    <div>
      <About user={githubData} />
      <Projects />
    </div>
  );
}
