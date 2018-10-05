import { CommandTypes } from "./CommandTypes";

interface IKeyBind {
    win: string;
    mac: string;
}

export interface ICommand {
    type: CommandTypes
    payload: any;
    keyBind: IKeyBind;

    readonly Command: {
        name: string;
        bindKey: IKeyBind;
        exec: () => void;
    }
}