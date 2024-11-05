const ladder = {
    steps: 0,
    up() {
        this.steps++;
        return this;
    },
    down() {
        this.steps--;
        return this;
    },
    showStep() {
        console.log("steps", this.steps);
        return this;
    }
}

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.showStep();
// ladder.down();
// Que -. what changes i can do in the above code -> to call these methods in following way
ladder.up().up().up().down().showStep();