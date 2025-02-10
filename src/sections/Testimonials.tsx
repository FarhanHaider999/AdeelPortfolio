import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Michael Brown",
    position: "CTO @ BrightFuture",
    text: "Adeel played a crucial role in optimizing our backend architecture and improving system performance. His expertise in scalable web solutions helped us enhance efficiency and reliability.",
    avatar: memojiAvatar1,
  },
  {
    name: "James Miller",
    position: "Lead Developer @ CreativeWave",
    text: "Working with Adeel was an excellent experience. His full-stack expertise ensured our platform was not only visually impressive but also highly functional and performant.",
    avatar: memojiAvatar3,
  },
  {
    name: "Elena Rodriguez",
    position: "CEO @ NextGen Solutions",
    text: "Adeel's deep technical knowledge and problem-solving skills have been invaluable. His backend optimizations significantly improved our application's speed and scalability.",
    avatar: memojiAvatar2,
  },
  {
    name: "Mark Johnson",
    position: "Product Lead @ FutureTech",
    text: "Adeel transformed our web application with his strong backend and API development skills. The seamless integration of third-party services was a game-changer for our platform.",
    avatar: memojiAvatar5,
  },
  {
    name: "Samantha Lee",
    position: "IT Manager @ Tech Innovators",
    text: "Adeel is a true full-stack expert. His ability to bridge frontend and backend development resulted in a robust and scalable solution that exceeded our expectations.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-8 lg:py-12">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          description="Insights from those I’ve worked with."
        />
        <div className="mt-8 lg:mt-12 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-800 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
