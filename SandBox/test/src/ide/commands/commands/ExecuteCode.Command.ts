import { ICommand } from '../ICommand';
import { CommandTypes } from '../CommandTypes';
import { Editor } from '../../Editor';
import { ExecutionContext } from '../../context/ExecutionContext';

export class ExecuteCodeCommand implements ICommand {
    type: CommandTypes = CommandTypes.EXECUTE;
    payload: string = "";
    keyBind = { win: 'Ctrl-Enter', mac: 'Command-Enter' };

    private editor: Editor;

    constructor(editor: Editor) {
        this.editor = editor;
    }

    get Command() {
        return {
            name: 'Command::Execute_Code',
            bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
            exec: () => {
                console.log(this.editor.Value);
                ExecutionContext.createContext(this.editor.Value);
            }
        }
    }
}