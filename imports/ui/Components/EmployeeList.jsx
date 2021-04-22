import React from "react";
import { createContainer } from "meteor/react-meteor-data";
import { Employees } from "../collections/employees";

const EmployeeList = (props) => {
  //props.employees -> array of employee objects

  return <div>Employee List</div>;
};

export default createContainer(() => {
  //set up subscription
  Meteor.subsribe("employees");
  //return an object. whatever we return will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
