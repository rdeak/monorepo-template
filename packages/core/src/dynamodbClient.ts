import keyBy = require("lodash.keyby");

const groupByColumn = <T extends Record<string, unknown>>(
  columnName: keyof T,
  rows: T[]
): Record<string, unknown> => keyBy(rows, columnName);

const dynamodbClient = {
  groupByColumn,
};

export default dynamodbClient;
