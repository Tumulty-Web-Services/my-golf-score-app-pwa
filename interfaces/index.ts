type Round = {
  round: number
  score: string
  yards: string
}

export type Game = {
  user: string
  course: string
  totalScore: string
  rounds: Round[]
}
