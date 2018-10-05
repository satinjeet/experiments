import { edit, Ace } from 'ace-builds';
import "ace-builds/src-noconflict/theme-monokai"
import { Mode as JSMode } from "ace-builds/src-noconflict/mode-javascript";
import { ICommand } from './commands/ICommand';
import { Commands } from './commands/Commands';

export class Editor {
    private editor: Ace.Editor;
    private commands: ICommand[] = [];

    private constructor(ref: HTMLElement) {
        this.editor = edit(ref);
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode(new JSMode());

        new Commands(this);

        console.log(this);
    }

    public get Value() {
        return this.editor.getValue();
    }

    public addCommand(command: ICommand) {
        this.commands.push(command);
        this.editor.commands.addCommand(command.Command)
    }

    
    private static instance: Editor;

    public static createEditor(ref) {
        Editor.instance = new Editor(ref);
    }

    public static get Instance() {
        if (!Editor.instance) { throw new Error('Instance now yet created'); }

        return Editor.instance;
    }
}