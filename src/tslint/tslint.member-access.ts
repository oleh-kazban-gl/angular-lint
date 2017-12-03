// --- TypeScript ---
// TypeScript-specific
// "member-access": [
// true,
//     "check-accessor",
//     "check-constructor",
//     "check-parameter-property"
// ]

export class TSLintTest {
    // "member-access"
    // someProperty;
    private _property;

    // "check-constructor"
    // constructor() {}

    // check-parameter-property
    // constructor(age: number) {}
    public constructor(private age: number) {}

    // "check-accessor"
    // get property() {
    //     return this._property;
    // }

    // "check-accessor"
    // set property(value) {
    //     this._property = value;
    // }

    public get property() {
        return this._property;
    }

    public set property(value) {
        this._property = value;
    }
}
