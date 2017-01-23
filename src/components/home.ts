import m from 'mithril';

function view() {
    return (
        <div>
            <h1>Example components</h1>
            <ul>
                <li><a href='/adder' config={m.route}>Add two numbers</a></li>
                <li><a href='/adder2' config={m.route}>Add two numbers (using a class)</a></li>
                <li><a href='/table' config={m.route}>CSV Table</a></li>
            </ul>
        </div>
    );
}

export const Home = { view };
