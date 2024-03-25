import React, { useState, useEffect } from "react";
import "./App.css";

const internsData = [
  {
    name: "Intern 1",
    learningPath: "Product Design",
    tasks: [88, 92, 85, 90],
    score: 0,
    avatarUrl:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY="
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
    avatarUrl: "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 14",
    learningPath: "Web3",
    tasks: [89, 90, 85, 88],
    score: 0,
    avatarUrl: "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 15",
    learningPath: "Web3",
    tasks: [87, 86, 91, 84],
    score: 0,
    avatarUrl: "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
  {
    name: "Intern 16",
    learningPath: "Web3",
    tasks: [92, 88, 90, 85],
    score: 0,
    avatarUrl: "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
  },
];

const App = () => {
  const [interns, setInterns] = useState([]);
  const [selectedPath, setSelectedPath] = useState("Frontend");
  const [topThree, setTopThree] = useState([]);

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
      {/* Filter Buttons */}
      <div className="buttons-container">
        {["Frontend", "Product Design", "Backend", "Web3"].map((path) => (
          <button key={path} onClick={() => handlePathFilter(path)}>
            {path}
          </button>
        ))}
      </div>

      {/* Top Three Interns Cards */}
      <div className="top-three-container">
        {topThree.length > 0 ? (
          topThree.map((intern) => (
            <div key={intern.name} className="card">
              <div className="card-info">
                <div className="position">{interns.indexOf(intern) + 1}st</div>
                <div className="avatar">
                  <img src={intern.avatarUrl} alt={intern.name} />
                </div>
                <div className="name">{intern.name}</div>
                <div className="score">
                  Score: {getFinalScore(intern.tasks)}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No interns to display</p>
        )}
      </div>

      {/* Interns Table */}
      {interns.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Avatar</th> {/* New Avatar column */}
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
                  <img className="table-img" src={intern.avatarUrl} alt={intern.name} />
                </td>{" "}
                {/* Render the avatar image using the avatarUrl property */}
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
      )}
    </div>
  );
};

export default App;
