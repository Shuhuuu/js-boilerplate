import m from 'mithril';
import { Home } from './components/home.ts';
import { Adder } from './components/adder.ts';
import { Table } from './components/table.ts';

m.route(document.body, "/", {
    "/": Home,
    "/adder": Adder,
    "/table": Table
});
