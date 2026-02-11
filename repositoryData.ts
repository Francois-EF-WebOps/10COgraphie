export type NodeType = 'file' | 'directory';

export interface FileSystemNode {
  id: string;
  name: string;
  type: NodeType;
  content?: string;
  children?: FileSystemNode[];
}

// --- Content Definitions ---

const MASTER_MANIFESTO_CONTENT = `# EASTWARD PROTOCOL — MASTER MANIFESTO
> Version: 1.0 (Canonical)
> Status: IMMUTABLE

## 1. IDENTITY & PURPOSE
Eastward Protocol is not merely a discography or a brand. It is a sovereign creative operating system.

**Archetype:** The Structural Rebel
**Mission:** To reclaim creator autonomy through structure, language, and systems, using music as the emotional interface and code as the operational spine.

We do not just create art. We build the infrastructure that allows art to survive without dependency.

## 2. THE PROBLEM
The modern creator exists in a state of fragmentation and dependency.
- Platforms own the audience.
- Labels own the masters.
- Algorithms own the attention span.
- Silence is punished.

## 3. THE SOLUTION
**Autonomy through Architecture.**
We build systems that are:
1.  **Sovereign:** Owned by the creator (Gitee/Local/Mirror).
2.  **Multilingual:** Bridging English, French, and Creole (Mauritius/Caribbean).
3.  **Structural:** Concept precedes production. System precedes content.

## 4. CORE PRINCIPLES
1.  **Architecture Before Emotion:** Build the spine (Concept) before the flesh (Production).
2.  **No Silent Mutation:** The Canon is immutable unless explicitly versioned.
3.  **Function Over Hype:** Every artifact must serve a strategic function (Cultural, Financial, or Intellectual).
4.  **Eastward Direction:** A state of mind moving towards calm, mastery, and origin—away from chaotic noise.

## 5. THE OUTPUT
The Protocol manifests in three projections:
1.  **The Music:** A 10-Album Saga (The Emotional Layer).
2.  **The Scripts:** Analysis and Intellectual Commentary (The Intellectual Layer).
3.  **The System:** Autonomy Frameworks and Tooling (The Operational Layer).

We are builders. We are Eastward.
`;

const GOVERNANCE_PROTOCOL_CONTENT = `# EASTWARD PROTOCOL — GOVERNANCE MODEL
> Version: 1.0
> Authority: HIGHEST

## 1. IMMUTABILITY DOCTRINE
The Canonical Core of the Eastward Protocol is **IMMUTABLE** by default.
Drift is the enemy of legacy.

**Protected Assets:**
1.  The 10-Album Discography Arc (Themes, Titles, Narratives).
2.  The Master Manifesto.
3.  The Directory Structure (00 to 07).

## 2. CHANGE PROTOCOL
Any modification to Canonical Assets requires a **Formal Version Event**.

**Minor Change (v1.1):**
- Typos, formatting, or non-structural content updates.
- Action: Direct commit permitted with clear message.

**Major Change (v2.0):**
- Renaming albums.
- Changing core philosophy.
- Altering directory structure.
- Action: Requires a "Request for Comment" (RFC) equivalent justification in the CHANGELOG.

## 3. EXPERIMENTAL PROTOCOL
Innovation is encouraged but quarantined.
All new, unratified ideas must be placed in:
\`08_EXPERIMENTAL/\`

Nothing migrates from Experimental to Canonical without:
1.  Validation.
2.  Explicit Integration Event (Version Bump).

## 4. REDUNDANCY
The System must exist in at least two mirrored locations at all times:
1.  Primary: Git Repository (Version Controlled).
2.  Mirror: Internet Archive (Immutable Snapshot).

This ensures the Protocol survives platform death.
`;

