export const Create4Players = (Players) => {
  const getPattern = (num) => {
    return num * (num - 1) * (num - 2) * (num - 3) / 8
  }
  const createMatch = () => {
    let match = new Array()
    while(match.length < Players) {
      let player = Math.floor( Math.random() * Players ) + 1
      if (match.find(index => index === player)) continue;
      match[match.length] = player
    }
    return match;
  }
  const deleteDuplicateConditions = (GamePlayers) => {
    return MatchList.find(Match => Match.GamePlayers.slice(0, 2).includes(GamePlayers[0]) && Match.GamePlayers.slice(0, 2).includes(GamePlayers[1])
       || !Match.GamePlayers.slice(0, 2).includes(GamePlayers[0]) && !Match.GamePlayers.slice(0, 2).includes(GamePlayers[1]))
  }

  // 入力値
  const MatchPattern = getPattern(Players);

  // 組み合わせリストの作成
  let MatchList = new Array()
  while(MatchList.length < MatchPattern) {
    let objMatch = {
      GameNumber: 0,
      GamePlayers: []
    }
    // 組み合わせ作成
    objMatch.GamePlayers = createMatch(Players)
    if (MatchList[0] && deleteDuplicateConditions(objMatch.GamePlayers)) continue;
    objMatch.GameNumber = MatchList.length + 1
    MatchList[MatchList.length] = objMatch
  }
  return MatchList
}
