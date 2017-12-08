var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  var element = 'foo'
  const moreArray = [element,...array]
  return moreArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var element = "foo"
  var moreArray = array = [element,...array]
  return moreArray
}