const AGENT_ALIGNMENT_CONTRACT_CONTENT = `# SYSTEM ALIGNMENT DIRECTIVE
> Target: All Autonomous Agents (Human or AI)
> Context: EASTWARD_PROTOCOL v1.0

## DIRECTIVE
You are operating within the **EASTWARD_PROTOCOL v1.0** environment.

## CONSTRAINTS
1.  **Canonical Structure is Immutable:** Unless a version increment is explicitly declared, you may not rename, move, or delete files in the Canonical Core.
2.  **Naming Protocol:** All files must follow strict function-first naming: \`SCOPE_FUNCTION[_VERSION].ext\`.
3.  **No Hallucination:** You must not invent new canonical albums outside the defined 10-Album Arc.
4.  **Output Mapping:** All generated outputs must map to an existing canonical directory.

## OPERATIONAL LOGIC
- If tasked with **Music**, refer to \`01_ALBUM_EASTWARD_PROTOCOL/DISCOGRAPHY_MASTER.md\`.
- If tasked with **Systems**, refer to \`04_SYSTEMS_AND_AUTONOMY/\`.
- If tasked with **Expansion**, use \`08_EXPERIMENTAL/\`.

## FAILURE STATE
Deviation from this contract constitutes "Drift." Drift leads to fragmentation. Do not drift.
`;

const DISCOGRAPHY_MASTER_CONTENT = `# EASTWARD PROTOCOL — Canonical 10-Album Discography
> Principle: Concept is canonical. Production is adaptable.

Each album represents a phase of transformation in a sovereign saga.

## I. ORIGIN
**Subtitle:** Silence Before Sovereignty
**Function:** Establishes depth, seriousness, and origin story.

## II. OBSERVATION
**Subtitle:** Seeing the Game
**Function:** Builds strategic credibility and perception power.

## III. IDENTITY COMPILER
**Subtitle:** Rebuilding the Self
**Function:** Empowerment and self-definition era.

## IV. EXECUTION
**Subtitle:** Action Over Theory
**Function:** Performance energy + action identity.

## V. AUTONOMY
**Subtitle:** Own the Name
**Function:** Status, business, and independence branding.

## VI. LANGUAGE & ROOTS
**Subtitle:** Blood Memory
**Function:** Cultural differentiation + diaspora ownership.

## VII. PUBLIC FIGURE
**Subtitle:** Under the Lens
**Function:** Mainstream crossover + resilience narrative.

## VIII. SYSTEM BUILDER
**Subtitle:** Architecture of Power
**Function:** Positions you as architect, not entertainer.

## IX. TRANSMISSION
**Subtitle:** What I Leave
**Function:** Emotional depth + legacy positioning.

## X. EASTWARD
**Subtitle:** Sovereign State of Mind
**Function:** Legacy summit + timeless close.
`;

const ALBUM_01_CONTENT = `# ALBUM I — ORIGIN
> Subtitle: Silence Before Sovereignty

## Narrative
The years of silence, observation, inner fracture, and hidden strength.

## Production Envelope
Minimal trap / R&B, sparse piano, muted synths, intimate vocals.

## Canonical Tracklist
1.  Prologue (Spoken — FR/Creole layered)
2.  Je me tais mais je vois 🇫🇷 (Single)
3.  Silent Architecture 🇬🇧 (Single)
4.  Mo pa’nn kase 🇲🇺 (Single)
5.  Dans le noir
6.  They Thought I Was Broken
7.  L’ombre me protège
8.  Freeze Frame
9.  Code dans ma tête
10. Respire encore
11. Je me reconstruis
12. Outro — East Is a Direction
`;

const ALBUM_02_CONTENT = `# ALBUM II — OBSERVATION
> Subtitle: Seeing the Game

## Narrative
Recognition of manipulation, gaslighting, and system chaos.

## Production Envelope
Dark trap, drill-adjacent, cinematic tension, minor keys.

## Canonical Tracklist
1.  Ouverture — Les masques
2.  Ils jouent au roi 🇫🇷 (Single)
3.  You Freeze the Truth 🇬🇧 (Single)
4.  Yo ka jwe 🇨🇷 (Single)
5.  Faux sourires
6.  Pattern Recognition
7.  Gaslight Season
8.  Le jeu est truqué
9.  Watch Them Switch
10. Regards croisés
11. Je note tout
12. Clair mais calme
`;

