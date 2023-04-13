import { Button, Col, Divider, Row, Tag, Grid, Carousel } from "antd";
import { IMAGES } from "../../../constants";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const { useBreakpoint } = Grid;

export const CarouselOne = ({ flexDirection }) => {
  const screens = useBreakpoint();
  return (
    <Row>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        className="pt-20 p-5 md:p-20 flex justify-center"
        // style={flexDirection ? flexDirection : {}}
      >
        {/* <div className="w-64 h-64 overflow-hidden"> */}
        <img
          src={IMAGES.EbahiBook}
          alt="ebahi-tayo"
          className="object-cover w-full h-full"
        />
        {/* </div> */}
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        className={`${screens.lg ? "pr-20 pt-20" : "md:px-20 px-5"} "`}
      >
        <Tag color="magenta" className="mb-5">
          As a Worship LEADER and Artiste.
        </Tag>
        <Carousel
          nextArrow={<GrFormNextLink color={"#ce33ce"} />}
          prevArrow={<GrFormPreviousLink color={"#ce33ce"} />}
          dots={false}
          arrows={true}
          autoplay={true}
          autoplaySpeed={12000}
        >
          <p className=" text-slate-600  text-[14px] font-semibold">
            As a Ministry gift, in the last 20 years, I have worked at the core
            of my life’s assignment with the mandate to continuously raise a
            sound that beckons on God's sons and daughters to worship their
            creator in the pureness of heart through the instrumentality and
            power of Songs.
          </p>

          <p className=" text-slate-600  text-[14px] font-semibold">
            I am a strong voice of worship, an outstanding vocalist and a
            songwriter. I am a lady with a tender heart that pants after God,
            and one with such great commitment to her music ministry
          </p>

          <p className=" text-slate-600  text-[14px] font-semibold">
            Growing up, I always had an intense passion and talent for music. I
            started writing songs at the tender age of 13.
          </p>

          <p className=" text-slate-600  text-[14px] font-semibold">
            My music ministry started in the Churches of God, where I had
            opportunities to sing at youth camp meetings and special events
            organized by the church. My passion has seen me grow my craft as
            member of the Anointed, the music ministry of Harvesthouse Christian
            center where I developed capacity in songwriting, song leading and
            dynamics of the field of music under Senior pastors Revd. and Pastor
            Mrs. Gbeminiyi Eboda under whom I learnt the very essence of worship
            and a heart of service and has actively served as Worship leader for
            more than two decades.
          </p>

          <p className=" text-slate-600  text-[14px] font-semibold">
            In 2014, I began hosting annual Musical Concerts, tagged
            SILENTSHOUTS where with my team I get to lead saints to worship with
            passion and grow into soldiers of Christ with a strong sense of
            purpose towards fulfilling the mission of the kingdom of God on
            earth. This concerts has grown from Nigerian campuses into interior
            communities within Nigeria t o the glory of God alone.
          </p>

          <p className=" text-slate-600  text-[14px] font-semibold">
            My dynamism as a SONG- goddess has seen me lead over 5000 and more
            praise- worship sessions across national and international
            platforms, recorded 15 singles including the Award winning song LAY
            IT TO HEART and released 2 Albums- EMERGENCE (a live recording
            concert) and GIVE HIM PRAISE (an extended play of 3 tracks)
          </p>

          <p className=" text-slate-600  text-[14px] font-semibold">
            At SILENTSHOUT WORSHIP ACADEMY, I trains Minstrels, Artiste,
            Singers, Worship teams and choir members on Contemporary worship
            leading through Live workshops, webinars and my signature online
            courses.
          </p>

          <p className=" text-slate-600 text-[14px] font-semibold">
            I have had the privilege of sharing the stage with various National
            and International top gospel artistes like Big Bolaji, Wale Adenuga,
            Efe Nathan, Bobb fitts, Sammy Okposo, Yetunde Are, Tommy Tush,
            Ibironke bashorun, Tunde Olugbaila, Laykay Sax and many others over
            the years.
          </p>

          <p className="text-slate-600 text-[14px] font-semibold">
            I am still singing (lolll). I do not think I have what it takes to
            stop singing.....
          </p>
        </Carousel>
      </Col>
    </Row>
  );
};
