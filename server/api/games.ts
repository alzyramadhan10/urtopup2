export default defineEventHandler(async () => {
  return fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRU5XGTim7pv93ms8fPeeYoY84RZKpyZgI7a_Zzpo1gFYkk8jMOnpU-7xpSiTHhDxhDZlvW5o2iLVUX/pub?gid=974640895&single=true&output=csv')
})
