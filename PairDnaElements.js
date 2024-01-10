function pairElement(str) {
  const pairingArray = [];
  const dnaMap = dnaPairMap();

  for (const char of str) {
    const temp = [char, dnaMap.get(char)];
    pairingArray.push(temp);
  }

  return pairingArray;
}

var dnaPairMap = function () {
  const dnaPair = [
    ["A", "T"],
    ["T", "A"],
    ["C", "G"],
    ["G", "C"],
  ];
  const dnaMap = new Map(dnaPair);

  return dnaMap;
};

pairElement("GCG");
