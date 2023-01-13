import helloWorld from './helloWorld'
import sum from './sum'
;(function () {
  helloWorld()
  const theSum = sum(1, 2)
  console.log(theSum)
})()
