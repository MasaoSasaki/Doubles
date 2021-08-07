// https://www.youtube.com/watch?v=K2cJofUJVO8&t=534s 45:00"

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

createMatch = (people) => {
  let match = new Array
  while(match.length < 4) {
    a = Math.floor( Math.random() * people ) + 1
    if (match.find(num => num === a)) continue;
    match[i] = a
    i++
  }
  i = 0
  return match;
}

console.log(getDate())

// 入力値
let people = 4  //　人数

let MatchList = new Array
let Pattern;
Pattern = getPattern(people)

let i = 0, j=0, a;
while(MatchList.length < Pattern) {

  // ペア作成
  let Match = createMatch(people);
  if (MatchList.find(MatchI => MatchI.toString() === Match.toString())) {
    i=0
    Match = []
    continue;
  }

  if (MatchList.find(MatchI => MatchI.slice(0,2).includes(Match[0]) && MatchI.slice(0,2).includes(Match[1]) || !MatchI.slice(0,2).includes(Match[0]) && !MatchI.slice(0,2).includes(Match[1]))) {
    i=0
    Match = []
    continue;
  }
  MatchList[j] = Match
  j++
}

console.log(MatchList)

console.log(getDate())