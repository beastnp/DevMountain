var app = angular.module('itunes');

app.service('itunesService', function ($http, $q) {
    //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
    //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.

    //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
    //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
    //Note that in the above line, artist is the parameter being passed in. 
    //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here

    
    this.getArtist = function (artist) {

    var url = 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
    var deferred = $q.defer();

    $http.jsonp(url).then(function (response) {
        var parsedResponse = response.data.results;
        console.log(parsedResponse);

        var myFinalArray = [];

        parsedResponse.forEach(function (element) {
            var obj = {};
            obj.AlbumArt = element.artworkUrl100;
            obj.Artist = element.artistName;
            obj.Collection = element.collectionName;
            obj.CollectionPrice = element.collectionPrice;
            obj.Play = element.previewUrl;
            obj.Type = element.kind;
            obj.SongTitle = element.trackName;
            myFinalArray.push(obj);
        })
        deferred.resolve(myFinalArray);
    })
    return deferred.promise;
};
    
    

});