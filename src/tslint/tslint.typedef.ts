// --- TypeScript ---
// TypeScript-specific

// "typedef": [
//     true,
//     "parameter",
//     "property-declaration",
//     "variable-declaration",
//     "member-variable-declaration",
//     "arrow-call-signature",
//     "arrow-parameter",
//     "call-signature"
// ],

// "variable-declaration"
// let _var;
let _var: string;

export class TSLintTest {
    // "member-variable-declaration"
    // public _var;
    public _var: string;

    private _arr: Number[] = [1, 2, 3];
    private _testArr: Number[];

    // "arrow-parameter"
    // public arrowParameter(arg) {}
    public arrowParameter(arg: string): void {
        // "variable-declaration"
        // let _var: string;

        // "arrow-parameter"
        // this._arr.forEach(_num => {});
        this._arr.forEach((_num: number) => {});

        // this._testArr = this._arr.filter((_num: number) => {
        //     return _num > 0;
        // });

        this._testArr = this._arr.filter((_num: number):boolean => {
            return _num > 0;
        });
      }
}

export interface ITSLintTestInterface {
    // "property-declaration"
    // testProperty;
    testProperty: string;
}

// "parameter"
// function parameterTest(arg) {}
function parameterTest(arg: string): void {}

// "call-signature"
// function returnTypeTest() {}
function returnTypeTest(): void {}
