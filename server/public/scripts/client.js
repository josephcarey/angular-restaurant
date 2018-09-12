
let foodApp = angular.module( 'FoodApp', [] )

let foods = []

foodApp.controller( 'MainController', function ( $scope, $http ) {

    let self = this;

    self.foodList = foods;

    self.addFood = function ( fromHTML, fromHTML2 ) {

        if ( Number( fromHTML2 ) > 0 && Number( fromHTML2 ) < 101 ) {

            foodToAdd = {
                name: fromHTML,
                deliciousness: Number( fromHTML2 )
            };

            $http( {
                method: 'POST',
                url: '/foods',
                data: foodToAdd
                // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            } ).then( function () {
                console.log( 'back from server' );
            } )

        } else {
            alert( 'Please enter a deliciousness between 1 and 100.' )
        }

    }

    self.refreshFoods = function () {
        $http( {
            method: 'GET',
            url: '/foods'
        } ).then( function ( response ) {
            console.log( 'hit', response );

            self.foodList = [];
            for ( i in response.data ) {
                console.log( 'hithit' )
                self.foodList.push( response.data[i] );
            }

        } )
    }



} );