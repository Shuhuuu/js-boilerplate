import m from 'mithril';
import { Home } from './components/home.ts';
import { Adder } from './components/adder.ts';
import { Adder2 } from './components/adder2.ts';
import { Table } from './components/table.ts';

m.route(document.body, "/", {
    "/": Home,
    "/adder": Adder,
    "/adder2": Adder2,
    "/table": Table
});
