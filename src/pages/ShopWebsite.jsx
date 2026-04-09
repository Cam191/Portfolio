import './ProjectPage.css'

function ShopWebsite() {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>Mock Shop Website</h1>
        <div className="tags">
          <span className="tag">Next.js</span>
          <span className="tag">React</span>
          <span className="tag">Contentful</span>
          <span className="tag">Authentication</span>
          <span className="tag">Authorization</span>
        </div>
      </div>

      <section>
        <h2>Project Information</h2>
        <p>
          A mock e-commerce website built across three iterations as part of coursework, each one 
          expanding on the last. Started with an in-code product database, swapped that for 
          Contentful as a CMS, then added a full authentication and role-based authorization system.
        </p>
        <ul>
          <li>Three user roles — admins see everything, sellers manage their own listings, users can only read and shop</li>
          <li>Contentful CMS integration with API keys stored in .env to keep credentials out of version control</li>
          <li>Route protection and redirects preventing users from accessing areas outside their role even by guessing URLs</li>
          <li>Pagination, login, logout all functional</li>
        </ul>
      </section>

      <section>
        <h2>Challenges</h2>
        <p>
          Each iteration required converting existing React code to work within Next.js, which meant rewriting parts of the system 
          that worked fine before but were incompatible with how Next.js handles rendering and routing. Errors became harder to trace 
          as the framework added layers between the code and the output.
        </p>
        <p>
          The Contentful API keys stopped being accepted partway through without any apparent cause. 
          The configuration was correct, the setup was right, and even the teacher couldn't identify 
          why it was happening. Debugging something that appears to be working but isn't is a 
          different kind of problem; there's no clear fix to work toward. The issue was never resolved.
        </p>
        <p>
          Authorization required thinking about every route from the perspective of someone trying 
          to bypass it. UI restrictions alone aren't enough; anyone who can guess a URL can skip 
          them entirely, so protection had to be enforced at the routing level.
        </p>
      </section>

      <section>
        <h2>Learned Skills</h2>
        <ul>
          <li><strong>Environment security</strong> — keeping API keys out of version control and understanding why that separation matters 
          in production</li>
          <li><strong>Role based authorization</strong> — enforcing access at the routing level so permissions can't be bypassed through the 
          URL</li>
          <li><strong>Debugging outside your control</strong> — the Contentful issue was real experience hitting a wall where the code 
          is correct and the problem is somewhere else. Knowing when to keep digging versus when to work around it is a practical skill</li>
          <li><strong>Iterative development</strong> — rebuilding parts of the same system three times as requirements changed without 
          breaking what already worked</li>
        </ul>
      </section>

      <section>
        <h2>Completed Outlook</h2>
        <p>
          Pagination, authentication, login and logout, and route protection all work correctly. The Contentful update issue was 
          never resolved; the keys stopped being accepted without a clear cause, and the problem sat outside what could be diagnosed from 
          the application side. Working within an established framework across three iterations with changing requirements is a different 
          kind of experience from building something from scratch, and that is what this project is about.
        </p>
      </section>
    </div>
  )
}

export default ShopWebsite