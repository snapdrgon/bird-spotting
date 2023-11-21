import BirdMapComponent from './BirdMapComponent';
export default function BirdComponent() {

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-3">Bird Spotting</h1>
                <br />
                <br />
                <p className="lead">The Bird Spotting map below allows you to double click on the map and any birds spotted in the area will be marked
                    with the common name of the bird, the number spotted and the location. If you click on the bird's name a new browser tab will open and
                    direct you to a web page on eBird containing additional information. The information is provided through the
                    Cornell Lab of Ornithology eBird API. For additional information on how you can help add to the database of birds spotted in your area
                    you can go to  <a href="http://ebird.org/content/ebird/" target="_blank">eBird</a>
                    
                </p>
                <hr className="my-4" />
                <p className="lead">If you want additional information on the birds spotted, suggested sites include
                    <a href="https://www.allaboutbirds.org/" target="_blank" >All About Birds</a> and <a href="http://www.audubon.org/birds/"
                        target="_blank" >Audubon</a>.</p>
                <p id="disclaimer"><strong>Please note that TakWare LLC is not associated with the Cornell Lab of Ornithology or Audubon.</strong></p>
            </div>
            <em id="credit"><a href="https://www.pexels.com/u/annaelk/" target="_blank">Photo by Adrianna Calvo on Pexels</a></em>
            <BirdMapComponent />
            <footer id="footer">
                <hr />
                <address>
                    <span><div id="snapmail"><a href="mailto:admin@bird-spotting.com">contact us</a></div></span>
                    <span id="profile"><a href="http://www.linkedin.com/in/lynn-kirste-3625a137" target="_blank">LinkedIn
                        Profile</a></span>
                </address>
                <br/>

                <div id="siteicon">Site Icon made by <a href="http://www.freepik.com/" target="_blank">Freepik</a> from <a
                    href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a><br/>
                    Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></div>

                <div id="company">TakWare LLC<sup>&copy;</sup></div>
                <br/><br/>
            </footer>


        </>
    );
}  