var PersonName = "Maira";
console.log("lowercase:", PersonName.toLowerCase());
console.log("uppercase:", PersonName.toLocaleUpperCase());
console.log("titlecase:", PersonName.replace(/\bw/g, function (c) { return c.toLocaleUpperCase(); }));
