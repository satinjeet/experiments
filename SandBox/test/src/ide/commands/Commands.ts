import { Subject } from 'rxjs-compat/Subject';
import { ICommand } from './ICommand';
import { Editor } from '../Editor';
import { ExecuteCodeCommand } from './commands/ExecuteCode.Command';

export class Commands {
    private editor: Editor;
    private upStream: Subject<ICommand>;

    constructor(editor: Editor) {
        this.editor = editor;
        this.upStream = new Subject<ICommand>()
        this.setUpCommands()
    }

    setUpCommands() {
        this.editor.addCommand(new ExecuteCodeCommand(this.editor));
    }
}