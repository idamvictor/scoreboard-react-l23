import React, { useState, useEffect } from "react";
import "./App.css";

const internsData = [
  // Interns data array
  {
    name: "Intern 1",
    learningPath: "Product Design",
    tasks: [88, 92, 85, 90],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 2",
    learningPath: "Product Design",
    tasks: [85, 90, 88, 82],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 3",
    learningPath: "Product Design",
    tasks: [90, 92, 86, 88],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 4",
    learningPath: "Product Design",
    tasks: [87, 91, 89, 84],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },

  // Frontend Interns
  {
    name: "Intern 5",
    learningPath: "Frontend",
    tasks: [84, 88, 91, 87],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 6",
    learningPath: "Frontend",
    tasks: [89, 90, 85, 88],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 7",
    learningPath: "Frontend",
    tasks: [87, 86, 91, 84],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 8",
    learningPath: "Frontend",
    tasks: [92, 88, 90, 85],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },

  // Backend Interns
  {
    name: "Intern 9",
    learningPath: "Backend",
    tasks: [84, 88, 91, 87],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 10",
    learningPath: "Backend",
    tasks: [89, 90, 85, 88],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 11",
    learningPath: "Backend",
    tasks: [87, 86, 91, 84],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 12",
    learningPath: "Backend",
    tasks: [92, 88, 90, 85],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },

  // Web3 Interns
  {
    name: "Intern 13",
    learningPath: "Web3",
    tasks: [84, 88, 91, 87],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 14",
    learningPath: "Web3",
    tasks: [89, 90, 85, 88],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 15",
    learningPath: "Web3",
    tasks: [87, 86, 91, 84],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 16",
    learningPath: "Web3",
    tasks: [92, 88, 90, 85],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
];

const App = () => {
  const [interns, setInterns] = useState([]); // State for filtered interns
  const [selectedPath, setSelectedPath] = useState("Frontend"); // State for selected learning path
  const [topThree, setTopThree] = useState([]); // State for top three interns

  useEffect(() => {
    handlePathFilter(selectedPath);
  }, [selectedPath]);

  const handlePathFilter = (path) => {
    setSelectedPath(path);
    const filteredInterns = internsData
      .filter((intern) => intern.learningPath === path)
      .sort((a, b) => getFinalScore(b.tasks) - getFinalScore(a.tasks));
    setInterns(filteredInterns);
    setTopThree(filteredInterns.slice(0, 3));
  };

  const getFinalScore = (tasks) => {
    const total = tasks.reduce((acc, score) => acc + score, 0);
    return total / tasks.length;
  };

  return (
    <div className="container">
      <header className="header">
        <div className="container">
          <h1>Interns Dashboard</h1>
          <nav className="btns">
            <button className="btn btn-main" onClick={() => handlePathFilter("Frontend")}>
              Frontend
            </button>
            <button className="btn" onClick={() => handlePathFilter("Product Design")}>
              Product Design
            </button>
            <button className="btn" onClick={() => handlePathFilter("Backend")}>Backend</button>
            <button className="btn" onClick={() => handlePathFilter("Web3")}>Web3</button>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="top-interns">
          <div className="intern-cards">
            {topThree.length > 0 ? (
              topThree.map((intern) => (
                <article key={intern.name} className="intern-card">
                  <div className="avatar">
                    <img src={intern.avatarUrl} alt={intern.name} />
                  </div>
                  <div className="intern-info">
                    <h3>{intern.name}</h3>
                    <p>{intern.learningPath}</p>
                    <p>Score: {getFinalScore(intern.tasks)}</p>
                  </div>
                </article>
              ))
            ) : (
              <p>No interns to display</p>
            )}
          </div>
        </section>

        {interns.length > 0 && (
          <section className="interns-table">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Learning Path</th>
                  <th>Task 1</th>
                  <th>Task 2</th>
                  <th>Task 3</th>
                  <th>Task 4</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {interns.map((intern, index) => (
                  <tr key={intern.name}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        className="avatar-img"
                        src={intern.avatarUrl}
                        alt={intern.name}
                      />
                    </td>
                    <td>{intern.name}</td>
                    <td>{intern.learningPath}</td>
                    {intern.tasks.map((taskScore, taskIndex) => (
                      <td key={taskIndex}>{taskScore}</td>
                    ))}
                    <td>{getFinalScore(intern.tasks)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
