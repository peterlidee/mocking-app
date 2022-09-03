function doSomethingElse(callback){
  const list = [1,2,3,4]
  list.forEach(item => callback(item))
}

export default doSomethingElse