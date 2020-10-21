const render = require("../lib/htmlRenderer");

const path = require("path");
const fs = require("fs");
const util = require("util");
const writeFilePromisify = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "../output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

async function generateHTML(employeeTeam) {
    try {
        const html = await render(employeeTeam);
        await writeFilePromisify(outputPath, html);
        console.log("Your HTML page has been created!");
    } catch (err) {
        console.log(err);
    }
};

module.exports = generateHTML;