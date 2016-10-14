(function () {
  'use strict';

  const app = angular.module('cameraApp');

  app.controller('itemsCtrl', function() {

    this.cameras = [
      {id: 1,name: 'Nikon D3100 DSLR',image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',rating: 4,price: 369.99,onSale: true},
      {id: 2,name: 'Canon EOS 70D',image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',rating: 2,price: 1099.0,onSale: false},
      {id: 3,name: 'Nikon D810A',image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',rating: 3,price: 3796.95,onSale: true},
      {id:4, name: 'Sony a7 Full-Frame Mirrorless', image:'https://images-na.ssl-images-amazon.com/images/I/71qT3esgbAL._SL1500_.jpg', rating: 5, price: 1399.99, onSale: false}
    ]

    this.searchQuery = '';
    this.selectValue = 'name';
  });

  app.controller('cartManage', function() {
    this.itemsInCart = [];

    this.addItem = function(cameraAddedToCart) {


      // check if camera exists in the cart already by checking id - do this by using filter
      let existingCamera = this.itemsInCart.filter(cameraInCart => {
        return cameraInCart.id === cameraAddedToCart.id
        })[0]
      // if it does exist, ++ the quantity
        if (existingCamera) {
          existingCamera.quantity++

        // if it does not exist, push the camera object into the cart array
        } else {
          let newCamera = {
            id: cameraAddedToCart.id,
            name: cameraAddedToCart.name,
            price: cameraAddedToCart.price,
            quantity: 1
          }
          this.itemsInCart.push(newCamera);
        }
        console.log(this.itemsInCart);
      };

    this.total = function(camera) {
      
    }
    });
})();
