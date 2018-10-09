/**
 * To-do
 * restrict window variables ?
 * restrict document operations
 * restrict queries
 * restrict scope to not allow anything outside the function to be accessed, remove eval ?
 *
 * @param {string} code
 * @returns {Function}
 */

export interface ObjectsToExpose {
    objName: string
    obj: any
}

export function SandBox(code: string, exposure: ObjectsToExpose[]) : Function {
    let regex = new RegExp("([$0-9a-zA-Z]+) ?=", "gmi");
    let classRegex = new RegExp("class ([a-zA-Z]+[a-zA-Z0-9]*)? [{|e]", "gmi");
    let found;
    let scope = `let scope = {};`;
    while(found = regex.exec(code)) {
        regex.lastIndex = found.index + found[0].length;
        scope += `
        try {
            scope["${found[1]}"] = ${found[1]};
        } catch (exp) {
            scope["${found[1]}"] = null;
        }
    `;
    }

    while(found = classRegex.exec(code)) {
        classRegex.lastIndex = found.index + found[0].length;
        scope += `
        try {
            scope["${found[1]}"] = ${found[1]};
        } catch (exp) {
            scope["${found[1]}"] = null;
        }
    `;
    }
    
    let fnTemplate: string = `
    
    // actual code
    ${code};
    // code end
    
    ${scope}
    debugger
    return function execute(varName) {
        return scope[varName];
    }
`;

    let args: string[] = [];
    let argsToPass: any[] = [];
    exposure.map((exposedItem: ObjectsToExpose) => {
        args.push(exposedItem.objName);
        argsToPass.push(exposedItem.obj);
    })

    args.push(fnTemplate);

    let fn = (new Function(...args))(...argsToPass);
    return fn;
}