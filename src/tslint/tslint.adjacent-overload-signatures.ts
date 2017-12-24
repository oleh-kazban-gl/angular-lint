// --- TypeScript ---
// Style

// "adjacent-overload-signatures"

// export class TSLintTest {
//     public a<T>(x: T): void;
//     public b(): void;
//     public a(x: number): void {}
// }

export class TSLintTest {
    public a<T>(x: T): void;
    public a(x: number): void {}
    public b<T>(x: T): void;
    public b(x: number): void {}
}
