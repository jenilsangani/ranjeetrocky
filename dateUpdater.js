const { promises: fs } = require("fs");

async function main() {

    const d = new Date();
    const readmeTemplateFile = (await fs.readFile("./README.temp.md")).toString("utf-8");
    const updatatedReadmeFile = readmeTemplateFile.replace("{{lastUpdatedOn}}", d.toISOString());
    // const date = readmeTemplateFile.replace("{{lastUpdatedOn}}", d.toString().replace("GMT+0530 (India Standard Time)","IST"));
    await fs.writeFile("./README.md", updatatedReadmeFile);
    // const readmeFile = (await fs.readFile('./README.md')).toString("utf-8");
    // console.log("Readme File Data = "+readmeFile)
}
main();
// setInterval(main, 1000); 