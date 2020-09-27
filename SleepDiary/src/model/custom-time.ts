export class CustomTime {
    hours: number;
    minutes: number;
    seconds: number;

    constructor(theHours?: number, theMinutes?: number, theSeconds?: number, inputDate?: Date) {
        if (inputDate) {
            this.hours = inputDate.getHours();
            this.minutes = inputDate.getMinutes();
            this.seconds = inputDate.getSeconds();
        } else {
            this.hours = theHours;
            this.minutes = theMinutes;
            this.seconds = theSeconds;
        }
    }
}
