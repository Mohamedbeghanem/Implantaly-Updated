"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Star, TrendingUp, BookOpen, GraduationCap, Shield } from "lucide-react"
import Image from "next/image"

export function AboutUs1() {
  const stats = [
    {
      icon: Users,
      value: "1000+",
      label: "Students Trained",
    },
    {
      icon: Award,
      value: "50+",
      label: "Courses Available",
    },
    {
      icon: Clock,
      value: "95%",
      label: "Success Rate",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Student Rating",
    },
  ]

  const features = [
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description: "Learn from industry-leading professionals with decades of experience",
    },
    {
      icon: Users,
      title: "Hands-on Training",
      description: "Practical experience with real cases and live patient scenarios",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Recognized qualifications and continuing education credits",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Online and in-person options to fit your schedule",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Structured learning paths from beginner to advanced levels",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous standards and continuous improvement processes",
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Alta Academy</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                We are a leading dental education platform committed to advancing professional skills and knowledge. Our
                mission is to provide the highest quality training to dental professionals worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <stat.icon className="h-8 w-8" />
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-500 ">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/modern-dental-office.png"
              alt="About us"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="mt-16">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Us?</h2>
            <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              We offer a unique learning experience that combines theoretical knowledge with practical skills.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <feature.icon className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 ">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

