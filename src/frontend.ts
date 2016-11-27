import m from 'mithril';

var app = {};

//controller
app.controller = function() {
    return {
        a: m.prop("0"),
        b: m.prop("0"),
        sum: function() {
                return (parseInt(this.a()) + parseInt(this.b())).toString();
        }
    }
};

//view
app.view = function(ctrl) {
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
};

m.mount(document.body, app);
