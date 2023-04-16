// Stopwatch object
function stopWatch() {
    let started = false;
    let duration = 0;

    this.start = function() {
        if (started) throw new Error("Stopwatch is already started");
        duration = Date.now();
        started = true;
    }
    this.stop = function() {
        if (!started) throw new Error("Stopwatch has not started");
        duration = (Date.now() - duration) / 1000;
        started = false;
    }
    this.reset = function() {
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}