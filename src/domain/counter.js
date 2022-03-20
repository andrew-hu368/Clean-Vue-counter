export const increment = (count, amount = 1) => (count += amount);

export const decrement = (count, amount = 1) => (count -= amount);

export const limitedIncrement = (count, upperBound = Infinity, amount = 1) =>
  count < upperBound ? increment(count, amount) : upperBound;

export const limitedDecrement = (count, lowerBound = Infinity, amount = 1) =>
  count > lowerBound ? decrement(count, amount) : lowerBound;

export const limitedIncrementWithMessage = (
  count,
  message,
  upperBound = Infinity,
  amount = 1
) => {
  return {
    message: count + amount < upperBound ? null : message,
    count: limitedIncrement(count, upperBound, amount),
  };
};

export const limitedDecrementWithMessage = (
  count,
  message,
  lowerBound = -Infinity,
  amount = 1
) => {
  return {
    message: count - amount > lowerBound ? null : message,
    count: limitedDecrement(count, lowerBound, amount),
  };
};
