export const iterate = (input, record) =>
  Object.entries(record).reduce(register, input);

export const process = (data) =>
  data.reduce(iterate, { indexes: {}, occurrences: {} });

export const register = (output, [property, value]) => {
  const {
    indexes: { [property]: indexes = {} },
    occurrences: { [property]: occurrences = [] },
  } = output;
  const { [value]: index = occurrences.length } = indexes;

  return {
    indexes: Object.assign(output.indexes, {
      [property]: Object.assign(indexes, { [value]: index }),
    }),
    occurrences: Object.assign(output.occurrences, {
      [property]: Object.assign(occurrences, { [index]: value }),
    }),
  };
};
