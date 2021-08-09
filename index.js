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

createMatch = (Players, RestPlayers) => {
  let match = new Array
  let i = 0;
  match[Players - 1] = RestPlayers[0]
  while(match.includes(undefined)) {
    player = Math.floor( Math.random() * Players ) + 1
    if (match.find(index => index === player)) continue;
    match[i] = player
    i = (i+1)|0
  }
  return match;
}

deleteDuplicateConditions = (Players, Match) => {
  switch(Players) {
    case 4:
      return MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[0]) && MatchI.slice(0, 2).includes(Match[1]) || !MatchI.slice(0, 2).includes(Match[0]) && !MatchI.slice(0, 2).includes(Match[1]))
    case 5:
      return MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[0]) && MatchI.slice(0, 2).includes(Match[1]) && MatchI.slice(2, 4).includes(Match[2]) && MatchI.slice(2, 4).includes(Match[3])) || MatchList.find(MatchI => MatchI.slice(0, 2).includes(Match[2]) && MatchI.slice(0, 2).includes(Match[3]) && MatchI.slice(2, 4).includes(Match[0]) && MatchI.slice(2, 4).includes(Match[1]))
    default:
      console.log(Players)
  }
}

// 入力値
const Players = 5

let i = Players
const MatchPattern = getPattern(Players)

// 休憩する順番を降順で作成
let RestPlayers = new Array
while (RestPlayers.length < MatchPattern) {
  i = i === 0 ? Players : i
  RestPlayers[RestPlayers.length] = i
  i = (i - 1) | 0
}

// 組み合わせリストの作成
let MatchList = new Array
while(MatchList.length < MatchPattern) {

  // 組み合わせ作成
  let Match = createMatch(Players, RestPlayers)
  if (deleteDuplicateConditions(Players, Match)) continue;
  MatchList[MatchList.length] = Match
  RestPlayers.shift()
}

isDevelop && console.log(MatchList)

isDevelop && console.log(getDate())
