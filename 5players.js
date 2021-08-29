export const Create5Players = (Players) => {
  const createMatch = (MatchList) => {
    for (i=0; i < MatchList.length; i=(i+1)|0) {
      let arrayGamePlayers = new Array()
      while (arrayGamePlayers.length < 4) {
        let Player = Math.floor( Math.random() * Players ) + 1
        if (Player === MatchList[i].BreakingPlayers) continue;
        if (arrayGamePlayers.includes(Player)) continue;
        arrayGamePlayers[arrayGamePlayers.length] = Player
        if (arrayGamePlayers.length === 4 && deleteDuplicateConditions(arrayGamePlayers)) {
          arrayGamePlayers = [];
          continue;
        }
        if (arrayGamePlayers.length === 4) MatchList[i].GamePlayers = arrayGamePlayers
      }
    }
    return MatchList;
  }

  // GamePlayerが重複していないか
  const deleteDuplicateConditions = (GamePlayers) => {
    return MatchList.find(Match => Match.GamePlayers.slice(0, 2).includes(GamePlayers[0]) && Match.GamePlayers.slice(0, 2).includes(GamePlayers[1]) && Match.GamePlayers.slice(2, 4).includes(GamePlayers[2]) && Match.GamePlayers.slice(2, 4).includes(GamePlayers[3]))
        || MatchList.find(Match => Match.GamePlayers.slice(0, 2).includes(GamePlayers[2]) && Match.GamePlayers.slice(0, 2).includes(GamePlayers[3]) && Match.GamePlayers.slice(2, 4).includes(GamePlayers[0]) && Match.GamePlayers.slice(2, 4).includes(GamePlayers[1]))
  }

  const createBreakingPlayersList = (Players) => {
    // 休憩の順番を作成
    let BreakingPlayersList = new Array()
    while (BreakingPlayersList.length < 3) {
      let BreakingPlayers = new Array()
      while (BreakingPlayers.length < Players) {
        let BreakingPlayer = Math.floor( Math.random() * Players ) + 1
        if (BreakingPlayers.find(index => index === BreakingPlayer)) continue;
        BreakingPlayers[BreakingPlayers.length] = BreakingPlayer
      }
      if (BreakingPlayersList.length > 0 && BreakingPlayersList[BreakingPlayersList.length - 1][4] === BreakingPlayers[0]) continue
      BreakingPlayersList[BreakingPlayersList.length] = BreakingPlayers
    }

    // 休憩の順番をMatchList変数(配列-オブジェクト)に代入
    for (i=0; i<3; i=(i+1)|0) {
      for (j=0; j<5; j=(j+1)|0) {
        let objMatch = {
          GameNumber: 0,
          GamePlayers: [],
          BreakingPlayers: []
        }
        objMatch.GameNumber = MatchList.length + 1
        objMatch.BreakingPlayers = BreakingPlayersList[i][j]
        MatchList[MatchList.length] = objMatch
      }
    }
    return MatchList
  }

  let MatchList = new Array()
  let i = 0, j = 0
  let BreakingPlayersList = createBreakingPlayersList(Players)
  return createMatch(BreakingPlayersList)
}