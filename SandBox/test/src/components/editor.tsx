import { h, render, Component } from 'preact';
import * as ace from 'ace-builds';
import "ace-builds/src-noconflict/theme-monokai"
import { Mode as JSMode } from "ace-builds/src-noconflict/mode-javascript";

interface IEditorProps {
    classes?: string[];
}

export class Editor extends Component<any, any> {
    private ref;
    private editor;

    public render() {
        return <div ref={(ref) => {
            this.ref = ref;
        }} class={this.props.classes.join(' ')}></div>
    }

    public componentDidMount() {
        this.editor = ace.edit(this.ref);
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode(new JSMode());
    }

    public static defaultProps: IEditorProps = {
        classes: ["col", "lg12", "editor"]
    }
}