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

function createTimeInEvent(emp, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    emp.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return emp
}

function createTimeOutEvent(emp, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    emp.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return emp
}
function hoursWorkedOnDate(empRecord, date){
  const inEvent = empRecord.timeInEvents.find(e=> e.date === date);
  const outEvent = empRecord.timeOutEvents.find(e=> e.date === date)
  return (in.hour - out.hour)/100;
}
