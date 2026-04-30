declare module 'cal-parser' {
  const ical: {
    parseString: (ics: string) => {
      calendarData: unknown;
      events: any[];
    };
  };

  export = ical;
}
