const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText('./data/second.txt')
//     .then((result) => console.log(result))
//     .then(() => getText('./data/first.txt'))
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

async function read() {
  try {
    const result = await getText("./data/first.txt");
    console.log(result);
    const result2 = await getText("./data/second.txt");
    console.log(result2);
    const result3 = await getText("./data/third.txt");
    console.log(result3);
    const result4 = await getText("./data/fourth.txt");
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
}

read();
