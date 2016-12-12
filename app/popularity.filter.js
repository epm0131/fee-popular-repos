(function() {
  'use strict';

angular.module('gh')
  .filter('popularity', PopularityFilter);
  console.log('am i being created?');

function PopularityFilter() {

  return function sortByPopularity(input) {

    var popularity = input.map(function calPopNum(repo) {

      var pop = repo.stargazers_count + (2*repo.forks_count)+(repo.open_issues_count/2);
      repo.popularity = pop;
      console.log('hello', pop);
      return repo;
    });
    popularity = popularity.sort(function sortPopularity(a,b) {
      if(a.popularity > b.popularity) {
        return -1;
      } else {
        return 1;
      }

  });
  return popularity;
    };
  }


}());
