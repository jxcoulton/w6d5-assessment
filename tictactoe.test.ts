import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
	await driver.get("http://localhost:4000");
});

afterAll(async () => {
	await driver.quit();
});

test("I can start a game", async () => {
	let button = await (await driver).findElement(By.id("start-game"));
	await button.click();
});

test("check clicking first box", async () => {
	await driver.findElement(By.id("cell-0"));
});

test("check clicking last box", async () => {
	await driver.findElement(By.id("cell-8"));
});

test("check clicking the middle box", async () => {
	await driver.findElement(By.id("cell-4"));
});
