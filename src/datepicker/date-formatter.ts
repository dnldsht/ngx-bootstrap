import { formatDate } from '../bs-moment/format';

export class DateFormatter {
  public format(date: Date, format: string, locale: string): string {
    return formatDate(date, format, locale);
  }
}
