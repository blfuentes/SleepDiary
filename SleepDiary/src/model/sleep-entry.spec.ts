import { CustomTime } from './custom-time';
import { SleepEntry } from './sleep-entry';
import { SleepQuality } from './sleep-quality.enum';
import { SportType } from './sport-type.enum';

describe('SleepEntry', () => {
  it('should create an instance', () => {
    const baseDate = new Date();
    expect(new SleepEntry(baseDate, baseDate, baseDate, 0, baseDate,
            baseDate, false, false, false, SportType.None, SleepQuality.Middle)).toBeTruthy();
  });
  it('should calculate diff in minutes for dates', () => {
    const baseDate = new Date();
    const tmpSleepEntry = new SleepEntry(baseDate, baseDate, baseDate, 0, baseDate,
      baseDate, false, false, false, SportType.None, SleepQuality.Middle);
    const date1 = new Date('2020-09-26 22:40:00');
    const date2 = new Date('2020-09-27 07:20:00');
    const tmp = tmpSleepEntry.dateDiffInMinutes (date1, date2);
    expect(tmp).toBe(520);
  });
  it('should calculate hours and minutes for minutes total', () => {
    const baseDate = new Date();
    const tmpSleepEntry = new SleepEntry(baseDate, baseDate, baseDate, 0, baseDate,
      baseDate, false, false, false, SportType.None, SleepQuality.Middle);
    const tmp = tmpSleepEntry.convertMinutesToHoursMinutes(520);
    expect(tmp).toEqual(new CustomTime(8, 40, 0));
  });
});
