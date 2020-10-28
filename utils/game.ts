import { check } from "prettier";

export function setRoundObject(par: string, hole: string) {
  const holeList = []
  const courses = localStorage.getItem('course')
  const currentHoles = localStorage.getItem('holes')

  const roundObj = {
    hole,
    par,
    courses
  };

  // parse and filter current list of holes
  if(currentHoles !== null) {
    const parsedCurrentHoles = JSON.parse(currentHoles) 
    const checkIfHoleExists = parsedCurrentHoles.filter(round => round.hole !== hole)

    if(checkIfHoleExists.length > 0) {
      const filterOutCurrentHole = parsedCurrentHoles.filter(round => round.hole === hole)

      const newRoundObj = [
        filterOutCurrentHole,
        roundObj
      ]


  
      localStorage.setItem('holes', JSON.stringify(newRoundObj))
    }
  
    if(checkIfHoleExists.length < 0) {

      const newRoundObj = [
        ...parsedCurrentHoles,
        roundObj
      ]
  
      localStorage.setItem('holes', JSON.stringify(newRoundObj))
    }
  }else {
    holeList.push(roundObj)
    localStorage.setItem('holes', JSON.stringify(holeList))
  }
}