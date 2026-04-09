import './ProjectPage.css'

function SoloDatabase() {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>Hospital Delay Research Database</h1>
        <div className="tags">
          <span className="tag">PostgreSQL</span>
          <span className="tag">Schema Design</span>
          <span className="tag">Foreign Keys</span>
          <span className="tag">Data Visualization</span>
          <span className="tag">Client Communication</span>
        </div>
      </div>

      <section>
        <h2>Project Information</h2>
        <p>
          A PostgreSQL database built for two students conducting a university research study on 
          hospital delays. The clients had no database experience and had initially planned to use 
          Excel; the database replaced that with a system they could operate safely without SQL knowledge.
        </p>
        <ul>
          <li>10 tables total — 2 client facing, 8 lookup tables enforcing foreign key constraints</li>
          <li>Lookup tables controlled all repeatable inputs to prevent misspelling and duplication</li>
          <li>Date system built in from the start so errors could be isolated by time rather than guessed at</li>
          <li>All lookup table additions went through a single point of contact to prevent conflicting entries</li>
          <li>Final deliverables included structured exports, CSV files, and graphs using joins and subqueries</li>
        </ul>
      </section>

      <section>
        <h2>Challenges</h2>
        <p>
          The clients had no clear idea what they needed to measure when the project started. Rather than waiting for 
          complete requirements, the database was built around what was certain: dates and basic categorization, with 
          the constraint system designed to accommodate new categories as requirements became clearer without touching 
          existing data.
        </p>
        <p>
          The two clients didn't always communicate with each other before entering data. A naming 
          conflict surfaced partway through that could have created ambiguous records; the date system 
          made it possible to isolate and fix the affected entries cleanly. In hindsight, establishing 
          a shared naming convention before data collection began would have prevented it entirely.
        </p>
        <p>
          Some of the requested outputs couldn't be pulled with a simple select; calculated values 
          had to be derived first before further filtering could be applied, requiring subqueries 
          to get the data into a usable form.
        </p>
      </section>

      <section>
        <h2>Learned Skills</h2>
        <ul>
          <li><strong>Extracting requirements from non-technical clients</strong> — working with people who have a vague goal but no idea how to quantify it requires making structural decisions on their behalf early and adapting as clarity develops</li>
          <li><strong>Defensive schema design</strong> — 8 lookup tables enforcing foreign key constraints meant non-technical users collected over 1000 rows without data loss</li>
          <li><strong>Information flow control</strong> — deciding what clients can do themselves versus what should be gatekept is a real design decision with tradeoffs, controlling lookup additions prevented duplicates but created a bottleneck</li>
        </ul>
      </section>

      <section>
        <h2>Completed Outlook</h2>
        <p>
          The study was completed successfully, and the clients received a good mark. The database 
          stayed stable throughout, with the one naming conflict caught and corrected cleanly 
          without data loss. Working with real clients on a live database over several months, 
          under vague and evolving requirements, is a different experience from a classroom assignment, 
          and that is what this project is about.
        </p>
      </section>
    </div>
  )
}

export default SoloDatabase