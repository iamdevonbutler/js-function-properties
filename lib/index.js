module.exports = (func, obj) => {
  return new Proxy(() => {}, {
    get(target, property) {
      if (obj[property] !== undefined) {
        return obj[property];
      }
      else {
        let available = Object.keys(obj).map(prop => `"${prop}"`).join(', ');
        throw new Error(`Developer error. Property "${property}" is undefined. Available properties include: ${available}.`);
      }
    },
    apply(target, thisArg, argumentsList) {
      return func.apply(null, argumentsList);
    }
  });
};
