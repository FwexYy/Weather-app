export const getTime = (time) => {
   return `${new Date(time * 1000).getHours()}:${new Date(time * 1000).getMinutes()}`
}