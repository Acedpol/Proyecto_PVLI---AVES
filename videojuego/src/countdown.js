
export default class Countdown{

    constructor(scene,label, duration)
    {
        this.scene = scene;
        this.label = label;
        this.duration = duration;
        this.elapsed = 0;
        this.remaining = duration
    }
    start(callback)
    {
        this.stop();

        this.finishedCallback = callback

        this.timerEvent= this.scene.time.addEvent({
            delay: this.duration,
            callback: () =>{
                this.stop;

                if(callback)
                {
                    callback();
                }
            }
        }); 
    }
    
    stop()
    {
    
        if(this.timerEvent)
        {
            this.timerEvent.destroy();
            this.timerEvent = undefined;
        }
    }
    
    update()
    {
        if(!this.timerEvent||this.duration<=0)
        {
            return
        }
        this.elapsed = this.timerEvent.getElapsed();
        this.remaining = this.duration - this.elapsed; 
        const seconds = this.remaining / 1000;
        this.label.text = seconds.toFixed();


    }
    // tiempo transcurrido
    elapsedTime()
    {
        return this.elapsed;
    }
    getDuration()
    {
        return this.duration;
    }
}