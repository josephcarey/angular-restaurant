express = require( 'express' );
app = express();
const bodyParser = require( 'body-parser' );

foods = [
    { name: 'Pasta', deliciousness: 99 },
    { name: 'Pizza', deliciousness: 8 },
    { name: 'Sandwiches', deliciousness: 98 },
    { name: 'Lasagna', deliciousness: 97 }
]

// Uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// Globals
const PORT = process.env.PORT || 5000;

app.all( '*', function ( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "X-Requested-With" );
    next();
} );

app.get( '/foods', ( req, res ) => {

    res.send( foods );

} );

app.post( '/foods', ( req, res ) => {

    console.log( req );

    foods.push( req.body );

} );

// Spin up the server
app.listen( PORT, () => {
    console.log( 'Server is up and listening on', PORT, '. . .' );
} )