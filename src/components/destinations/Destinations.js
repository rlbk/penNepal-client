import { useEffect } from "react";

import "./Destinations.css";
import UAE from "../images/UAE.png";
import Macau from "../images/macau.jpg";
import Hongkong from "../images/hongkong.png";
import China from "../images/China.png";
import Japan from "../images/japan.png";
import Thailand from "../images/Thailand.png";
import Europe from "../images/Europe.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Destinations = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="destinations-container" id="Destinations">
      <h1 className="sectionTitle">Destinations</h1>
      <p>
        Students pursuing hotel management course from various universities of
        Nepal have to mandatorily go for job internship to excel their practical
        knowledge. Students aspire to go abroad for hotel management internship.
        Since our inception, PEN has facilitated hundreds of hotel management
        students for internship in Nepal and abroad. PEN is a well-established
        brand among students in sending students abroad for hotel management
        internship. The members of PEN are well established educators and they
        readily provide quality service whenever student approaches for
        internship. Our team makes necessary arrangement from university
        selection to hotel internship placement and finally getting certificate
        of internship necessary for universities in Nepal.
      </p>

      <div className="d-countriesList">
        <div data-aos="flip-left" data-aos-offset="100" className="d-countries">
          <div className="face-1">
            <div className="d-flag">
              <img src={UAE} alt="National Flag" />
            </div>
            <h3 className="country-name">Dubai</h3>
            <p className="special-para">
              Dubai is one of the world's leading tourism destinations and
              tourism in Dubai is a major source of revenue. The city hosted
              14.9 million overnight visitors in 2016.In 2018; Dubai was the
              fourth most-visited city in the world based on the number of
              international visitors.
              <br />
              <br />
            </p>
          </div>
          <div className="face-2">
            <p className="special-para" style={{ paddingTop: "76px" }}>
              Dubai has been nicknamed the shopping capital of the Middle East.
              Aspects of Dubai's old culture, while occasionally overshadowed by
              the boom in economic development, can be found by visiting places
              around the creek, which splits Dubai into two halves, Bur Dubai
              and Deira.
              <br />
              Other attractions include the Sheikh Saeed Al Maktoum House; the
              Dubai Museum in the restored Al Fahidi Fort, which was erected
              around 1799; and the Heritage Village of Hatta, situated 115
              kilometers southeast of Dubai City in the heart of the rocky Hatta
              Mountains. The history of the village can be traced back 2000 –
              3000 years. It consists of 30 buildings, each differing in size,
              interior layout and building materials used.
              <br />
              Top hotels/resorts in Dubai are: Bruj Al Arab Jumeriah, The Palm,
              Dream Inn Dubai, The Ritz-carton etc
            </p>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-offset="100" className="d-countries">
          <div className="face-1">
            <div className="d-flag">
              <img src={Macau} alt="National Flag" />
            </div>
            <h3 className="country-name">Macau</h3>
            <p className="special-para">
              Known as the “Monte Carlo of the Orient”, Macao is renowned for
              its gaming tourism and is fast growing as the casino capital of
              the world.
              <br />
              <br />
            </p>
          </div>
          <div className="face-2">
            <p className="special-para" style={{ paddingTop: "86px" }}>
              Known as the “Monte Carlo of the Orient”, Macao is renowned for
              its gaming tourism and is fast growing as the casino capital of
              the world.
              <br />
              <br />
              Macao is a city with a blending of eastern and western cultures.
              Its unique landscape and a mixture of Euro-Asian architecture
              attract tourists from all over the world.
              <br />
              <br /> Thousands of visitors make the trip to Macao to attend
              specific events and festivals, such as the Arts Festival, Grand
              Prix, the International Fireworks Festival and the International
              Music Festival.
              <br />
              <br /> Top hotels/resorts in Dubai are: Bruj Al Arab Jumeriah, The
              Palm, Dream Inn Dubai, The Ritz-carton etc.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-offset="100" className="d-countries">
          <div className="face-1">
            <div className="d-flag">
              <img src={Hongkong} alt="National Flag" />
            </div>
            <h3 className="country-name">HongKong</h3>
            <p className="special-para">
              Hong Kong’s history and position lend it a unique cultural edge,
              while its famous skylines and abundance of hills, beaches and
              islands remains a strong draw.
              <br />
              <br />
            </p>
          </div>
          <div className="face-2">
            <p className="special-para" style={{ paddingTop: "76px" }}>
              Hong Kong’s history and position lend it a unique cultural edge,
              while its famous skylines and abundance of hills, beaches and
              islands remains a strong draw.
              <br />
              <br />
              It has famous destinies like Victoria park, Tian Tan Bouddha, Hong
              kong Disneyland etc which make it the best travel destination for
              visitors around the world.
              <br />
              <br /> Hong Kong has a number a events throughout the year that
              are aimed at attracting visitors. The authority claims that Hong
              Kong is an Events Capital of Asia.
              <br />
              <br /> Top hotels/resorts in Hong Kong are: Harbour Grand Kowloon,
              The Pottinger Hong Kong, Disneyland Hotel etc.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-offset="100" className="d-countries">
          <div className="face-1">
            <div className="d-flag">
              <img src={China} alt="National Flag" />
            </div>
            <h3 className="country-name">China</h3>
            <p className="special-para">
              China is renowned for the world-class cuisine. Chinese cuisine is
              highly diverse, drawing on several millennia of culinary history
              and geographical variety, in which the most influential are known
              as the "Eight Major Cuisines", including Sichuan, Cantonese,
              Jiangsu, Shandong, Fujian, Hunan, Anhui, and Zhejiang cuisines.
            </p>
          </div>
          <div className="face-2">
            <p className="special-para">
              China hosts the world's second-largest number of World Heritage
              Sites after Italy, and is one of the most popular tourist
              destinations in the world.
              <br />
              <br />
              The most popular destinations in China are mainly:
              <br />
              <p style={{ textAlign: "left" }}>
                {" "}
                ● Beijing with the Forbidden City, Tian'anmen Square and many
                other historical attractions. <br />● Shanghai with numerous
                shopping malls and the exciting skyline <br />
                ● the Great Wall of China <br />
                ● the former imperial city of Xian, famous for the Terracotta
                Army, among other things <br />
                ● Tibet with its imposing Himalayan mountains <br />● The
                tropical island of Hainan in the South China Sea south of Hong
                Kong.
              </p>
              <br />
              Top hotels/resorts in China are: Four Seasons Hotel, Amanfayan
              Hotel, Shangri-la Hotel etc.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-offset="100" className="d-countries">
          <div className="face-1">
            <div className="d-flag">
              <img src={Japan} alt="National Flag" />
            </div>
            <h3 className="country-name">Japan</h3>
            <p className="special-para">
              Japan is one of the oldest civilizations and has a beautiful and
              diverse history. It is the most amazing tourist destination and it
              offers many unique experiences that you cannot find in any other
              part of the world.
            </p>
          </div>
          <div className="face-2">
            <p className="special-para" style={{ paddingTop: "116px" }}>
              The stunning, diverse scenery with mountains and breathtaking
              views, which are much appreciated by the Japanese, offers so many
              different experiences that attract tourists from all corners of
              the world.
              <br />
              <br /> It has 21 world heritage sites, including Himeji Castle,
              Historic Monuments of Ancient Kyoto etc.
              <br />
              <br />
              Top hotels/resorts in Japan are: Hilton Hotel, The Okura Tokyo
              Hotel, Park Hyatt Tokyo Hotel etc.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-offset="100" className="d-countries">
          <div className="face-1">
            <div className="d-flag">
              <img src={Thailand} alt="National Flag" />
            </div>
            <h3 className="country-name">Thailand</h3>
            <p className="special-para">
              Thailand is one of the world’s leading travel destinations. The
              country is well-known for its variety of cultural uniqueness: from
              exotic food to beautiful landscapes and rich cultural heritage.
            </p>
          </div>
          <div className="face-2">
            <p className="special-para" style={{ paddingTop: "126px" }}>
              Thailand is one of the world’s leading travel destinations. The
              country is well-known for its variety of cultural uniqueness: from
              exotic food to beautiful landscapes and rich cultural heritage.
              <br />
              <br />
              Tourism has also brought opportunities in employment and major
              business expansions for Thai companies in the tourism sector.
              <br />
              <br /> Top hotels/resorts in Thailand are: Four seasons tented
              camp resort, Soneva Kiri , Banyan Tree Phuket etc.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-offset="100" className="d-countries">
          <div className="face-1">
            <div className="d-flag">
              <img src={Europe} alt="National Flag" />
            </div>
            <h3 className="country-name">Europe</h3>
            <p className="special-para">
              European culture is the root of Western civilisation, which traces
              its lineage back to ancient Greece and ancient Rome.The
              outstanding growth industry of tourism—supplementing business,
              professional, and student travel—brings employment and foreign
              exchange to many Europeans
            </p>
          </div>
          <div className="face-2">
            <p className="special-para" style={{ paddingTop: "46px" }}>
              The outstanding growth industry of tourism—supplementing business,
              professional, and student travel—brings employment and foreign
              exchange to many Europeans, especially in the Mediterranean
              countries, with their combination of sunshine, beaches, scenery,
              and historical monuments.
              <br />
              <br /> The world-renowned cities of Europe attract large numbers
              of tourists as well. In fact, European countries are consistently
              among the top tourist destinations of the world; they draw
              visitors from within Europe as well as from other continents.
              <br />
              <br />
              Top hotels/resorts in Europe are: Corinthia Budapest, The Grand
              Hotel, Sofitel London Heathrow etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
