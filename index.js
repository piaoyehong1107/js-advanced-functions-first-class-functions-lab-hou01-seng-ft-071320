// Code your solution in this file!
function returnFirstTwoDrivers(driver){
  const myfunc=function(){
    let array=[]
    array.push(driver[0],driver[1])
    return array
  }
  return myfunc()
}

function returnLastTwoDrivers(driver){
  const myfunc=function(){
    let array=[]
    array.push(driver[driver.length-2],driver[driver.length-1])
    return array
  }
  return myfunc()
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int){
  const fareQuintupler=function(fare){
   return fare * int
  }
  return fareQuintupler
}

function fareDoubler(fare){
  const fareQuintupler=createFareMultiplier(2)(fare)
  return fareQuintupler
}



  
