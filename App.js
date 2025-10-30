import React from "react";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import SectionHeader from "./components/SectionHeader";
import ArticleCard from "./components/ArticleCard";
import TutorialCard from "./components/TutorialCard";
import Footer from "./components/Footer";

function App() {
  const articles = [
    {
      id: 1,
      title: "React OR Vue",
      description: "e.g., React OR Vue",
      author: "Author1",
      img: "https://picsum.photos/300/150?random=1",
      rating: "⭐ 5"
    },
    {
      id: 2,
      title: "NodeJS",
      description: "e.g., NodeJS",
      author: "Author2",
      img: "https://picsum.photos/300/150?random=2",
      rating: "⭐ 5"
    },
    {
      id: 3,
      title: "React Hooks",
      description: "e.g., React Hooks",
      author: "Author3",
      img: "https://picsum.photos/300/150?random=3",
      rating: "⭐ 5"
    }
  ];

  const tutorials = [
    {
      id: 1,
      title: "JS6",
      description: "e.g., JS6",
      author: "User1",
      img: "https://picsum.photos/300/150?random=4",
      rating: "⭐ 5"
    },
    {
      id: 2,
      title: "React Router",
      description: "e.g., React Router",
      author: "User2",
      img: "https://picsum.photos/300/150?random=5",
      rating: "⭐ 5"
    },
    {
      id: 3,
      title: "Express",
      description: "e.g., Express",
      author: "User3",
      img: "https://picsum.photos/300/150?random=6",
      rating: "⭐ 5"
    }
  ];

  return (
    <div>
      <Navbar />
      <HeroImage />

      {/* Featured Articles */}
      <SectionHeader title="Featured Articles" />
      <div className="cards">
        {articles.map((a) => (
          <ArticleCard key={a.id} {...a} />
        ))}
      </div>
      <button className="see-all">See all articles</button>

      {/* Featured Tutorials */}
      <SectionHeader title="Featured Tutorials" />
      <div className="cards">
        {tutorials.map((t) => (
          <TutorialCard key={t.id} {...t} />
        ))}
      </div>
      <button className="see-all">See all tutorials</button>

      <Footer />
    </div>
  );
}

export default App;
