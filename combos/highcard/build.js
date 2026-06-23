function scoreHighcard(hand, modifier){
  let highestScore = arr.indexOf(Math.max(...hand.map(entry=>entry.score)))
  return highestScore
}