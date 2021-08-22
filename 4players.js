export const Create4Players = () => {

  const getPattern = (num) => {
    return num * (num - 1) * (num - 2) * (num - 3) / 8
  }

  const createMatch = (Players) => {
    let match = new Array(Players)
    let i = 0
    while(match.includes(undefined)) {
      let player = Math.floor( Math.random() * Players ) + 1
      if (match.find(index => index === player)) continue;
      match[i] = player
      i = (i + 1) | 0
    }
    return match;
  }

  const deleteDuplicateConditions = (Match) => {
    return MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[0]) && MatchI.slice(0, 2).includes(Match[1]) || !MatchI.slice(0, 2).includes(Match[0]) && !MatchI.slice(0, 2).includes(Match[1]))
  }

  // 入力値
  const Players = 4

  const MatchPattern = getPattern(Players);

  // 組み合わせリストの作成
  let MatchList = new Array
  while(MatchList.length < MatchPattern) {
    // 組み合わせ作成
    let Match = createMatch(Players)
    if (deleteDuplicateConditions(Match)) continue;
    MatchList[MatchList.length] = Match
  }
  return MatchList
}
