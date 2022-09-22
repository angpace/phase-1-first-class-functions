function receivesAFunction(thing) {
    return thing();
  }
  
  receivesAFunction(function () { return 4 + 5; });

  function returnsANamedFunction(){
    return receivesAFunction
  }

  function returnsAnAnonymousFunction(){
    return function(){}
  }