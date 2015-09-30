'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.meals = {
      breakfast: [{
        name: 'Indomie',
        image: 'indomie.jpg'
      }, {
        name: 'Cereal (Cornflakes, Coco-pops, etc)',
        image: 'cereal.jpg'
      }, {
        name: 'Rice',
        image: 'rice.jpg'
      }, {
        name: 'Bread and stew/butter',
        image: 'bread.jpg'
      }, {
        name: 'pancake',
        image: 'pancake.jpg'
      }, {
        name: 'yam and egg',
        image: 'yam.jpg'
      }, {
        name: 'pap and akara/moimoi',
        image: 'pap.jpg'
      }],
      lunch: [{
        name: 'indomie',
        image: 'indomie.jpg'
      }, {
        name: 'semo',
        image: 'semo.jpg'
      }, {
        name: 'pounded yam',
        image: ''
      }, {
        name: 'fufu',
        image: ''
      }, {
        name: 'beans and plantain',
        image: ''
      }, {
        name: 'rice',
        image: ''
      }, {
        name: 'pasta(sphag, macaroni)',
        image: ''
      }],
      dinner: [{
        name: 'indomie',
        image: ''
      }, {
        name: 'eba',
        image: ''
      }, {
        name: 'amala',
        image: ''
      }, {
        name: 'porridge',
        image: ''
      }, {
        name: 'beans',
        image: ''
      }, {
        name: 'pancake',
        image: ''
      }, {
        name: 'fruits',
        image: ''
      }]
    };
  }
]);
