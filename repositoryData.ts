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

// --- Album Data Helpers ---

const createTrackFile = (id: string, index: number, title: string, meta: string = '') => ({
  id,
  name: `${index.toString().padStart(2, '0')}_${title.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase()}.md`,
  type: 'file' as const,
  content: `# ${title}\n\n> Track: ${index}\n> Canonical ID: ${id}\n\n## Status\nConcept Locked. Production Pending.\n\n## Notes\n${meta}`
});

const ALBUM_1_TRACKS = [
  "Prologue", "Je me tais mais je vois", "Silent Architecture", "Mo pa'nn kase", "Dans le noir",
  "They Thought I Was Broken", "L'ombre me protège", "Freeze Frame", "Code dans ma tête",
  "Respire encore", "Je me reconstruis", "Outro - East Is a Direction"
];

const ALBUM_2_TRACKS = [
  "Ouverture - Les masques", "Ils jouent au roi", "You Freeze the Truth", "Yo ka jwe",
  "Faux sourires", "Pattern Recognition", "Gaslight Season", "Le jeu est truqué",
  "Watch Them Switch", "Regards croisés", "Je note tout", "Clair mais calme"
];

const ALBUM_3_TRACKS = [
  "Boot Sequence", "Je me recompilé", "Recompile Me", "Nou sé mem",
  "Clean Slate", "New Operating System", "Choisir mon nom", "Debug My Past",
  "Identity Patch", "Ligne de code", "Reset & Rise", "Version 2.0"
];

const ALBUM_4_TRACKS = [
  "Green Light", "Je passe à l'acte", "Execution Mode", "Nou pa palé",
  "No More Meetings", "Built Different", "Move Silent", "Proof of Work",
  "Still Loading", "No Excuses", "On My Way", "Results Speak"
];

const ALBUM_5_TRACKS = [
  "No Middleman", "Sans patron", "Own My Name", "Nou sé met",
  "Master Rights", "Royalty Talk", "I Sign Myself", "Independent Check",
  "No Permission", "Private Equity", "Built My Lane", "I Control It"
];

const ALBUM_6_TRACKS = [
  "Lang sé lavi", "Langue interdite", "Mother Tongue", "Nou pa oublié",
  "Ancestral Code", "Rythme dans le sang", "Grand-mère parlait", "Diaspora Dreams",
  "Call Me by My Name", "Roots in My Chest", "Mémoire vivante", "Tambour & Silence"
];

const ALBUM_7_TRACKS = [
  "Camera On", "Regardez-moi", "Under the Spotlight", "Yo ka gadé",
  "Comment Section", "Love Me or Hate Me", "Viral Silence", "No Privacy",
  "They All Talking", "Smile for the Camera", "Pressure Proof", "Still Me"
];

const ALBUM_8_TRACKS = [
  "Blueprint Intro", "Architecture", "Build the Spine", "Nou ka bati",
  "System Check", "Infrastructure Dreams", "Code & Concrete", "Power Grid",
  "Long Game", "No Shortcuts", "Future Proof", "Structure Wins"
];

const ALBUM_9_TRACKS = [
  "Letter to My Kids", "Pour mes enfants", "Leave a Blueprint", "Pou nou demen",
  "Teach Them Right", "My Father's Voice", "Family Over Fame", "What Matters",
  "Seeds in the Ground", "Long Memory", "Carry My Name", "I Leave Light"
];