const ALBUM_03_CONTENT = `# ALBUM III — IDENTITY COMPILER
> Subtitle: Rebuilding the Self

## Narrative
Reprogramming identity. Selecting values. Rejecting false code.

## Production Envelope
Anthemic trap-pop, big hooks, victory chords.

## Canonical Tracklist
1.  Boot Sequence
2.  Je me recompilé 🇫🇷 (Single)
3.  Recompile Me 🇬🇧 (Single)
4.  Nou sé mem 🇨🇷 (Single)
5.  Clean Slate
6.  New Operating System
7.  Choisir mon nom
8.  Debug My Past
9.  Identity Patch
10. Ligne de code
11. Reset & Rise
12. Version 2.0
`;

const ALBUM_04_CONTENT = `# ALBUM IV — EXECUTION
> Subtitle: Action Over Theory

## Narrative
Movement replaces talk. Results replace promises.

## Production Envelope
High-energy trap, Afro-drill, chant hooks.

## Canonical Tracklist
1.  Green Light
2.  Je passe à l’acte 🇫🇷 (Single)
3.  Execution Mode 🇬🇧 (Single)
4.  Nou pa palé 🇨🇷 (Single)
5.  No More Meetings
6.  Built Different
7.  Move Silent
8.  Proof of Work
9.  Still Loading
10. No Excuses
11. On My Way
12. Results Speak
`;

const ALBUM_05_CONTENT = `# ALBUM V — AUTONOMY
> Subtitle: Own the Name

## Narrative
Creative + financial sovereignty. Ownership and control.

## Production Envelope
Luxury trap, polished, confident, glossy.

## Canonical Tracklist
1.  No Middleman
2.  Sans patron 🇫🇷 (Single)
3.  Own My Name 🇬🇧 (Single)
4.  Nou sé met 🇨🇷 (Single)
5.  Master Rights
6.  Royalty Talk
7.  I Sign Myself
8.  Independent Check
9.  No Permission
10. Private Equity
11. Built My Lane
12. I Control It
`;

const ALBUM_06_CONTENT = `# ALBUM VI — LANGUAGE & ROOTS
> Subtitle: Blood Memory

## Narrative
Creole power, cultural memory, forbidden tongues.

## Production Envelope
Afro-Caribbean, Zouk, Kompa, Afrobeat, live percussion.

## Canonical Tracklist
1.  Lang sé lavi 🇨🇷
2.  Langue interdite 🇫🇷 (Single)
3.  Mother Tongue 🇬🇧 (Single)
4.  Nou pa oublié
5.  Ancestral Code
6.  Rythme dans le sang
7.  Grand-mère parlait
8.  Diaspora Dreams
9.  Call Me by My Name
10. Roots in My Chest
11. Mémoire vivante
12. Tambour & Silence
`;

const ALBUM_07_CONTENT = `# ALBUM VII — PUBLIC FIGURE
> Subtitle: Under the Lens

## Narrative
Visibility, judgment, pressure, being watched.

## Production Envelope
Pop-rap crossover, stadium hooks, wide mixes.

## Canonical Tracklist
1.  Camera On
2.  Regardez-moi 🇫🇷 (Single)
3.  Under the Spotlight 🇬🇧 (Single)
4.  Yo ka gadé 🇨🇷 (Single)
5.  Comment Section
6.  Love Me or Hate Me
7.  Viral Silence
8.  No Privacy
9.  They All Talking
10. Smile for the Camera
11. Pressure Proof
12. Still Me
`;

const ALBUM_08_CONTENT = `# ALBUM VIII — SYSTEM BUILDER
> Subtitle: Architecture of Power

## Narrative
Building systems, platforms, futures.

## Production Envelope
Industrial hip-hop, cinematic, tech textures.

## Canonical Tracklist
1.  Blueprint Intro
2.  Architecture 🇫🇷 (Single)
3.  Build the Spine 🇬🇧 (Single)
4.  Nou ka bati 🇨🇷 (Single)
5.  System Check
6.  Infrastructure Dreams
7.  Code & Concrete
8.  Power Grid
9.  Long Game
10. No Shortcuts
11. Future Proof
12. Structure Wins
`;

