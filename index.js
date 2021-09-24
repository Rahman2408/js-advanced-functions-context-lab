/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arry) {
    const person = {
    firstName: arry[0], 
    familyName: arry[1], 
    title: arry[2],
    payPerHour: arry[3],
    timeInEvents: [], 
    timeOutEvents: []
  
    }
    return person;
  }
  
  function createEmployeeRecords(arrys) {
    let employees = []
    for (let i = 0; i < arrys.length; i++){
      employees.push(createEmployeeRecord(arrys[i]));
    }
    return employees;
  }
  
  function createTimeInEvent( timeIn) {
    const t = timeIn.split(' ')
    this.timeInEvents.push({
      type: 'TimeIn', 
      hour: parseInt(t[1]), 
      date: t[0]
    });
  return this;
  }
  
  function createTimeOutEvent( timeOut) {
    const t = timeOut.split(' ')
    this.timeOutEvents.push({
      type: 'TimeOut', 
      hour: parseInt(t[1]), 
      date: t[0]
    });
  return this;
  }
  
  
  
let hoursWorkedOnDate = function( soughtDate){
  let inEvent = this.timeInEvents.find(function(e){
      return e.date === soughtDate
  })

  let outEvent = this.timeOutEvents.find(function(e){
      return e.date === soughtDate
  })

  return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(dateSought){
  let rawWage = hoursWorkedOnDate.call(this, dateSought)
      * this.payPerHour
  return parseFloat(rawWage.toString())
}

// let allWagesFor = function(){
//   let eligibleDates = this.timeInEvents.map(function(e){
//       return e.date
//   })

//   let payable = eligibleDates.reduce(function(memo, d){
//       return memo + wagesEarnedOnDate.call(this, d)
//   }.bind(this), 0)

//   return payable


let findEmployeeByFirstName = function(srcArray, firstName) {
return srcArray.find(function(rec){
  return rec.firstName === firstName
})
}

let calculatePayroll = function(arrayOfEmployeeRecords){
  return arrayOfEmployeeRecords.reduce(function(memo, rec){
      return memo + allWagesFor.call(rec)
  }, 0)
}
  
  