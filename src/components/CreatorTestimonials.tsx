
import React from 'react';
import { Star, Quote } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
  revenue: string;
  niche: string;
  initials: string;
}

const CreatorTestimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      avatar: "/placeholder.svg",
      quote: "From $500/month to $12K/month in just 6 weeks. Their system completely transformed my business.",
      revenue: "$12K/month",
      niche: "Fitness Coach",
      initials: "SC"
    },
    {
      name: "Marcus Rodriguez",
      avatar: "/placeholder.svg", 
      quote: "I was skeptical about revenue sharing, but they delivered exactly what they promised. Best decision ever.",
      revenue: "$18K/month",
      niche: "Business Mentor",
      initials: "MR"
    },
    {
      name: "Emma Thompson",
      avatar: "/placeholder.svg",
      quote: "They built everything while I focused on content. Now I'm making more in a month than I used to in a year.",
      revenue: "$22K/month",
      niche: "Productivity Expert",
      initials: "ET"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-purple-50/30 via-background to-blue-50/30">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 mb-4 px-3 py-1 text-sm">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Creators Who Transformed Their
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Audience Into Income
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Real results from real creators who trusted us to build their monetization systems
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="fade-in-up" delay={400}>
          <div className="relative max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full bg-gradient-to-br from-white/90 to-white/60 dark:from-gray-900/90 dark:to-gray-900/60 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-8 h-full flex flex-col">
                        {/* Quote Icon */}
                        <div className="mb-6">
                          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                            <Quote className="w-6 h-6 text-accent" />
                          </div>
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Revenue Badge */}
                        <div className="mb-6">
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-1 text-sm font-semibold">
                            💰 {testimonial.revenue}
                          </Badge>
                        </div>

                        {/* Creator Info */}
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 ring-2 ring-accent/20">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback className="bg-accent/10 text-accent font-semibold">
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.niche}
                            </p>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-1 mt-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="fade-in-up" delay={600}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-base">
              <span className="font-semibold text-accent">Join 500+ creators</span> who've transformed their audience into consistent monthly revenue
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default CreatorTestimonials;
