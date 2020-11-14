
//HTML elements
const youtubeLink = document.getElementById('youtube');
const githubLink = document.getElementById('github-gray');
const linkedinLink = document.getElementById('linkedin');
const twitterLink = document.getElementById('twitter');


//Function for changing colors of the social icons
const colorIcon = function (event) {
    let url;

    switch (event.target) {
        case youtubeLink:
            url = 'resources/icons/youtube-color.svg';
            break;
        case githubLink:
            url = 'resources/icons/github-color.svg';
            break;
        case linkedinLink:
            url = 'resources/icons/linkedin-color.svg';
            break;
        case twitterLink:
            url = 'resources/icons/twitter-color.svg';
            break;
    }
    
    event.target.setAttribute('src', url);
}

//Function for changing colors of the social icons back to gray
const resetIcon = function (event) {
    let url;

    switch (event.target) {
        case youtubeLink:
            url = 'resources/icons/youtube.svg';
            break;
        case githubLink:
            url = 'resources/icons/github.svg';
            break;
        case linkedinLink:
            url = 'resources/icons/linkedin.svg';
            break;
        case twitterLink:
            url = 'resources/icons/twitter.svg';
            break;
    }
    
    event.target.setAttribute('src', url);
}

//Mouse enter
youtubeLink.addEventListener('mouseenter', colorIcon);
githubLink.addEventListener('mouseenter', colorIcon);
linkedinLink.addEventListener('mouseenter', colorIcon);
twitterLink.addEventListener('mouseenter', colorIcon);

//Mouse leave
youtubeLink.addEventListener('mouseleave', resetIcon);
githubLink.addEventListener('mouseleave', resetIcon);
linkedinLink.addEventListener('mouseleave', resetIcon);
twitterLink.addEventListener('mouseleave', resetIcon);

