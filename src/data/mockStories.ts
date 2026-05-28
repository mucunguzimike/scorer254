export type Story = {
  id: string
  title: string
  category: string
  date: string
  excerpt: string
  image?: string
  location?: string
  tag?: string
}

export const leadStories: Story[] = [
  {
    id: "1",
    title: "Grassroots football finds a new pulse in Nairobi estates",
    category: "Grassroots",
    date: "May 28, 2026",
    location: "Nairobi",
    tag: "Featured",
    excerpt:
      "Community coaches, youth teams and local tournaments are shaping the next generation of Kenyan football talent.",
  },
  {
    id: "2",
    title: "County academies push for better scouting pathways",
    category: "Youth Football",
    date: "May 27, 2026",
    location: "Kisumu",
    excerpt:
      "Local academies say young players need clearer routes from school competitions to professional clubs.",
  },
  {
    id: "3",
    title: "Women’s football clubs seek stronger league visibility",
    category: "Women’s Football",
    date: "May 26, 2026",
    location: "Kenya",
    excerpt:
      "Players and coaches want broader coverage, more consistent fixtures and better sponsorship support.",
  },
]

export const latestStories: Story[] = [
  {
    id: "4",
    title: "KPL sides prepare for decisive weekend fixtures",
    category: "Kenyan Football",
    date: "May 28, 2026",
    excerpt: "The title race and relegation battle remain open as the domestic season enters its final stretch.",
  },
  {
    id: "5",
    title: "Teenage forward earns attention after school tournament run",
    category: "Player Watch",
    date: "May 28, 2026",
    excerpt: "A standout tournament performance has placed the young striker on the radar of local scouts.",
  },
  {
    id: "6",
    title: "Community coaches call for safer training grounds",
    category: "Grassroots",
    date: "May 27, 2026",
    excerpt: "Several teams say poor pitches and lack of equipment continue to limit youth development.",
  },
  {
    id: "7",
    title: "East African clubs eye regional competition boost",
    category: "Regional",
    date: "May 27, 2026",
    excerpt: "Regional football officials are discussing stronger cross-border competition formats.",
  },
]

export const grassrootsStories: Story[] = [
  {
    id: "8",
    title: "Inside the estate tournaments keeping young players active",
    category: "Grassroots",
    date: "May 25, 2026",
    location: "Nairobi",
    excerpt: "Weekend competitions remain a vital platform for players without access to elite academies.",
  },
  {
    id: "9",
    title: "Local coaches balance football dreams with school demands",
    category: "Youth Football",
    date: "May 24, 2026",
    location: "Mombasa",
    excerpt: "Coaches say the best youth systems must protect education while opening sporting opportunities.",
  },
  {
    id: "10",
    title: "How community clubs survive without major sponsors",
    category: "Club Stories",
    date: "May 23, 2026",
    location: "Kakamega",
    excerpt: "Volunteer coaches and small local donations remain the backbone of many Kenyan teams.",
  },
]

export const playerWatchStories: Story[] = [
  {
    id: "11",
    title: "The midfielder turning local pressure into promise",
    category: "Player Profile",
    date: "May 22, 2026",
    excerpt: "A rising player reflects on discipline, scouting gaps and the dream of professional football.",
  },
  {
    id: "12",
    title: "Young goalkeeper builds reputation after county finals",
    category: "Player Watch",
    date: "May 21, 2026",
    excerpt: "Strong performances in school football have made the keeper one to watch.",
  },
]
