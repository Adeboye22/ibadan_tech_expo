import Carousel from "./Carousel";
import vn1 from "../assets/new-venue/Venue-1.png";
// import vn2 from "../assets/new-venue/Venue-2.png";
// import vn3 from "../assets/new-venue/Venue-3.png";
// import vn4 from "../assets/new-venue/Venue-4.png";
import sp1 from "../assets/hero/speaker2.png";

const slides = [vn1];

const Venue = () => {
  return (
    <div className="bg-background">
      <section className="container mx-auto">
        <section className="flex justify-between pt-3 font-primary text-primary items-center border-b-2 border-secondary">
          <h1 className=" sm:text-6xl lg:text-7xl font-extrabold">VENUE</h1>
        </section>

        <div className=" pt-2 lg:pt-12">
          <Carousel autoSlide={true}>
            {slides.map((s, i) => (
              <img
                style={{ height: "100%", width: "100%" }}
                key={i}
                src={s}
                className="min-w-[100%] min-h-[250px] object-cover rounded-lg"
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Venue;
