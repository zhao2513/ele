let defaultCount = 0
try {//用try避免向上报错
  if (localStorage.allCount) {
    defaultCount = localStorage.allCount
  }
} catch (e) {}
export default {
  allCount: defaultCount,
  oldFoods:[],
  newFoods:[],
  allTotal:0
}