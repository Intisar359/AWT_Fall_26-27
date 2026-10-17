function getStudentResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
       
        resolve({
          id: 101,
          name: "Rahim",
          department: "CSE",
          marks: 85
        });
      } else {
      
        reject("Failed to retrieve student result");
      }
    }, 5000);
  });
}

async function displayResult() {
  console.log("Getting student result...");
  try {
    const student = await getStudentResult();
    console.log("Student result received!");
    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Department: ${student.department}`);
    console.log(`Marks: ${student.marks}`);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Result processing completed.");
  }
}

displayResult();