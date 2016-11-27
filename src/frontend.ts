import m from 'mithril';
import Papa from 'papaparse';

var app = {};

function parseCSV(data: string): any {
    return Papa.parse(data, {header: true, dynamicTyping: true, skipEmptyLines: true});
}

// model
app.GetCSV = function(name: string) {
    // Returns a promise object
    return m.request({
        method: "GET",
        url: "/csv/" + name + ".csv",
        // we need deserialize here, as the backend does not send JSON, but CSV data.
        // (Mithril by default assumes that you are sending JSON)
        deserialize: parseCSV
    });
};

// controller
app.controller = function() {
    let table1 = app.GetCSV("table1");

    return {
        table: table1,
        x: m.prop("0"),
    }
};

// view
// This is re-rendered each time an input event occurs.
app.view = function(ctrl) {
    let x = parseInt(ctrl.x());
    let table = ctrl.table(); // this waits until the data becomes available
    console.log(table);

    // Find corresponding y entry
    var y: number | undefined = undefined;
    for (let row of table.data) {
        if (row.x === x) {
                console.log("Found");
                y = row.y;
                break;
        }
    }

    const rows = table.data.map(row => {
        const className = (row.x === x) ? "found" : "";

        return <tr className={className}>
                    <td>{row.x}</td>
                    <td>{row.y}</td>
               </tr>;
    });

    const table = <table class="mytable">
            <thead>
                <tr>
                    <th>x</th>
                    <th>y</th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>;

    return [
        <label for="x">x: </label>,
        <input id="x" type="number"
                value={ctrl.x()}
                oninput={m.withAttr("value", ctrl.x)}
            />,
        <div>y: { y === undefined ? "Not found" : y.toString() }</div>,
        <hr />,
        table
    ];
};

m.mount(document.body, app);
