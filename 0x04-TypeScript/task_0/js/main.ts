// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Ebenezer",
  lastName: "Buatey",
  age: 23,
  location: "Accra",
};

const student2: Student = {
  firstName: "Ama",
  lastName: "Mensah",
  age: 21,
  location: "Kumasi",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create and render a table
const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = document.createElement("tr");

// Create and append table headers
const header1: HTMLTableCellElement = document.createElement("th");
header1.textContent = "First Name";
const header2: HTMLTableCellElement = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

// Loop through students and create table rows
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const nameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);

// Optional: basic styling for visibility
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.querySelectorAll("th, td").forEach((cell) => {
  (cell as HTMLElement).style.border = "1px solid black";
  (cell as HTMLElement).style.padding = "8px";
});
