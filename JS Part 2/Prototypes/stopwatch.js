// Move methods into the prototype
function stopWatch() {
    let started = false;
    let duration = 0;

    stopWatch.prototype.start = function() {
        if (started) throw new Error("Stopwatch is already running");
        started = true;
        duration = Date.now();
    }

    stopWatch.prototype.stop = function() {
        if (!started) throw new Error("Stopwatch is not running");
        started = false;
        duration = (Date.now() - duration) / 1000;
    }

    stopWatch.prototype.reset = function() {
        duration = 0;
        started = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}
