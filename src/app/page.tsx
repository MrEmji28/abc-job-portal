import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, MapPin, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">ABC Job Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/hero.png)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Job
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Discover thousands of job opportunities with all the information you need
          </p>
          <div className="max-w-2xl mx-auto flex gap-2">
            <Input 
              placeholder="Job title, keywords, or company" 
              className="bg-white text-black"
            />
            <Button variant="secondary" size="lg">
              <Search className="w-4 h-4 mr-2" />
              Search Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Jobs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Senior Frontend Developer</CardTitle>
                <p className="text-blue-600 font-medium">TechCorp Inc.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Makati City, Metro Manila
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Full-time
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-center font-bold">₱</span>
                    80k - 120k
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Build amazing user interfaces with React, TypeScript, and modern tools...
                </p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Backend Developer</CardTitle>
                <p className="text-blue-600 font-medium">DataSoft Solutions</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Taguig City, Metro Manila
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Full-time
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-center font-bold">₱</span>
                    70k - 100k
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Develop robust APIs and microservices using Node.js and Python...
                </p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">UI/UX Designer</CardTitle>
                <p className="text-blue-600 font-medium">Creative Studio PH</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Quezon City, Metro Manila
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Part-time
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-center font-bold">₱</span>
                    50k - 75k
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Create beautiful and intuitive user experiences for web and mobile apps...
                </p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">DevOps Engineer</CardTitle>
                <p className="text-blue-600 font-medium">CloudTech Philippines</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Pasig City, Metro Manila
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Full-time
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-center font-bold">₱</span>
                    90k - 130k
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Manage cloud infrastructure and automate deployment pipelines...
                </p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Mobile App Developer</CardTitle>
                <p className="text-blue-600 font-medium">AppWorks Manila</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Ortigas Center, Pasig
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Contract
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-center font-bold">₱</span>
                    60k - 85k
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Build cross-platform mobile applications using React Native and Flutter...
                </p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Data Analyst</CardTitle>
                <p className="text-blue-600 font-medium">Analytics Pro Inc.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Alabang, Muntinlupa
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Full-time
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-center font-bold">₱</span>
                    55k - 80k
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Analyze business data and create insights using SQL, Python, and Tableau...
                </p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
