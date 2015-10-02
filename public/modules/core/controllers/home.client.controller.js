'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
    //rdi = recommended daily intake
    var rdi_protein = 46;
    var rdi_carbohydrate = 310;

    var breakfast = 'rice';
    var lunch = 'amala';
    var dinner = 'moimoi';

		$scope.authentication = Authentication;
     var food = {
      rice: {
        protein: 1.3,
        carbs: 14.5
      },
      beans: {
        protein: 22.6,
        carbs: 67.8
      },
      amala: {
        protein: 0,
        carbs: 29.5
      },
      eba: {
        protein: 0.9,
        carbs: 70.6
      },
      wheat: {
        protein: 0.4,
        carbs: 35
      },
      yam: {
        protein: 2,
        carbs: 36.7
      },
      egg: {
        protein: 6,
        carbs: 0
      },
      pap: {
        protein: 7.4,
        catbs: 73
      },
      akara: {
        protein: 1.71,
        carbs: 15.77
      },
      moimoi: {
        protein: 5.6,
        carbs: 12.8
      },
      indomie: {
        protein: 12,
        carbs: 93
      },
      cornflakes: {
        protein: 15.6,
        carbs: 70
      },
      sphag: {
        protein: 12.2,
        carbs:74.4
      },

      getNutrient: function(meal1, meal2, meal3) {
        var protein_content = 0;
        var carbohydrate_content = 0;
        var meals = Array.prototype.slice.call(arguments);
        meals.map(function(meal) {
          protein_content += food[meal].protein;
          carbohydrate_content += food[meal].carbs;
        });
        return {protein_content, carbohydrate_content};
      },

      compareProtein: function() {
        var nutrients = food.getNutrient(breakfast, lunch, dinner);
        var protein_percent = nutrients.protein_content/rdi_protein * 100;
        nutrients.protein_content = 51;
        if (nutrients.protein_content >= rdi_protein - 5 && nutrients.protein_content <= rdi_protein + 5) {
          console.log(0);
        }
        else if (nutrients.protein_content < rdi_protein - 5) {
          console.log(-1);
        }
        else if (nutrients.protein_content > rdi_protein + 5) {
          console.log(1);
        }
      },

      compareCarbs: function() {
        var nutrients = food.getNutrient(breakfast, lunch, dinner);
        var carbs_percent = nutrients.carbohydrate_content/rdi_carbohydrate * 100;
        nutrients.protein_content = 51;
        if (nutrients.carbohydrate_content >= rdi_carbohydrate - 5 && nutrients.carbohydrate_content <= rdi_carbohydrate + 5) {
          console.log(0);
        }
        else if (nutrients.carbohydrate_content < rdi_carbohydrate - 5) {
          console.log(-1);
        }
        else if (nutrients.carbohydrate_content > rdi_carbohydrate + 5) {
          console.log(1);
        }
      }
    }
    // food.compare();
	}
]);