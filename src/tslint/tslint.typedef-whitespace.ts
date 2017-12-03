// --- TypeScript ---
// TypeScript-specific

// "typedef-whitespace": [
//     true,
//     {
//         "call-signature": "nospace",
//         "index-signature": "nospace",
//         "parameter": "nospace",
//         "property-declaration": "nospace",
//         "variable-declaration": "nospace"
//     }
// ]

// Before semicolon:
// "variable-declaration": "onespace"
// let _test: string; - Error
// let _test : string; - Expected
// "variable-declaration": "nospace"
// let _test : string; - Error
// let _test: string; - Expected

// "index-signature": "onespace"
// let foo : { [index : string]: { message: string } } = {}; - Error
// let foo: { [index: string] : { message: string } } = {}; - Expected
// "index-signature": "nospace"
// let foo : { [index : string] : { message: string } } = {}; - Error
// let foo: { [index: string]: { message: string } } = {}; - Expected

export class TSLintTestBefore {
    // "property-declaration": "nospace"
    // public _var :string; - Error
    // public _var:string; - Expected
    // "property-declaration": "onespace"
    // public _var:string; - Error
    // public _var :string; - Expected
    // "call-signature": "nospace"
    // public testMethod() :string { return ''; } - Error
    // public testMethod():string { return ''; } - Expected
    // "call-signature": "onespace"
    // public testMethod():string { return ''; } - Error
    // public testMethod() :string { return ''; } - Expected
    // "parameter": "nospace"
    // public test(arg :string): void {} - Error
    // public test(arg:string): void {} - Expected
    // "parameter": "onespace"
    // public test(arg:string): void {} - Error
    // public test(arg :string): void {} - Expected
}

// After semicolon:
// "variable-declaration": "onespace"
// let _test:string; - Error
// let _test: string; - Expected
// "variable-declaration": "nospace"
// let _test: string; - Error
// let _test:string; - Expected

// "index-signature": "onespace"
// let foo : { [index : string]:{ message: string } } = {}; - Error
// let foo: { [index: string]: { message: string } } = {}; - Expected
// "index-signature": "nospace"
// let foo : { [index : string]: { message: string } } = {}; - Error
// let foo: { [index: string]:{ message: string } } = {}; - Expected

export class TSLintTestAfter {
    // "property-declaration": "nospace"
    // public _var: string; - Error
    // public _var:string; - Expected
    // "property-declaration": "onespace"
    // public _var:string; - Error
    // public _var: string; - Expected

    // "call-signature": "nospace"
    // public testMethod(): string { return ''; } - Error
    // public testMethod():string { return ''; } - Expected
    // "call-signature": "onespace"
    // public testMethod():string { return ''; } - Error
    // public testMethod(): string { return ''; } - Expected

    // "parameter": "nospace"
    // public test(arg: string): void {} - Error
    // public test(arg:string): void {} - Expected
    // "parameter": "onespace"
    // public test(arg:string): void {} - Error
    // public test(arg: string): void {} - Expected
}
