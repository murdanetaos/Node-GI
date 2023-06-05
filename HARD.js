const express = require('express');
const employeesData = require('./employees.json');

const app = express();
const port = 3000;

app.get('/employees', (req, res) => {
  res.json(employeesData.employees);
});

app.get('/employees/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID);

  const employee = employeesData.employees.find(
    emp => emp.employeeID === employeeID
  );

  if (!employee) {
    res.status(404).json({ error: 'Employee not found' });
    return;
  }

  res.json(employee);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
