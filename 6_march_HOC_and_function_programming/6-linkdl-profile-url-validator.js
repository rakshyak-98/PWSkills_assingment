function checkLinkedinProfileUrl(rawUrl) {
  // HACK: use of hyphen (-) interpreted as a range operator so excluded.
  // TODO: finde other way to include hyphen (-)
  const profileCheckRegEx = /in\/[a-zA-Z0-9_]{5,29}[a-zA-Z0-9]$/i;
  try {
    const url = new URL(rawUrl); // INFO: to check valid url convertable if not throw error.
    const obj = {
      url: rawUrl,
      protocol: /https?:/.test(url.protocol),
      hostname: /www\.linkedin.com/.test(url.hostname),
      profileId: {
        valid: profileCheckRegEx.test(url.pathname),
        length: url.pathname.split("/")[2].length,
      },
    };
    return obj;
  } catch (error) {
    return error.message;
  }
}

const url1 = "https://www.linkedin.com/in/johndoe123";
const url2 = "https://www.linkedin.com/in/jane-doe_456";
const url3 = "https://www.linkedin.com/in/joh"; // invalid, profile ID too short
const url4 =
  "https://www.linkedin.com/in/johndoe123456789012345678901234567890"; // invalid, profile ID too long

const url5 = "https://www.linkedin.com/in/john-doe"; //

console.log(checkLinkedinProfileUrl(url1)); // true
console.log(checkLinkedinProfileUrl(url2)); // true
console.log(checkLinkedinProfileUrl(url3)); // false
console.log(checkLinkedinProfileUrl(url4)); // false
console.log(checkLinkedinProfileUrl(url5)); // false
