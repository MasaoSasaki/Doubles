export const Create5Players = () => {

  const getPattern = (num) => {
    return num * (num - 1) * (num - 2) * (num - 3) / 8
  }

  const createMatch = (Players, RestPlayersList, i) => {
    let match = new Array(Players)
    match[Players - 1] = RestPlayersList[i][0]
    i = 0
    while(match.includes(undefined)) {
      let player = Math.floor( Math.random() * Players ) + 1
      if (match.find(index => index === player)) continue;
      match[i] = player
      i = (i + 1) | 0
    }
    i = 0
    return match;
  }

  const deleteDuplicateConditions = (Match) => {
    return MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[0]) && MatchI.slice(0, 2).includes(Match[1]) && MatchI.slice(2, 4).includes(Match[2]) && MatchI.slice(2, 4).includes(Match[3])) || MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[2]) && MatchI.slice(0, 2).includes(Match[3]) && MatchI.slice(2, 4).includes(Match[0]) && MatchI.slice(2, 4).includes(Match[1]))
  }

  const createRestPlayersList = (Players) => {
    let RestPlayersList = new Array
    while (RestPlayersList.length < 3) {
      let RestPlayers = new Array
      while (RestPlayers.length < Players) {
        let RestPlayer = Math.floor( Math.random() * Players ) + 1
        if (RestPlayers.find(index => index === RestPlayer)) continue;
        RestPlayers[RestPlayers.length] = RestPlayer
      }
      if (RestPlayersList.length > 0 && RestPlayersList[RestPlayersList.length - 1][4] === RestPlayers[0]) continue
      RestPlayersList[RestPlayersList.length] = RestPlayers
    }
    return RestPlayersList
  }

  // 入力値
  const Players = 5
  const MatchPattern = getPattern(Players);

  let i = 0
  let RestPlayersList = createRestPlayersList(Players)
  i = 0
  // 組み合わせリストの作成
  let MatchList = new Array
  console.log(RestPlayersList)
  while(MatchList.length < MatchPattern) {
    // 組み合わせ作成
    let Match = createMatch(Players, RestPlayersList, i)
    if (deleteDuplicateConditions(Match)) continue;
    MatchList[MatchList.length] = Match
    RestPlayersList[i].shift()
    if (MatchList.length % 5 === 0) i = (i + 1) | 0
  }
  return MatchList
}