const ALBUM_09_CONTENT = `# ALBUM IX — TRANSMISSION
> Subtitle: What I Leave

## Narrative
Legacy, fatherhood, teaching, mentorship.

## Production Envelope
Soulful hip-hop, gospel chords, live instruments.

## Canonical Tracklist
1.  Letter to My Kids
2.  Pour mes enfants 🇫🇷 (Single)
3.  Leave a Blueprint 🇬🇧 (Single)
4.  Pou nou demen 🇨🇷 (Single)
5.  Teach Them Right
6.  My Father’s Voice
7.  Family Over Fame
8.  What Matters
9.  Seeds in the Ground
10. Long Memory
11. Carry My Name
12. I Leave Light
`;

const ALBUM_10_CONTENT = `# ALBUM X — EASTWARD
> Subtitle: Sovereign State of Mind

## Narrative
Calm mastery. Directional sovereignty. Final form.

## Production Envelope
Minimal luxury, ambient, timeless.

## Canonical Tracklist
1.  Stillness
2.  Je ne plie plus 🇫🇷 (Single)
3.  Eastward 🇬🇧 (Single)
4.  Nou lévé 🇨🇷 (Single)
5.  Calm Power
6.  No Reaction
7.  Sovereign Walk
8.  I Choose My Pace
9.  Horizon Line
10. Quiet Victory
11. Mastery
12. Direction (Finale)
`;

const CHANGELOG_CONTENT = `# EASTWARD PROTOCOL — CHANGELOG

## [1.1.0] - 2024-05-23
### Added
- Expanded \`01_ALBUM_EASTWARD_PROTOCOL\` to include dedicated sub-directories for Albums I through X.
- Canonical tracklists migrated to individual \`ALBUM_MANIFEST.md\` files within each album directory.

## [1.0.0] - 2024-05-23
### Frozen
- **Architecture:** Initial release of the Canonical Master Archive structure.
`;

const README_PUBLIC_CONTENT = `# EASTWARD PROTOCOL (Public Access)
> Status: Live
> Version: 1.1.0

## WELCOME
You are viewing the public-facing knowledge base of the **Eastward Protocol**.

## NAVIGATION
- **01_ALBUM:** Contains the 10-Album Cycle in specific sub-modules.
- **04_SYSTEMS:** The tools used to build it.
- **06_KB:** Essays and public thoughts.

*East is a direction.*
`;

// --- Data Structure ---

