export const engineeringRoles = [
  { title: "Frontend Developer", value: "frontend" },
  { title: "Backend Developer", value: "backend" },
  { title: "Android Developer", value: "android" },
  { title: "IOS Developer", value: "ios" },
  { title: "Tech Lead", value: "tech lead" },
];

export const location = [{ title: "Remote", value: "remote" }, { title: "In-office", value: "in-office" }];

export const minBasePay = [
  { title: "10L", value: 13 },
  { title: "20L", value: 26 },
  { title: "30L", value: 39 },
  { title: "40L", value: 52 },
  { title: "50L", value: 65 },
  { title: "60L", value: 78 },
  { title: "70L", value: 91 },
];

export const minExperience = [
  { title: "1", value: 1 },
  { title: "2", value: 2 },
  { title: "3", value: 3 },
  { title: "4", value: 4 },
  { title: "5", value: 5 },
  { title: "6", value: 6 },
  { title: "7", value: 7 },
  { title: "8", value: 8 },
  { title: "9", value: 9 },
  { title: "10", value: 10 },
];


export const filters = [
  { tag: "jobRole", options: engineeringRoles, label: "Roles" },
  { tag: "location", options: location, label: "Remote" },
  // { tag: "minJdSalary", options: minBasePay, label: "Min Base Pay" },
];