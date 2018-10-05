import { h, Component } from 'preact';
import { Editor } from '../ide/Editor';

interface IEditorProps {
    classes?: string[];
}

const startString = `class Foo {
    constructor() {
        this.bar = "value";
    }
}
`;

export class EditorComponent extends Component<any, any> {
    private ref;
    private editor;

    public render() {
        return <div ref={(ref) => {
            this.ref = ref;
        }} class={this.props.classes.join(' ')}>
            {
                startString
            }
        </div>
    }

    public componentDidMount() {
        this.editor = Editor.createEditor(this.ref);
    }

    public static defaultProps: IEditorProps = {
        classes: ["col", "lg12", "editor"]
    }
}