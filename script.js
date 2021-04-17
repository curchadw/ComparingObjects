const deepCompare = (a,b) =>{
  const keys1 = Object.keys(a)
  const keys2 = Object.keys(b)

  if (keys1.length !== keys2.length){
    return false;
  }

  for (let key of keys1){
      const val1 = a[key]
      const val2 = b[key]

      const areObjects = confirmObject(val1) && confirmObject(val2)
      //if there are nested objects here is where it checks for that using a little recursion
      if ( areObjects && !deepCompare(val1,val2) || !areObjects && val1 !== val2){
        return false
      }

    }

    return true
  }

function confirmObject(object) {
  return object != null && typeof object === 'object';
}