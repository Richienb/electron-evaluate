const test = require("ava")
const electronEvaluate = require(".")

test("main", async t => {
	t.true(await electronEvaluate(async () => true))
})
