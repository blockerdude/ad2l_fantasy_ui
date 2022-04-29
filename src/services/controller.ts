export default class Controller {
    static instance: Controller;

    private var1 = 'test'
    private var2 = 0

    private constructor() {

    }

    public static getInstance(): Controller {
        if (!Controller.instance) {
            Controller.instance = new Controller()
        }
        return Controller.instance
    }

    public doThing(str: string): void {

        Controller.instance.var1 = str
        Controller.instance.var2++
    }
}