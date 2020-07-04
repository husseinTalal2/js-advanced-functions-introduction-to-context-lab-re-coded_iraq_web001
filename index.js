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
  const [date, hour] = dateStamp().split(" ");
  const data = {
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date:date
  }
  emp.timeInEvents.push(data);
  return emp;
}

function createTimeOutEvent(emp, dateStamp){
  const [date, hour] = dateStamp().split(" ");
  const data = {
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date:date
  }
  emp.timeInEvents.push(data);
  return emp;
}
