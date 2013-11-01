gremlins.createHorde()
    .before(function(done) {
        setTimeout(function(){
            console.log('async');
            done();
        }, 500);
    })
    .before(function() {
        console.log('sync');
    })
    .breed(gremlins.crew.clicker().clickTypes(['click']))
    .breed(gremlins.crew.scroller())
    .breed(function() {
        console.log('I\'m a gremlin!');
    })
    .after(function() {
        console.log('finished!');
    })
    .unleash(10);
