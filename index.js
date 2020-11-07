"use strict"
const PCancelable = require("p-cancelable")
const createNightmare = require("nightmare")
const mergeOptions = require("merge-options")
const lastItem = require("last-item")

module.exports = (function_, arguments_ = [], options = {}) => new PCancelable((resolve, _, onCancel) => {
	if (typeof function_ !== "function") {
		throw new TypeError(`Expected a function, got ${typeof function_}`)
	}

	createNightmare.action("evaluateNoTimeout", function (function_, ...arguments_) {
		Reflect.apply(this.evaluate_now, this, [function_, lastItem(arguments_), ...arguments_.slice(0, -1)])
	})

	const nightmare = createNightmare(mergeOptions({
		webPreferences: {
			nodeIntegration: true
		}
	}, options))

	try {
		onCancel(() => {
			nightmare.end()
		})
	} catch { }

	resolve(nightmare.goto("about:blank")[options.executionTimeout ? "evaluate" : "evaluateNoTimeout"](function_, ...arguments_).end())
})
