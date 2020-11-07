import Nightmare from "nightmare" // eslint-disable-line @typescript-eslint/no-unused-vars

/**
Evaluate some code in an Electron context.
@param function_ The function to evaluate in the Electron context.
@param arguments_ An array of arguments to include as arguments when calling `function_`.
@param options Options to pass to [`new BrowserWindow()`](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions).
@example
```
const electronEvaluate = require("electron-evaluate")

const result = await electronEvaluate(async () => {
	// You can use Electron APIs here
})
```
*/
declare function electronEvaluate<ReturnValueType, ArgumentType>(function_: (...arguments_: ArgumentType[]) => ReturnValueType | PromiseLike<ReturnValueType>, arguments_?: ArgumentType[], options?: Nightmare.IConstructorOptions): Promise<ReturnValueType>

export = electronEvaluate
