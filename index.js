// Code your solution in this file!
const returnFirstTwoDrivers = arr => {   
    const copyarr = arr.slice()
    return copyarr.splice(0,2)    
    }

const returnLastTwoDrivers = arr => {
    const copyarr = arr.slice()
    return copyarr.splice(2,3)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (num) {
       // console.log(num)
      const mul = num => num * 5
        return mul
   //return function(num){return (num * 5)}   
}

const fareDoubler = fare => fare * 2

const fareTripler = fare => fare * 3

function selectDifferentDrivers(arry, func){
   return func(arry)
}


