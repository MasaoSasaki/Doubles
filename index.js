// https://www.youtube.com/watch?v=K2cJofUJVO8&t=534s 45:00"

getDate = () => {
  function formatTime(tmpTime) {
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

console.log(getDate())
// 4人の場合の組み合わせ
let people = 4
let match = new Array
let MatchList = new Array

// for(i=0; i<people; i++) {
//   team[i] = a
// }
let i = 0, j=0, a;
while(MatchList.length < 24) {
  while(match.length < people) {
    a = Math.floor( Math.random() * people ) + 1
    // a = i + 1
    if (match.find(num => num === a)) continue;
    match[i] = a
    i++
  }
  if (MatchList.find(matchL => matchL === match)) {
    i=0
    match = []
    continue;
  }
  MatchList[j] = match
  j++
}

console.log(MatchList)


// console.log(people.map(num => num + 1))


// for(i=0; i < people.length; i++) {
//   console.log(people)
// }

//
// C[ C[1,2] C[3,4] ]
//
//git

console.log(getDate())