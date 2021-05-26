import "./portfolio.scss";
import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { webApp, unity, Design, FeaturedArt } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "webApp",
      title: "WebApp",
    },
    {
      id: "unity",
      title: "Unity",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "featuredArt",
      title: "Featured Art",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(webApp);
        break;
      case "unity":
        setData(unity);
        break;
      case "design":
        setData(Design);
        break;
      case "featuredArt":
        setData(FeaturedArt);
        break;
      default: 
        setData(webApp);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