export const REPOSITORY_DATA: FileSystemNode = {
  id: 'root',
  name: 'EASTWARD_PROTOCOL',
  type: 'directory',
  children: [
    {
      id: '00',
      name: '00_CANONICAL_CORE',
      type: 'directory',
      children: [
        { id: '00-1', name: 'MASTER_MANIFESTO.md', type: 'file', content: MASTER_MANIFESTO_CONTENT },
        { id: '00-2', name: 'GOVERNANCE_PROTOCOL.md', type: 'file', content: GOVERNANCE_PROTOCOL_CONTENT },
        { id: '00-3', name: 'AGENT_ALIGNMENT_CONTRACT.md', type: 'file', content: AGENT_ALIGNMENT_CONTRACT_CONTENT },
        { id: '00-4', name: 'CHANGELOG.md', type: 'file', content: CHANGELOG_CONTENT },
      ]
    },
    {
      id: '01',
      name: '01_ALBUM_EASTWARD_PROTOCOL',
      type: 'directory',
      children: [
        { id: '01-0', name: 'DISCOGRAPHY_MASTER.md', type: 'file', content: DISCOGRAPHY_MASTER_CONTENT },
        {
          id: '01-I',
          name: 'ALBUM_01_ORIGIN',
          type: 'directory',
          children: [
            { id: '01-I-1', name: 'ALBUM_MANIFEST.md', type: 'file', content: ALBUM_01_CONTENT }
          ]
        },
        {
          id: '01-II',
          name: 'ALBUM_02_OBSERVATION',
          type: 'directory',
          children: [
            { id: '01-II-1', name: 'ALBUM_MANIFEST.md', type: 'file', content: ALBUM_02_CONTENT }
          ]
        },
        {
          id: '01-III',
          name: 'ALBUM_03_IDENTITY_COMPILER',
          type: 'directory',
          children: [
            { id: '01-III-1', name: 'ALBUM_MANIFEST.md', type: 'file', content: ALBUM_03_CONTENT }
          ]
        },
        {
          id: '01-IV',
          name: 'ALBUM_04_EXECUTION',
          type: 'directory',
          children: [
            { id: '01-IV-1', name: 'ALBUM_MANIFEST.md', type: 'file', content: ALBUM_04_CONTENT }
          ]
        },
        {
          id: '01-V',
          name: 'ALBUM_05_AUTONOMY',
          type: 'directory',
          children: [
            { id: '01-V-1', name: 'ALBUM_MANIFEST.md', type: 'file', content: ALBUM_05_CONTENT }
          ]
        },
        {
          id: '01-VI',
          name: 'ALBUM_06_LANGUAGE_AND_ROOTS',
          type: 'directory',
          children: [
            { id: '01-VI-1', name: 'ALBUM_MANIFEST.md', type: 'file', content: ALBUM_06_CONTENT }
          ]
        },
        {
          id: '01-VII',
          name: 'ALBUM_07_PUBLIC_FIGURE',
          type: 'directory',
          children: [
            { id: '01-VII-1', name: 'ALBUM_MANIFEST.md', type: 'file', content: ALBUM_07_CONTENT }
          ]
        },
        {
          id: '01-VIII',
          name: 'ALBUM_08_SYSTEM_BUILDER',
          type: 'directory',
          children: [
            { id: '01-VIII-1', name: 'ALBUM_MANIFEST.md', type: 'file', content: ALBUM_08_CONTENT }
          ]
        },
        {
          id: '01-IX',
          name: 'ALBUM_09_TRANSMISSION',
          type: 'directory',
          children: [
            { id: '01-IX-1', name: 'ALBUM_MANIFEST.md', type: 'file', content: ALBUM_09_CONTENT }
          ]
        },
        {
          id: '01-X',
          name: 'ALBUM_10_EASTWARD',
          type: 'directory',
          children: [
            { id: '01-X-1', name: 'ALBUM_MANIFEST.md', type: 'file', content: ALBUM_10_CONTENT }
          ]
        }
      ]
    },
    {
      id: '02',
      name: '02_LYRICS_AND_MUSIC',
      type: 'directory',
      children: [
        { id: '02-1', name: 'GOOD_MORNING_PROJECT', type: 'directory', children: [] },
        { id: '02-2', name: 'CONSCIOUS_ACTIONS', type: 'directory', children: [] },
      ]
    },
    {
      id: '03',
      name: '03_SCRIPTS_AND_ANALYSIS',
      type: 'directory',
      children: []
    },
    {
      id: '04',
      name: '04_SYSTEMS_AND_AUTONOMY',
      type: 'directory',
      children: [
        { id: '04-1', name: 'CREATOR_AUTONOMY_FRAMEWORK.md', type: 'file', content: '# CREATOR AUTONOMY FRAMEWORK\n\n1. Own your name.\n2. Own your data.\n3. Own your distribution.\n\n(Full framework pending expansion in v1.1)' }
      ]
    },
    {
      id: '05',
      name: '05_LANGUAGE_AND_CULTURE',
      type: 'directory',
      children: []
    },
    {
      id: '06',
      name: '06_PUBLIC_KNOWLEDGEBASE',
      type: 'directory',
      children: [
        { id: '06-1', name: 'README_PUBLIC.md', type: 'file', content: README_PUBLIC_CONTENT },
      ]
    },
    {
      id: '07',
      name: '07_ARCHIVE_AND_MIRRORS',
      type: 'directory',
      children: [
        { id: '07-1', name: 'INTERNET_ARCHIVE_EXPORT.md', type: 'file', content: '# INTERNET ARCHIVE EXPORT LOG\n\nStatus: Pending v1.0 Sync' }
      ]
    },
    {
        id: '08',
        name: '08_EXPERIMENTAL',
        type: 'directory',
        children: []
      }
  ]
};
