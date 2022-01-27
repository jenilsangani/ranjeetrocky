const { promises: fs } = require("fs");

const month = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function twoDec(number) {
    return (number < 10 ? '0' : '') + number
}
function getDateTime(date) {
    return month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + twoDec(date.getHours() % 12) + ":" + twoDec(date.getMinutes()) + " " + (date.getHours() > 12 ? "PM" : "AM")
}

async function main() {

    const d = new Date();
    const readmeTemplateFile = (await fs.readFile("./README.md.template")).toString("utf-8");
    const updatatedReadmeFile = readmeTemplateFile.replace("{{lastUpdatedOn}}", getDateTime(d));
    // const date = readmeTemplateFile.replace("{{lastUpdatedOn}}", d.toString().replace("GMT+0530 (India Standard Time)","IST"));
    await fs.writeFile("./README.md", updatatedReadmeFile);
    // const readmeFile = (await fs.readFile('./README.md')).toString("utf-8");
    // console.log("Readme File Data = " + readmeFile)

}
main();
// setInterval(main, 1000); 
