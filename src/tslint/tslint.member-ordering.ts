// --- TypeScript ---
// TypeScript-specific

// "member-ordering": [
//             true,
//             {
//                 "order": [
//                     "public-instance-field",
//                     "public-static-field",
//                     "private-instance-field",
//                     "private-static-field",
//                     "public-constructor",
//                     "private-constructor",
//                     "public-instance-method",
//                     "protected-instance-method",
//                     "private-instance-method"
//                 ]
//             }
//         ]

export class TSLintTestFieldMethod {
    // order: 'fields-first'
    // public m_method2_1() {}
    // public f_field2_1;

    public f_field2_1;
    public m_method2_1() {}
}

export class TSLintTestOrderPrivateStatic {
    //    private static f_field2;
    //    private f_field1;

    private f_field1;
    private static f_field2;
}

export class TSLintTestOrderPublicStatic {
    // public static f_field2;
    // public f_field1;

    public f_field1;
    public static f_field2;
}

export class TSLintTestOrder {
    // private m_method1() {}

    // public f_field2;
    // private f_field1;

    // public m_method2() {}

    // public constructor() {}

    public f_field2;
    private f_field1;

    public constructor() {}

    public m_method2() {}
    private m_method1() {}
}
