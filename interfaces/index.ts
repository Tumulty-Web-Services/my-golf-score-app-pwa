export type RadioValue = {
  id: string
  text: string // 9, 18 or 3,4,5
  label: string // nine, eighteeen or three, four, five
  name: string //par or courseType
}

export type Score = {
  par: string
  score: string
  hole: string
  courseId: string
}

export type Course = {
  _id: string
  name: string
  holes: string
}

export type User = {
  _id: string
  email: string
  courses: Course[]
  scores: Score[]
}

export type TableItem = {
  itemOne: string
  itemTwo: string
  itemThree: string
}

export type DropDownItem = {
  id: string
  label: string
}

export type FinishedCourse = {
  id: string
  score: string
  hole: string
  par: string
  course: string
}

export type YourCoures = {
  id: string
  score: string
  course: string
  date: string
}

export type GameStats = {
  course: string
  courseType: string
  date: string
  holes: string
}

export type FinishedGame = {
  nickname: string
  email: string
  game: GameStats[]
}
