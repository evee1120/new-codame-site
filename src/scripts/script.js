// Define an asynchronous function to fetch and update the hero content
async function fetchHeroContent() {
    try {
        const response = await fetch('https://api-us.storyblok.com/v2/cdn/stories/landing?cv=1697159503&token=yPople2hy09krH7bbnQLPgtt', {
            method: 'GET',
            headers: {
                'Authorization': 'v1fxbuwZXfPeZufShydBKgtt', // Replace with your actual API token
            }
        });
        const data = await response.json();

        // Log the fetched data to the console for debugging
        console.log('Fetched Data:', data);

        const heroContent = data.story.content;

        if (heroContent) {
            // Access title and description within the hero component
            const heroComponent = heroContent.body.find(item => item.component === 'hero');
            if (heroComponent) {
                console.log('HeroComponent: ', heroComponent);
                document.getElementById('hero-title').textContent = heroComponent.title;
                document.getElementById('hero-description').innerHTML = heroComponent.description.content[0].content[0].text;

                // Access the background image from the hero component
                // ...

                // Get hero cta
                document.getElementById('hero-button').textContent = heroComponent.ctaText;
                document.getElementById('hero-button').href = heroComponent.ctaLink.url; // Access the URL property within ctaLink
            } else {
                console.error('Hero component not found in the data structure.');
            }
        } else {
            console.error('Invalid data structure from Storyblok');
        }
    } catch (error) {
        console.error('API request error:', error);
    }
}

// Call the asynchronous function to fetch and update the hero content
fetchHeroContent();

// Define the myFunction() to toggle the navigation
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}