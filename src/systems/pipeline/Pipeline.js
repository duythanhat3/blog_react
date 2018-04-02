export default class Pipeline {
    constructor(stages = []) {
        this.payload = null;
        this.stages = stages;
    }

    send(payload) {
        this.payload = payload;

        return this;
    }

    through(stage) {
        this.stages = this.stages.concat(Array.isArray(stage) ? stage : [stage]);

        return this;
    }

    then(destination = null) {
        destination = destination ? destination : payload => payload;

        let pipeline = this.buildPipeline(destination);

        return pipeline(this.payload);
    }

    buildPipeline(destination) {
        let stages = [...this.stages];

        return stages.reverse().reduce(
            (next, stage) => payload => this.invokeStage(stage, payload, next),
            destination
        );
    }

    invokeStage(stage, payload, next) {
        return stage(payload, next);
    }
}