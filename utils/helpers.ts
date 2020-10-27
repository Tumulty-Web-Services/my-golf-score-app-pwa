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
