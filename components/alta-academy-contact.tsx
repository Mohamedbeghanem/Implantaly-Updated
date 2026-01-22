"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export function AltaAcademyContact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Have a question or want to work together? Fill out the form and we'll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-gray-500 ">Cooperative Lalla aicha, local N°01, Tlemcen, Algeria</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="mt-1 h-6 w-6 flex-shrink-0" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-500 ">altaacademy@implantaly.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="mt-1 h-6 w-6 flex-shrink-0" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-500 ">+213 6661606706</p>
                </div>
              </div>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone Number" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Message" rows={5} />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

