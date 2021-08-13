const isDevelop = true

getDate = () => {
  formatTime = (tmpTime) => {
    let time = tmpTime.toString();
    if(time.length === 1) return '0' + time;
    return time;
  }
  const Now = new Date()
  const year = Now.getFullYear()
  const month = Now.getMonth() + 1
  const day = Now.getDay()
  const hour = formatTime(Now.getHours());
  const minute = formatTime(Now.getMinutes());
  const second = formatTime(Now.getSeconds());
  return `${year}/${month}/${day} ${hour}:${minute}:${second}`
}

isDevelop && console.log(getDate())

getPattern = (num) => {
  return Pattern = num * (num - 1) * (num - 2) * (num - 3) / 8
}

createMatch = (Players, RestPlayersList, i) => {
  let match = new Array(Players)
  // let matchIndex = Math.floor( Math.random() * 4 )
  switch (Players) {
    case 5: {
      match[Players - 1] = RestPlayersList[i][0]
      break
    }
    case 6: {
      // console.log(RestPlayersList[i])
      match[Players - 2] = RestPlayersList[0][0][0]
      match[Players - 1] = RestPlayersList[0][0][1]
    }
  }
  i = 0
  while(match.includes(undefined)) {
    // if (matchIndex === i) {
    //   i = (i+1)|0
    //   continue
    // }
    player = Math.floor( Math.random() * Players ) + 1
    if (match.find(index => index === player)) continue;
    match[i] = player
    i = (i + 1) | 0
  }
  i = 0
  // console.log(match)
  return match;
}

deleteDuplicateConditions = (Players, Match) => {
  switch(Players) {
    case 4:
      return MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[0]) && MatchI.slice(0, 2).includes(Match[1]) || !MatchI.slice(0, 2).includes(Match[0]) && !MatchI.slice(0, 2).includes(Match[1]))
    case 5:
      return MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[0]) && MatchI.slice(0, 2).includes(Match[1]) && MatchI.slice(2, 4).includes(Match[2]) && MatchI.slice(2, 4).includes(Match[3])) || MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[2]) && MatchI.slice(0, 2).includes(Match[3]) && MatchI.slice(2, 4).includes(Match[0]) && MatchI.slice(2, 4).includes(Match[1]))
    case 6:
      return MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[0]) && MatchI.slice(0, 2).includes(Match[1]) && MatchI.slice(2, 4).includes(Match[2]) && MatchI.slice(2, 4).includes(Match[3])) || MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[2]) && MatchI.slice(0, 2).includes(Match[3]) && MatchI.slice(2, 4).includes(Match[0]) && MatchI.slice(2, 4).includes(Match[1]))

    default:
      console.log(Players)
  }
}

createRestPlayersList = (Players) => {
  let RestPlayersList = new Array
  switch (Players) {
    case 6: {
      while (RestPlayersList.length < 15) {
        let RestCycle = new Array
        while (RestCycle.length < 3) {
          let RestPair = new Array
          while (RestPair.length < Players - 4 ) {
            let RestPlayer = Math.floor( Math.random() * Players ) + 1
            if (RestPair.includes(RestPlayer)) continue;
            if (RestCycle[0] && RestCycle[0].includes(RestPlayer)) continue;
            if (RestCycle[1] && RestCycle[1].includes(RestPlayer)) continue;
            if (RestCycle[2] && RestCycle[2].includes(RestPlayer)) continue;
            RestPair[RestPair.length] = RestPlayer
            if (!RestPair[1]) continue;
            if (RestPair[0] && RestCycle[0]) {
              let duplicate = 0; // duplicateが4を超えたらRestPairを初期化してcontinue
              let ReverseRestPair = [...RestPair]
              ReverseRestPair.splice(0, 2, RestPair[1], RestPair[0])
              console.log({RestPair})         //includesメソッドでduplicate探索用
              console.log({ReverseRestPair})  //includesメソッドでduplicate探索用（反転）
              // for (i = 0; i < RestCycle.length; i = (i + 1) | 0) {
              //   for (j = 0; j < RestPair.length; j = (j + 1) | 0) {
              //     if (RestCycle[i].includes(RestPair) || RestCycle[i].includes(RestPair.splice()))
              //   }
              // }
            }
          }
          // console.log({RestPair})
          RestCycle[RestCycle.length] = RestPair
        }
        if (RestPlayersList.length > 0 && (RestPlayersList[RestPlayersList.length - 1][2].includes(RestCycle[0][0]) || RestPlayersList[RestPlayersList.length - 1][2].includes(RestCycle[0][1] ))) continue;
        RestPlayersList[RestPlayersList.length] = RestCycle
      }
      // console.log(RestPlayersList)
      return RestPlayersList
    }
    default: {
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
  }
}

// 入力値
const Players = 6

const MatchPattern = getPattern(Players);

let RestPlayersList = createRestPlayersList(Players)
// 組み合わせリストの作成
let MatchList = new Array
let i = 0
console.log(RestPlayersList)
while(MatchList.length < MatchPattern) {
  // console.log({i})
  // 組み合わせ作成
  // console.log(RestPlayersList)
  let Match = createMatch(Players, RestPlayersList, i)
  if (deleteDuplicateConditions(Players, Match)) continue;
  // console.log(Match, MatchList.length, {i}, Match)
  MatchList[MatchList.length] = Match
  switch (Players) {
    case 5: {
      RestPlayersList[i].shift()
      break
    }
    case 6: {
      RestPlayersList[0].shift()
      // RestPlayersList[i][j].shift()
      if (RestPlayersList[i].length === 0) RestPlayersList.shift()
      break
    }
  }
  switch (Players) {
    case 5: {
      if (MatchList.length % 5 === 0) i = (i + 1) | 0
      break
    }
    case 6: {
      // console.log(Match)
      // if (MatchList.length % 3 === 0) i = (i + 1) | 0
      // j = (j + 1) | 0
      break
    }
  }
  // console.log(Match, MatchList.length)
  console.log(RestPlayersList)
  console.log(MatchList)
}

isDevelop && console.log(MatchList)

isDevelop && console.log(getDate())