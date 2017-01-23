import m from 'mithril';

interface Controller {
    a: m.Property<string>;
    b: m.Property<string>;
    sum: () => string;
}

function controller(): Controller {
    return {
        a: m.prop("0"),
        b: m.prop("0"),
        sum: function() {
                return (parseInt(this.a()) + parseInt(this.b())).toString();
        }
    };
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

export const Adder = { controller, view };