const ALBUM_10_TRACKS = [
  "Stillness", "Je ne plie plus", "Eastward", "Nou lévé",
  "Calm Power", "No Reaction", "Sovereign Walk", "I Choose My Pace",
  "Horizon Line", "Quiet Victory", "Mastery", "Direction (Finale)"
];

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
        { id: '00-3', name: 'CHANGELOG.md', type: 'file', content: '# CHANGELOG\n\n## [1.2.0]\n- Exploded album directories into track-level files.' },
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
            { id: '01-I-0', name: 'MANIFEST.md', type: 'file', content: '# Album I: ORIGIN\nStatus: Canonical' },
            ...ALBUM_1_TRACKS.map((t, i) => createTrackFile(`01-I-${i+1}`, i + 1, t))
          ]
        },
        {
          id: '01-II',
          name: 'ALBUM_02_OBSERVATION',
          type: 'directory',
          children: [
            { id: '01-II-0', name: 'MANIFEST.md', type: 'file', content: '# Album II: OBSERVATION\nStatus: Canonical' },
            ...ALBUM_2_TRACKS.map((t, i) => createTrackFile(`01-II-${i+1}`, i + 1, t))
          ]
        },
        {
          id: '01-III',
          name: 'ALBUM_03_IDENTITY_COMPILER',
          type: 'directory',
          children: [
            { id: '01-III-0', name: 'MANIFEST.md', type: 'file', content: '# Album III: IDENTITY COMPILER\nStatus: Canonical' },
            ...ALBUM_3_TRACKS.map((t, i) => createTrackFile(`01-III-${i+1}`, i + 1, t))
          ]
        },
        {
          id: '01-IV',
          name: 'ALBUM_04_EXECUTION',
          type: 'directory',
          children: [
            { id: '01-IV-0', name: 'MANIFEST.md', type: 'file', content: '# Album IV: EXECUTION\nStatus: Canonical' },
            ...ALBUM_4_TRACKS.map((t, i) => createTrackFile(`01-IV-${i+1}`, i + 1, t))
          ]
        },
        {
          id: '01-V',
          name: 'ALBUM_05_AUTONOMY',
          type: 'directory',
          children: [
            { id: '01-V-0', name: 'MANIFEST.md', type: 'file', content: '# Album V: AUTONOMY\nStatus: Canonical' },
            ...ALBUM_5_TRACKS.map((t, i) => createTrackFile(`01-V-${i+1}`, i + 1, t))
          ]
        },
        {
          id: '01-VI',
          name: 'ALBUM_06_LANGUAGE_AND_ROOTS',
          type: 'directory',
          children: [
            { id: '01-VI-0', name: 'MANIFEST.md', type: 'file', content: '# Album VI: LANGUAGE & ROOTS\nStatus: Canonical' },
            ...ALBUM_6_TRACKS.map((t, i) => createTrackFile(`01-VI-${i+1}`, i + 1, t))
          ]
        },
        {
          id: '01-VII',
          name: 'ALBUM_07_PUBLIC_FIGURE',
          type: 'directory',
          children: [
            { id: '01-VII-0', name: 'MANIFEST.md', type: 'file', content: '# Album VII: PUBLIC FIGURE\nStatus: Canonical' },
            ...ALBUM_7_TRACKS.map((t, i) => createTrackFile(`01-VII-${i+1}`, i + 1, t))
          ]
        },
        {
          id: '01-VIII',
          name: 'ALBUM_08_SYSTEM_BUILDER',
          type: 'directory',
          children: [
            { id: '01-VIII-0', name: 'MANIFEST.md', type: 'file', content: '# Album VIII: SYSTEM BUILDER\nStatus: Canonical' },
            ...ALBUM_8_TRACKS.map((t, i) => createTrackFile(`01-VIII-${i+1}`, i + 1, t))
          ]
        },
        {
          id: '01-IX',
          name: 'ALBUM_09_TRANSMISSION',
          type: 'directory',
          children: [
            { id: '01-IX-0', name: 'MANIFEST.md', type: 'file', content: '# Album IX: TRANSMISSION\nStatus: Canonical' },
            ...ALBUM_9_TRACKS.map((t, i) => createTrackFile(`01-IX-${i+1}`, i + 1, t))
          ]
        },
        {
          id: '01-X',
          name: 'ALBUM_10_EASTWARD',
          type: 'directory',
          children: [
            { id: '01-X-0', name: 'MANIFEST.md', type: 'file', content: '# Album X: EASTWARD\nStatus: Canonical' },
            ...ALBUM_10_TRACKS.map((t, i) => createTrackFile(`01-X-${i+1}`, i + 1, t))
          ]
        }
      ]
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
      id: '06',
      name: '06_PUBLIC_KNOWLEDGEBASE',
      type: 'directory',
      children: [
        { id: '06-1', name: 'README_PUBLIC.md', type: 'file', content: '# EASTWARD PROTOCOL (Public Access)\n\nWelcome to the Archive.' },
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
