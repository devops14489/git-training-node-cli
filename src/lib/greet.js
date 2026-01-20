function greet(name) {
  const who = (name && name.trim()) ? name.trim() : "Mundo";
  const now = new Date().toISOString();
  return `Olá, ${who}! (${now})`;
}

module.exports = { greet };
