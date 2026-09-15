const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");

describe("Smart Job Portal", () => {
  test("main page should exist and contain the project title", () => {
    const html = fs.readFileSync(
      path.join(projectRoot, "index.html"),
      "utf8"
    );

    expect(html).toContain("SmartJobs");
  });

  test("jobs page should exist and contain job-related content", () => {
    const html = fs.readFileSync(
      path.join(projectRoot, "jobs.html"),
      "utf8"
    );

    expect(html.toLowerCase()).toContain("job");
  });

  test("login and registration pages should exist", () => {
    expect(fs.existsSync(path.join(projectRoot, "login.html"))).toBe(true);
    expect(fs.existsSync(path.join(projectRoot, "register.html"))).toBe(true);
  });
});