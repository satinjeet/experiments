import { SandBox } from "../Sandbox";

export class ExecutionContext {
    private context: Function;
    private constructor(code: string) {
        this.context = SandBox(code, []);
    }
    private executeCommand(command: string) {
        return this.context(command);
    }

    private static instance: ExecutionContext;

    public static createContext(code: string) {
        ExecutionContext.instance = new ExecutionContext(code);
    }

    public static execute(command: string) {
        if (!ExecutionContext.instance) return "";
        return this.instance.executeCommand(command);
    }
}