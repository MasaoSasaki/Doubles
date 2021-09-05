import fetch from "node-fetch";

export const Permutation = (n, p) => {
  let Players = [...Array(n)].map((_, i) => i + 1).reverse()
  let pattern = n;
  for (let i = 1; i < n; i++) {
    console.log(Players[i])
    pattern *= Players[i]
  }
  return pattern
}

export const Combination = (num) => {
  console.log("Permutation", num)
}

let num = 5
// console.log("Permutation", Permutation(num));
// Combination(num)

// console.log(Array(5), [...Array(5)])
const callApi = async () => {
  const res = await fetch(
    "https://jmetqayuwd.execute-api.ap-northeast-3.amazonaws.com/dev/test", {
      method: 'POST',
      headers: {'x-api-key':'8LeFYO2aa755MVPioEgqv1CVo9InFp0d10zJ8dv1'},
      body: `{ "players": 5 }`
    }
  );
  // const res = await fetch(
  //   "https://jmetqayuwd.execute-api.ap-northeast-3.amazonaws.com/dev/test", {
  //     method: 'post',
  //     headers: {'x-api-key':'8LeFYO2aa755MVPioEgqv1CVo9InFp0d10zJ8dv1'}
  //   }
  // );
  console.log(await res.json())
}

callApi();