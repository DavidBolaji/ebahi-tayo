import { Badge, Button, Card, Space } from "antd";
import { Grid } from "antd";
import { DOCS, IMAGES } from "../../constants";
const { useBreakpoint } = Grid;

export const cards = [
  {
    title: "Prayed Up",
    description: "A book about praying",
    image: IMAGES.EbahiPrayedUp,
    button: "Download",
    badge: "Paid",
    link: "https://www.google.com/url?q=https%3A%2F%2Fpaystack.com%2Fpay%2Fprayedupdiscounted_test&sa=D&sntz=1&usg=AOvVaw2rN4yaQ-YyT4UV6ajpB4Xf",
  },
  {
    title: "Use Me",
    description: "Music showing total surrender",
    image: IMAGES.EbahiMusic,
    button: "Listen",
    badge: "Free",
    link: "http://www.google.com/url?q=http%3A%2F%2Fbit.ly%2Fuseme06&sa=D&sntz=1&usg=AOvVaw03BSeThYJKahn0QExXnnv5",
  },
  {
    title: "Reflection",
    description: "Book about Discovery",
    image: IMAGES.EbahiReflection,
    button: "Download",
    badge: "Free",
    link: DOCS.ReflectionPDF,
  },
  // {
  //   title: "Card 4",
  //   description: "Description for Card 4",
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   title: "Card 5",
  //   description: "Description for Card 5",
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   title: "Card 6",
  //   description: "Description for Card 6",
  //   image: "https://via.placeholder.com/150",
  // },
];

const ResourceMain = () => {
  const screens = useBreakpoint();

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="md:px-20 px-5  pt-20 pb-20 bg-[#fafafa]">
      <h3 className="text-center md:text-3xl font-extrabold uppercase mb-10 text-[#ce44c3]">
        ETO's Resources
      </h3>
      <div className="grid md:grid-cols-3 grid-cols-1">
        {cards.map((card, index) => (
          <div className={`col-span-1 m-5`} key={index}>
            <Badge.Ribbon text={card.badge} color="pink">
              <Card
                className="border"
                hoverable
                bordered={false}
                cover={
                  <div className="w-64 h-64 border-b-2 border-[#ce33ce]">
                    <img
                      alt={card.title}
                      className="object-cover object-top w-full h-full"
                      src={card.image}
                    />
                  </div>
                }
              >
                <Card.Meta title={card.title} description={card.description} />
                <div className="flex justify-end">
                  <Button onClick={() => handleClick(card.link)}>
                    {card.button}
                  </Button>
                </div>
              </Card>
            </Badge.Ribbon>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceMain;
