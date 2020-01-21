export class Component {
    constructor({ container }) {
        this.container = container;

        container.appendnode();

        var colIndex = 0;
        var rowIndex = 0;

        var colTotal = 0;
        var rowTotal = 0;

        for(rows){
            ////
            for(cols) {
                ////
                rows.append(///)
            }
        }



        work
    }

    // logics = config.logics;

    // render() {
        // document.querySelector(this.selector).innerHTML = this.template;
    // }

    work() {
        this.logics(this.id);
    }

    createBox = (col, n) => {
        for (let i = 0; i < n; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            col.append(box);
        }
    };

    createCol = (col, n) => {
        let col = document.createElement("div");
        col.classList.add("col");
        container.append(col);
        createBox(col, counter);
    };
}
