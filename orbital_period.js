function calcOrbitalPeriod(avgAlt) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const twoPI = 2 * Math.PI;
  const semiMajorAxis = avgAlt + earthRadius;
  const semiMajorAxisCube = Math.pow(semiMajorAxis, 3);

  const squareRootADivU = Math.sqrt(semiMajorAxisCube / GM);

  const orbitalPeriod = Math.round(twoPI * squareRootADivU);

  return orbitalPeriod;
}

function orbitalPeriod(arr) {
  const result = arr.map((el) => {
    const orbitalPeriod = calcOrbitalPeriod(el.avgAlt);

    return { name: el.name, orbitalPeriod };
  });
  return result;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
