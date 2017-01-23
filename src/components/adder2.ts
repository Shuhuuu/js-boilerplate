import m from 'mithril';

// Using a class as controller
class Controller {
    a: m.Property<string>;
    b: m.Property<string>;

    constructor() {
        this.a = m.prop("0");
        this.b = m.prop("0");
    }

    sum(): string {
        return (parseInt(this.a()) + parseInt(this.b())).toString();
    }
}

function view(ctrl: Controller) {
    return [
        <input type="number"
                value={ctrl.a()}
                oninput={m.withAttr("value", ctrl.a)}
            />,
        <input
                type="number"
                value={ctrl.b()}
                oninput={m.withAttr("value", ctrl.b)}
            />,
        <div>{ ctrl.a() } + { ctrl.b() } = { ctrl.sum() }</div>
    ];
}

export const Adder2 = { controller: Controller, view };
