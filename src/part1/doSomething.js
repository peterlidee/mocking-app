function doSomething(callback){
  const list = ['foo', 'bar']
  list.forEach(listItem => callback(listItem))
}
export default doSomething