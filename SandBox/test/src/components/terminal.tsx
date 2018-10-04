import { h, Component } from 'preact';
// Works , do not worry
import jQuery from 'jquery';
import JT from 'jquery.terminal';

JT(undefined, jQuery);

export class Terminal extends Component {
    private ref: HTMLDivElement;
    public render() {
        return <div ref={(ref) => this.ref = ref}></div>
    }

    public componentDidMount() {
        const ref = jQuery(this.ref);
        ref.terminal(function(command) {
            if (command !== '') {
                try {
                    var result = eval(command);
                    if (result !== undefined) {
                        this.echo(new String(result));
                    }
                } catch(e) {
                    this.error(new String(e));
                }
            } else {
            this.echo('');
            }
        }, {
            greetings: 'JavaScript Interpreter',
            name: 'js_demo',
            height: 200,
            prompt: 'js> '
        });
    }
}
