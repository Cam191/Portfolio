import './ProjectPage.css'

function CardGame() {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>Networked Card Game</h1>
        <div className="tags">
          <span className="tag">Unity</span>
          <span className="tag">Networking</span>
          <span className="tag">C#</span>
          <span className="tag">Server Authoritative</span>
          <span className="tag">NGO</span>
        </div>
      </div>

      <section>
        <h2>Project Information</h2>
        <p>
          A server-authoritative multiplayer card battler built in Unity. Two players connect to a server hosted by one of them 
          and play across an 11-column board, each controlling three rows of units: frontline, ranged, and reinforcements. Placement 
          decisions matter because reinforcements fill the frontline before ranged units are pushed forward, and frontline units can 
          flank unblocked enemies with the defender countering at half strength if they survive.
        </p>
        <ul>
          <li>Movement, combat, flanking, ranged attacks, and blocking</li>
          <li>Income generation and server driven card handling</li>
          <li>Unit revival and full board state synchronization</li>
          <li>Subscription based ability and passive system for easy addition and removal of effects</li>
          <li>Designed for extension — new factions and abilities slot in without touching existing systems</li>
        </ul>
      </section>

      <section>
        <h2>Challenges</h2>
        <p>
          The game initially appeared to work, but only because the host was performing all actions. A full rewrite moved 
          everything server-side and restricted clients to their own RPC calls only.
        </p>
        <p>
          Mirror was swapped for NGO to remove the port forwarding requirement for external play. NGO is stricter about 
          network boundaries; everything crossing the membrane needs a guaranteed size, which breaks the string-based coordinate 
          system. Strings were converted to FixedString64Bytes throughout, and networked variables needed explicit value accessors 
          added everywhere.
        </p>
        <p>
          The ability system used a subscription model so effects could be registered and removed 
          without knowing where else they trigger, keeping the system readable as it scaled.
        </p>
      </section>

      <section>
        <h2>Learned Skills</h2>
        <ul>
          <li><strong>System planning</strong> — Designing around client-server boundaries from the start, rather than discovering them 
          as problems later</li>
          <li><strong>Scalability in practice</strong> — A full faction with 20 cards was added in about 4 hours, with ~80% of abilities 
          working on the first attempt, several requiring changes to existing systems</li>
          <li><strong>Networking fundamentals</strong> — Working through two libraries and their constraints built practical 
          understanding that theory alone doesn't give you</li>
        </ul>
      </section>

      <section>
        <h2>Completed Outlook</h2>
        <p>
          Fully playable without issues, tested across real networks between Canada and the US with 
          no lag or desync. New content extends cleanly without reworking existing systems. 
          The one thing it lacks is art; the systems underneath are built correctly, and that is what this project is about.
        </p>
      </section>
    </div>
  )
}

export default CardGame