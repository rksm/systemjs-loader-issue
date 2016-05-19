var newSystem = new (System.constructor)();

newSystem.transpiler = "babel";
newSystem["import"]("./test-module.js")
  .then(m => console.log(`Is the System instance in test-module.js the same as used for importing it? ${m.observedSystem === newSystem}`))
  .catch(err => console.error(err));
  