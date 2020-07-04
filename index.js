// Your code here
function createEmployeeRecord(employee){
  return {
    firstName:employee[0],
    familyName:employee[1],
    title:employee[2],
    payPerHour:employee[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
}
let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}
