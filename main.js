const fs = require('fs');

function CountWords() {
    const content = fs.readFileSync("wordList.txt", "utf8");
    const wordArray = content.split(/\s+/).filter(item => item.length > 0);
    console.log("Total words:", wordArray.length);
}

function SumNumbers() {
    const numberContent = fs.readFileSync("numList.txt", "utf8");
    const numberArray = numberContent.split(/\s+/).map(Number);
    const totalSum = numberArray.reduce((accumulator, currentNum) => accumulator + currentNum, 0);
    console.log("Total sum of numbers:", totalSum);
}

function CreateFileFromResult() {
    const outputFileName = fs.readFileSync("output.txt", "utf8").trim();
    fs.writeFileSync(outputFileName, "Hello world");
    console.log(`File '${outputFileName}' has been created.`);
}

CountWords();
SumNumbers();
CreateFileFromResult();
