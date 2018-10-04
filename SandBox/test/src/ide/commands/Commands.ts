import { Ace } from "ace-builds";
import { Subject } from 'rxjs-compat/Subject';
import { ICommand } from './ICommand';

export class Commands {
    private editor: Ace.Editor;
    private upStream: Subject<ICommand>;

    constructor(editor: Ace.Editor) {
        this.editor = editor;
        this.upStream = new Subject<ICommand>()
    }

    setUpCommands() {
        this.editor.commands.addCommand({
            name: 'execute',
            bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
            exec: () => {
                console.log(this.editor.getValue());
            }
        })
    }
}