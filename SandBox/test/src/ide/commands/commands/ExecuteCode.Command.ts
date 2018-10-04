import { ICommand } from '../ICommand';
import { CommandTypes } from '../CommandTypes';

export class ExecuteCodeCommand implements ICommand {
    type: CommandTypes = CommandTypes.EXECUTE;
    payload: string;

    constructor(payload) {
        this.payload = payload;    
    }
}