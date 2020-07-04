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
function createEmployeeRecords(employeesData){
  return employeesData.map(employeeData => createEmployeeRecord(employeeData))
};

let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

function createTimeOutEvent(emp, dateStamp){
  let [date, hour] = dateStamp().split(" ");
  let data = {
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date:date
  }
  emp.timeInEvents.push(data);
  return emp;
}
