import { Link } from 'react-router-dom'
import './Home.css'

const projects = [
  {
    title: "Networked Card Game",
    description: "A server authoritative 2 faction battle card game playable across networks.",
    path: "/cardgame",
    tags: ["Unity", "Networking", "C#", "Server Authoritative", "NGO"]
  },
  {
    title: "Group Database",
    description: "Led a team to complete a fully constrained relational database in 2 hours of a 2 month deadline.",
    path: "/group-database",
    tags: ["SQL", "Leadership", "Database Design", "Client Communications", "4NF"]
  },
  {
    title: "Solo Database",
    description: "Designed a 10 table PostgreSQL database for non-technical users with full constraint protection.",
    path: "/solo-database",
    tags: ["PostgreSQL", "Schema Design", "Foreign Keys", "Data Visualization", "Client Communication"]
  },
  {
    title: "Shop Website",
    description: "A mock e-commerce website built with Next.js, React, and Contentful.",
    path: "/website",
    tags: ["Next.js", "React", "Contentful", "Authentication", "Authorization"]
  },
  {
    title: "Phone Game",
    description: "A solo mobile game featuring A* pathfinding, projectiles, and timed effects.",
    path: "/phonegame",
    tags: ["Kotlin", "Mobile", "Game Design", "A* Pathfinding", "Android"]
  }
]

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <h1>Cameron Allen</h1>
        <p className="intro-sub">Computer Science Student · Builder of things that surprisingly work</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <Link to={project.path} key={project.path} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home