// need to consolidate into one regex
function telephoneCheck(str) {
  const regex = /^\d{3}-\d{3}-\d{4}$/g;
  const regex2 = /^\(\d{3}\)\d{3}-\d{4}$/g;
  const regex3 = /^\(\d{3}\)\s\d{3}-\d{4}$/g;
  const regex4 = /^\d{3}\s?\d{3}\s?\d{4}$/g;
  const regex5 = /^[1]\s\d{3}-\d{3}-\d{4}$/g;
  const regex6 = /^[1]\s\(\d{3}\)\s\d{3}-\d{4}$/g;
  const regex7 = /^[1]\(\d{3}\)\d{3}-\d{4}$/g;
  const regex8 = /^[1]\s\d{3}\s\d{3}\s\d{4}$/g;

  if (regex.test(str)) return true;
  if (regex2.test(str)) return true;
  if (regex3.test(str)) return true;
  if (regex4.test(str)) return true;
  if (regex5.test(str)) return true;
  if (regex6.test(str)) return true;
  if (regex7.test(str)) return true;
  if (regex8.test(str)) return true;
  return false;
}

telephoneCheck("2 (757) 622-7382");
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("5555555"));
