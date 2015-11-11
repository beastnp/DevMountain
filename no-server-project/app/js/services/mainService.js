angular.module('noServerApp').service('mainService', function() {
    
    this.skillsArray = [
        {
            name: 'HTML',
            url: 'http://jeffchapman.io/wp-content/uploads/2015/04/HTML5_Badge_512-150x150.png'
        }, 
        {
            name: 'CSS',
            url: 'http://jeffchapman.io/wp-content/uploads/2015/04/CSS3_Logo-150x150.png'
        },
        {
            name: 'JavaScript',
            url: 'http://cursohtml5js.com/js.png'
        },
        {
            name: 'AngularJS',
            url: 'http://pucksart.com/wp-content/uploads/2014/10/AngularJS-Shield-large-282x300.png'
        },  
        {
            name: 'Git',
            url: 'http://jeffchapman.io/wp-content/uploads/2015/04/git-150x150.png'
        }, 
        {
            name: 'Firebase',
            url: 'http://jeffchapman.io/wp-content/uploads/2015/04/firebase_branding_r4_FINAL_03-150x150.png'
        }
    ];
    
})