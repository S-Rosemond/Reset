var numberOfEmployeesWhoMetTarget = function (hours, target) {
  const filteredEmployeesMetTarget = [...hours].filter((el) => el >= target);
  return filteredEmployeesMetTarget.length;
};

numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2);
numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6);
