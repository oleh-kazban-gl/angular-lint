// --- TypeScript ---
// TypeScript-specific

export class TSLintTest {
    public testMethod(arg: string): void {
        // no-parameter-reassignment
        // arg = '123';
        console.log('arg: ', arg);
    }
}
