import './ProjectPage.css'

function PhoneGame() {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>Mobile Dungeon Crawler</h1>
        <div className="tags">
          <span className="tag">Kotlin</span>
          <span className="tag">Mobile</span>
          <span className="tag">Game Design</span>
          <span className="tag">A* Pathfinding</span>
          <span className="tag">Android</span>
        </div>
      </div>

      <section>
        <h2>Project Information</h2>
        <p>
          A mobile dungeon crawler built as a course final project, pushing scope beyond a typical 
          web application by building a game instead. Players clear rooms of enemies using a three-card 
          hand; playing any card redraws the full hand randomly. The project was mostly solo 
          in practice, with the group contributing menus and character creation while the core game 
          was built and maintained by one person.
        </p>
        <ul>
          <li>Tile based movement and A* enemy pathfinding</li>
          <li>Projectile attacks, instant attacks, and delayed effects</li>
          <li>Layered tile indicators that don't overlap or overwrite each other</li>
          <li>Randomized card hands with full redraw on use</li>
          <li>Approximately 90% final grade</li>
        </ul>
      </section>

      <section>
        <h2>Challenges</h2>
        <p>
          A* pathfinding required a lot of debugging to work correctly in practice. Walls needed 
          blockers, then doors, then enemies stacking on the same tile, then melee enemies walking 
          directly onto the player when their attack was on cooldown. Marking the player tile as 
          unwalkable fixed the stacking but broke attacking entirely; resolved by having enemies 
          skip their movement turn when the only available move would be onto the player.
        </p>
        <p>
          Everything lived in one large file with functions jumping between concerns depending on 
          what problem was being solved at the time. Attacks were implemented narrowly rather than 
          with any reusability in mind, meaning a new function was needed for every attack type. 
          By the time teammates wanted to help the codebase was too large and tangled to read.
        </p>
        <p>
          Assuming the group would stay engaged because the idea was fun turned out to be wrong. 
          By the time they wanted to get involved, the base game was essentially done, and the code 
          was unreadable. Different people need different things to stay engaged, and it's the leader's 
          job to work with that rather than assume enthusiasm is shared.
        </p>
      </section>

      <section>
        <h2>Learned Skills</h2>
        <ul>
          <li><strong>Code organization</strong> — a single oversized file that jumps between concerns is unreadable to anyone but the person who wrote it, and eventually to them too. Every project since has split responsibilities across classes and files based on what each piece actually needs to know</li>
          <li><strong>Designing for reusability</strong> — narrow implementations compound into an unmaintainable mess at scale. This directly informed the card game's subscription based ability system, where a full faction with 20 cards was added in a few hours</li>
          <li><strong>Leading different kinds of people</strong> — enthusiasm for an idea is not contagious by default. Keeping a group moving requires understanding what motivates each person, not assuming they share your priorities</li>
        </ul>
      </section>

      <section>
        <h2>Completed Outlook</h2>
        <p>
          Fully playable with functional movement, enemy AI, card combat, and attacks. The codebase is not something that could be easily 
          handed to someone else or extended without significant refactoring, but that limitation is exactly what shaped how every 
          subsequent project was built. The card game in particular was designed from the start to be extended, and that paid off in 
          practice. This project matters less for what it is and more for what it changed about how the next ones were built.
        </p>
      </section>
    </div>
  )
}

export default PhoneGame