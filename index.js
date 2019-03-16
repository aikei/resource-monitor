const child_process = require("child_process");


class ResourceMonitor {

    constructor(options) {
        this.default = [];
        this.default.push("ps -aux");
        this.default.push("top -n 1 -b -c");
        this.default.push("df -h");
        this.default.push("free -h");
        this.options = options;

        this.list = [];

        if (options.commands) {
            this.list = this.list.concat(options.commands);
        }

        if (options.default) {
            this.list = this.list.concat(this.default);
        }

        if (options.pm2) {
            this.list.push("pm2 list");
        }

        if (!this.list.length) {
            this.list = this.default;
        }
    }

    start() {
        this.tick();
        this.intervalId = setInterval(this.tick.bind(this), this.options.interval || 10000);
    }

    output(...args) {
        console.log(...args);
    }

    tick() {
        this.output(Date());
        this.list.forEach(listCmd => {
            const resp = child_process.execSync(listCmd).toString("utf8");
            this.output("  > "+listCmd+"\n"+resp);
        });
        this.output("\n==========================================================\n");
    }

}

module.exports = ResourceMonitor;
