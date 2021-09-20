const { DateTime } = require('luxon');

export const getDateInputFormat = (date) => {
  return DateTime.fromISO(date).toISODate();
};

export const getPresentationFormat = (date) => {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED);
};
