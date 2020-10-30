export function holeProgression(hole: number, state: string) {
  let results

  if (state === 'next') {
    results = hole + 1
  }

  if (state === 'previous') {
    if (hole === 1) {
      results = 1
    } else {
      results = hole - 1
    }
  }

  return results
}

export function checkForGoodScore(numPar: number, numScore: number) {
  let results

  // deteremine ace shot
  if (numScore === 1) {
    results = 'Hole in one'
  }

  // determine albatross shot
  if (numPar - numScore === 3) {
    results = 'Albatross'
  }

  // determine birdie shot
  if (numPar - numScore === numPar - 1) {
    results = 'Birdie'
  }

  // determine condor shot
  if (numPar === 5) {
    if (numPar - numScore === 1) {
      results = 'Condor'
    }
  }

  // deteremine eagle shot
  if (numPar - numScore === 2) {
    results = 'Eagle'
  }

  if (numPar - numScore === 0) {
    results = 'Par'
  }

  return results
}

export const urlify = (link: string) => link.toLowerCase().replace(/\s/g, '-')

export const makeTitle = (string) =>
  string.replace(/-|\s/g, ' ').replace(/\+/g, ' ')
