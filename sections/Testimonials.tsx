import testimonialsData from "@/data/testimonials.json";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const avatarMap: Record<string, any> = {
  "memoji-avatar-1": memojiAvatar1,
  "memoji-avatar-2": memojiAvatar2,
  "memoji-avatar-3": memojiAvatar3,
  "memoji-avatar-4": memojiAvatar4,
  "memoji-avatar-5": memojiAvatar5,
};

const testimonials = testimonialsData.map((testimonial) => ({
  ...testimonial,
  avatar: avatarMap[testimonial.avatar],
}));

const carouselTestimonials = [...testimonials, ...testimonials];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none animate-carousel w-max">
            {carouselTestimonials.map((testimonial, idx) => (
              <Card
                key={testimonial.name + idx}
                className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
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
          </div>
        </div>
      </div>
    </div>
  );
};
