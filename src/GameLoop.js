export class GameLoop {
    constructor(update, render){

        this.lastFrameTime = 0;
        this.accumulatedTime = 0;
        this.timeStep = 1000/60; // 60 fps

        this.update = update;
        this.render = render;

        this.requestAnimationFrameId = null;
        this.isRunning = false;
    }

    mainLoop = (timestamp) => {
        if (!this.isRunning) return;

        let deltaTime = timestamp - this.lastFrameTime;
        this.lastFrameTime = timestamp;

        //accumulate all the time since the last frame
        this.accumulatedTime += deltaTime;

        //fixed time step updates
        while (this.accumulatedTime >= this.timeStep) {
            this.update(this.timeStep); //here passes the fixed time step
            this.accumulatedTime -= this.timeStep;
        }

        //render
        this.render()

        this.requestAnimationFrameId = requestAnimationFrame(this.mainLoop);
    }
}