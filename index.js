function receivesAFunction(spy) {
    return spy();
}

function returnsANamedFunction() {
    return function rank () {}
}

function returnsAnAnonymousFunction () {
     return (function() {
         return 'something';
     })
}

// function returnsANamedFunction(captain) { 
//     return captain();
// }

// function Monday() {
//     exerciseRoutine(liftWeights);
//   }

//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }