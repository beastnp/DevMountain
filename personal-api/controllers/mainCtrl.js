var person = [
    {name: 'Jorge Hamhoagie'},
    {location: 'Port of Subs across the globe'},
    {occupations: ['Banker', 'Kicking booty', 'Kissing dames']},
    {hobbies: [{
        name: 'Eating hoagies',
        type: 'current'
    },
    {
        name: 'Best accounting practices',
        type: 'past'
    },
    {
        name: 'Suave and seductive',
        type: 'current'
    }
    ]}
];

module.exports = {

    name: function (req, res, next) {
        res.status(200).json(person[0]);
    },
    
    getLocation: function (req, res, next) {
        res.status(200).json(person[1]);
    },
    
    getOccupations: function (req, res, next) {
        res.status(200).json(person[2]);
    },
    
    getLatestOccupations: function (req, res, next) {
        var occArr = person[2].occupations;
        res.status(200).json(occArr[occArr.length - 1]);
    },
    
    getHobbies: function (req, res, next) {
        res.status(200).json(person[3]);
    },
    
    getHobbiesType: function (req, res, next) {
//        Short Way:    
        var hobArr = person[3].hobbies;
        var finalHob = hobArr.filter(function(hobby) {
            return hobby.type === req.params.type;
        });
        
//        Long Way:        
//        var requestedHobby = function() {
//            var responseArr = [];
//            for (var i = hobArr.length - 1; i >= 0; i--) {
//                if (hobArr[i].type === req.params.type) {
//                    responseArr.push(hobArr[i]);
//                }
//            }
//            return responseArr;
//        };
//        var finalHob = requestedHobby();
        
        res.status(200).json(finalHob);
    }

};