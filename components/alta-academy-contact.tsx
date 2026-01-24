"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import { useFormSubmit } from "@/src/hooks/useFormSubmit"

export function AltaAcademyContact() {
  const pathname = usePathname()
  const { submit, isLoading, isSuccess, isError, error } = useFormSubmit()
  const [subject, setSubject] = React.useState<string>("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const firstName = String(formData.get("firstName") || "").trim()
    const lastName = String(formData.get("lastName") || "").trim()
    const name = [firstName, lastName].filter(Boolean).join(" ").trim()
    const email = String(formData.get("email") || "").trim()
    const phone = String(formData.get("phone") || "").trim()
    const message = String(formData.get("message") || "").trim()
    const composedMessage = subject ? `Subject: ${subject}\n${message}` : message

    const ok = await submit({
      type: "formSubmission",
      data: {
        formId: "contact",
        name,
        email,
        phone,
        message: composedMessage,
        pagePath: pathname,
        source: "website",
        company: String(formData.get("company") || "").trim(),
      },
    })

    if (ok) {
      form.reset()
      setSubject("")
    }
  }

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
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="firstName" placeholder="First Name" required />
                  <Input name="lastName" placeholder="Last Name" required />
                </div>
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="tel" name="phone" placeholder="Phone Number" />
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Technical Support">Technical Support</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea name="message" placeholder="Message" rows={5} required />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit"}
                </Button>
                {isSuccess ? (
                  <p className="text-sm text-foreground">Thanks! We will contact you soon.</p>
                ) : null}
                {isError ? (
                  <p className="text-sm text-destructive">{error}</p>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

