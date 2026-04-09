import './ProjectPage.css'

function GroupDatabase() {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>Group Database Project</h1>
        <div className="tags">
          <span className="tag">SQL</span>
          <span className="tag">Leadership</span>
          <span className="tag">Database Design</span>
          <span className="tag">Client Communications</span>
          <span className="tag">4NF</span>
        </div>
      </div>

      <section>
        <h2>Project Information</h2>
        <p>
          A semester-long group project building a fully normalized relational database for a not-for-profit car show 
          organization. Built with a team of four, working directly with a client to gather requirements across multiple 
          graded checkpoints.
        </p>
        <ul>
          <li>15–20 tables normalized to fourth normal form (4NF)</li>
          <li>Modeled teams, participants, corporate sponsors, prize donors, and merchandise</li>
          <li>Role based access so admins and team managers could only interact with their relevant data</li>
          <li>Insertion order planned to prevent foreign key violations across all operations</li>
        </ul>
      </section>

      <section>
        <h2>Challenges</h2>
        <p>
          Joined the class two weeks late to find the group hadn't met yet, with the first checkpoint 
          three days away. Leadership was established immediately; workload was split based on who responded 
          quickly and who didn't, with larger portions going to those who seemed dependable.
        </p>
        <p>
          The night before the first checkpoint, one member submitted AI-generated documentation without properly 
          reviewing it, including a section on shareholder value for a not-for-profit. Rather than starting over with 
          no time left, the unusable parts were cut, and missing information was added to get it to a passable standard.
        </p>
        <p>
          Requirements came from the client in pieces throughout the semester, which meant constantly 
          asking the right questions, translating vague organizational needs into concrete schema 
          decisions, and feeding the relevant parts to the team so they could work without needing 
          to understand the whole picture.
        </p>
      </section>

      <section>
        <h2>Learned Skills</h2>
        <ul>
          <li><strong>Delegation under uncertainty</strong> — distributing work to people of unknown reliability and adjusting expectations based on early signals rather than waiting for problems to appear</li>
          <li><strong>Client communication</strong> — extracting complete requirements from a client who provides information incrementally and knowing what questions to ask to get there</li>
          <li><strong>Leading from a position of competence</strong> — owning the database completely freed up mental space to manage the group effectively, a direct lesson from the phone game project where leading while uncertain created problems</li>
        </ul>
      </section>

      <section>
        <h2>Completed Outlook</h2>
        <p>
          Presented successfully and graded highly. The database was completed at roughly 95% of requirements within two hours of starting 
          it; the rest was a minor normalization detail. The website integration worked but wasn't fully complete, and in hindsight, getting 
          involved with that team earlier would have closed the gap, given how quickly the database portion was done. After the first 
          checkpoint scramble every deliverable was submitted early and reviewed before sending.
        </p>
      </section>
    </div>
  )
}

export default GroupDatabase