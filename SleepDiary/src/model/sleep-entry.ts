import { CustomTime } from './custom-time';
import { SleepQuality } from './sleep-quality.enum';
import { SportType } from './sport-type.enum';

const _MS_PER_MN = 1000 * 60;

export class SleepEntry {
    entryDate: Date;
    bedTime: Date;
    sleepStart: Date;
    awakenings: number;
    resumeSleep: CustomTime;
    sleepEnd: Date;
    sleepTotal: CustomTime;
    siesta: boolean;
    drugs: boolean;
    coffeineAlcohol: boolean;
    sport: SportType;
    sleepQuality: SleepQuality;

    constructor(theentryDate: Date, thebedTime: Date, thesleepStart: Date, theawakenings: number,
                theresumeSleep: Date, thesleepEnd: Date, thesiesta: boolean, thedrugs: boolean,
                thecoffeineAlcohol: boolean, thesport: SportType, thesleepQuality: SleepQuality) {
        this.entryDate = theentryDate;
        this.bedTime = thebedTime;
        this.sleepStart = thesleepStart;
        this.awakenings = theawakenings;
        this.resumeSleep = new CustomTime(theresumeSleep.getHours(), theresumeSleep.getMinutes(), theresumeSleep.getSeconds());
        this.sleepEnd = thesleepEnd;
        this.siesta = thesiesta;
        this.drugs = thedrugs;
        this.coffeineAlcohol = thecoffeineAlcohol;
        this.sport = thesport;
        this.sleepQuality = thesleepQuality;
    }

    // a and b are javascript Date objects
    dateDiffInMinutes(a: Date, b: Date): number {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours(), b.getMinutes(), b.getSeconds());

        return Math.floor((utc2 - utc1) / _MS_PER_MN);
    }

    convertMinutesToHoursMinutes(numberOfMinutes: number): CustomTime {
        const hours = (numberOfMinutes / 60);
        const rHours = Math.floor(hours);
        const minutes = Math.round((hours - rHours) * 60);
        const rMinutes = Math.floor(minutes);

        return new CustomTime(rHours, rMinutes, 0);
    }

    getSleepTotal(): CustomTime {
        const initialTotalSleep = this.dateDiffInMinutes(this.sleepStart, this.sleepEnd);
        const resumeSleepMinutes = this.resumeSleep.hours * 60 + this.resumeSleep.minutes;
        const tmpTotal = initialTotalSleep - resumeSleepMinutes;

        return this.convertMinutesToHoursMinutes(tmpTotal);
    }
}
