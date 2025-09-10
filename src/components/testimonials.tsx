"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "./ui/testimonialsCards"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    id: "testimonial-3",
    name: "James S.",
    profession: "Frontend Developer",
    rating: 5,
    description:
      "Their innovative solutions and quick turnaround time made our collaboration incredibly successful. Highly recommended!",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "testimonial-1",
    name: "Jessica H.",
    profession: "Web Designer",
    rating: 4.5,
    description:
      "The attention to detail and user experience in their work is exceptional. I'm thoroughly impressed with the final product.",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "testimonial-2",
    name: "Lisa M.",
    profession: "UX Designer",
    rating: 5,
    description:
      "Working with them was a game-changer for our project. Their expertise and professionalism exceeded our expectations.",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "testimonial-4",
    name: "Jane D.",
    profession: "UI/UX Designer",
    rating: 4.5,
    description:
      "The quality of work and communication throughout the project was outstanding. They delivered exactly what we needed.",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
]

const ANIM_IMAGES = [
  "https://img.freepik.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666687.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/anime-character-winter_23-2151843507.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/anime-character-using-virtual-reality-glasses-metaverse_23-2151568847.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/anime-character-using-virtual-reality-glasses-metaverse_23-2151568850.jpg?t=st=1747007259~exp=1747010859~hmac=0f9056951d9ea1c8bf86dd63e33b00ea3a34e3a40575b5ec5b7bd77cfca69ad6&w=996",
  "https://img.freepik.com/free-photo/fantasy-anime-style-scene_23-2151135073.jpg?t=st=1747006767~exp=1747010367~hmac=f744af6af2545a9dcb4f01d78af38e2828b0375243bc3c1dfae391b2db68c09f&w=900",
]

function getSectionClass(theme: string | undefined) {
  return theme === "dark"
    ? "bg-destructive text-secondary px-8 py-12 mt-20"
    : "bg-accent px-8 py-12"
}

function getReviewStarsClass(theme: string | undefined) {
  return theme === "dark" ? "text-primary" : "text-teal-500"
}

function getTextClass(theme: string | undefined) {
  return theme === "dark" ? "text-primary-foreground" : ""
}

function getAvatarClass(theme: string | undefined) {
  return theme === "dark"
    ? "!size-12 border border-stone-700"
    : "!size-12 border border-stone-300"
}

function getCardVariant(theme: string | undefined) {
  return theme === "dark" ? "dark" : "light"
}

export function TestimonialsVariant() {
  const { theme } = useTheme()

  return (
    <section className={getSectionClass(theme)}>
      <div className="mb-12 px-4">
        <h3 className="text-center text-3xl md:text-4xl font-semibold">
          Testimonials
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>
      </div>

      <ContainerScroll className="container h-[150vh] md:h-[300vh]">
        <div className="sticky left-0 top-20 h-svh w-full px-4 md:px-0 py-8 md:py-12">
          <CardsContainer className="mx-auto size-full max-w-sm h-[300px] md:h-[500px] md:w-[400px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                variant={getCardVariant(theme)}
                index={index + 2}
                role="article"
                aria-labelledby={`card-${testimonial.id}-title`}
                aria-describedby={`card-${testimonial.id}-content`}
                incrementY={8}
                incrementZ={8}
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <ReviewStars
                    className={getReviewStarsClass(theme)}
                    rating={testimonial.rating}
                  />
                  <div
                    className={`mx-auto w-full px-2 sm:w-4/5 text-base md:text-lg ${getTextClass(
                      theme
                    )}`}
                  >
                    <blockquote cite="#">{testimonial.description}</blockquote>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar className={getAvatarClass(theme)}>
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={`Portrait of ${testimonial.name}`}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <span className="block text-base md:text-lg font-semibold tracking-tight">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs md:text-sm text-muted-foreground">
                      {testimonial.profession}
                    </span>
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  )
}