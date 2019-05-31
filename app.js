const fs = require("fs");
const bcrypt = require("bcrypt");

let incomingPassword = process.argv[2];

/* Create hash password */
bcrypt
  .hash(incomingPassword, 10)
  .then(hashedPassword => {
    fs.writeFile("file.txt", hashedPassword, error => {
      if (error) {
        console.log(`Error occured when writing file: ${error.stack}`);
      } else {
        console.log(`File for promises technique was created`);
      }
    });
  })
  .catch(error => {
    console.log(`Something went wrong when hashing: ${error.stack}`);
  });

/* Compare hash password */
/* fs.readFile("file.txt", "utf8", (error, data) => {
  if (error) {
    console.log(`Error occured when reading file: ${error.stack}`);
  } else {
    bcrypt
      .compare(incomingPassword, data)
      .then(result => {
        if (!result) {
          console.log(`Oh no!! Password doesn't match`);
        } else {
          console.log(`Yippie!! Password matches`);
        }
      })
      .catch(error => {
        console.log(`Error occured when comparing passwords: ${error.stack}`);
      });
  }
}); */
