let pronoun = ["el", "la", "nuestro", "esta", "un", "este"];
let adj = ["increble", "gran"];
let noun = ["pantalon", "murcielago", "animal"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(pronoun[i] + adj[j] + noun[k] + ".com");
    }
  }
}
