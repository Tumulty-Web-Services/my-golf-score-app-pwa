export type RadioValue = {
  text: string // 9, 18 or 3,4,5
  label: string // nine, eighteeen or three, four, five
  name: string //par or courseType
}

export type Score = {
  par: string;
  score: string;
  hole: string;
  courseId: string;
}

export type Course = {
  _id: string;
  name: string;
  holes: string;
}

export type User = {
  _id: string;
  email: string;
  courses: Course[]
  scores: Score[]
}
