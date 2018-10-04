import { h, render, Component } from 'preact';
import { Editor } from './components/editor';
import { Terminal } from './components/terminal';


function App(props: any) {
    return <div class="">
        <Editor />
        <Terminal />
    </div>
}

const root = document.getElementById('root');
root.innerHTML = "";

render(<App />, root);