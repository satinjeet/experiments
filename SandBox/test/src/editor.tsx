import { h, render, Component } from 'preact';
import { EditorComponent } from './components/editor';
import { Terminal } from './components/terminal';


function App(props: any) {
    return <div class="">
        <EditorComponent />
        <Terminal />
    </div>
}

const root = document.getElementById('root');
root.innerHTML = "";

render(<App />, root);