import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ThemePreviewPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-16 md:py-20">
        <div className="mb-12 space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Theme Preview</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Italian Modern Tokens</h1>
          <p className="max-w-2xl text-muted">
            Preview core UI primitives using the shared theme tokens.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold">Typography</h2>
              <p className="mt-2 text-muted">
                Muted text sits comfortably under the warm neutral foreground.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-lg font-medium">Heading level two</p>
                <p className="text-sm text-muted">
                  Supporting paragraph copy for emphasis and readability.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold">Buttons & Badges</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Alert</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold">Form Controls</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Input placeholder="Full name" />
                <Input type="email" placeholder="Email address" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="implants">Implantology</SelectItem>
                    <SelectItem value="surgery">Surgical mastery</SelectItem>
                    <SelectItem value="prosthetics">Prosthetic rehab</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Phone number" />
                <div className="md:col-span-2">
                  <Textarea placeholder="Notes or goals" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold">Card Sample</h2>
              <p className="mt-2 text-muted">
                A surface card using border and muted content tokens.
              </p>
              <div className="mt-4 rounded-xl border border-border bg-surface2 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted">Session status</p>
                    <p className="text-lg font-semibold">Open for registration</p>
                  </div>
                  <Badge variant="outline">Limited</Badge>
                </div>
                <Button className="mt-4 w-full">Reserve Seat</Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold">Table Sample</h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-surface2 text-foreground">
                    <tr>
                      <th className="px-4 py-3">Session</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Seats</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="bg-surface">
                      <td className="px-4 py-3 font-medium">Live Surgery</td>
                      <td className="px-4 py-3 text-muted">May 24</td>
                      <td className="px-4 py-3">
                        <Badge variant="secondary">12 left</Badge>
                      </td>
                    </tr>
                    <tr className="bg-surface">
                      <td className="px-4 py-3 font-medium">Workshop</td>
                      <td className="px-4 py-3 text-muted">Jun 14</td>
                      <td className="px-4 py-3">
                        <Badge variant="secondary">20 left</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
