// https://www.youtube.com/watch?v=K2cJofUJVO8&t=534s 45:00"

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

getPattern = (num) => {
  return Pattern = num * (num - 1) * (num - 2) * (num - 3) / 8
}

createMatch = (Players, Rest) => {
  match = [...Rest]
  while(match.length < Players) {
    isDevelop && console.log("Match生成中...")
    a = Math.floor( Math.random() * Players ) + 1
    if (match.find(num => num === a)) continue;
    match[match.length] = a
  }
  i = 0
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

isDevelop && console.log(getDate())

// 入力値
let Players = 5  //　人数
let Rest = new Array

let MatchList = new Array
let Pattern;
Pattern = getPattern(Players)
let isRestSave = false

let i = 0, a;
while(MatchList.length < Pattern) {
  // ペア作成
  let Match = createMatch(Players, Rest);
  isDevelop && console.log("MatchList生成中...")
  if (deleteDuplicateConditions(Players, Match)) {
    isRestSave = true
    continue;
  }
  Rest = Match.slice(4)
  isDevelop && console.log(Match, Rest)
  MatchList[MatchList.length] = Match
  isRestSave = false
}

isDevelop && console.log(MatchList)

isDevelop && console.log(getDate())
