import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Clock, 
  Mail, 
  MessageSquare, 
  Phone, 
  SendHorizontal, 
  User 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Send email to the address (in a real app, this would be done server-side)
      console.log("Sending email to: prisha.vohra.bteh2023@sitpune.edu.in");
      console.log("Form data:", formData);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>
            We're here to help with any questions about Vision Sentinel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="name" 
                    className="pl-9" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    className="pl-9" 
                    placeholder="Your email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="subject">Subject</label>
              <Input 
                id="subject" 
                placeholder="What is your inquiry about?" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">Message</label>
              <Textarea 
                id="message" 
                placeholder="Please describe your question or issue in detail..." 
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="pt-2 flex justify-end">
              <Button className="gap-2" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <SendHorizontal className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Reach out to our team through these channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-sentinel-accent/10 text-sentinel-accent p-2 rounded-md">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-1">For general inquiries:</p>
                <a 
                  href="mailto:prisha.vohra.bteh2023@sitpune.edu.in" 
                  className="text-sentinel-accent hover:underline"
                >
                  prisha.vohra.bteh2023@sitpune.edu.in
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-sentinel-accent/10 text-sentinel-accent p-2 rounded-md">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-1">Customer service:</p>
                <a 
                  href="tel:+1-555-123-4567" 
                  className="text-sentinel-accent hover:underline"
                >
                  +1-555-123-4567
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-sentinel-accent/10 text-sentinel-accent p-2 rounded-md">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Support Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM (EST)<br />
                  Weekend: Emergency support only
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Developer Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              The Vision Sentinel System was developed by our dedicated team of security and AI specialists.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="font-medium">Lead Developer</h4>
                  <p className="text-sm text-muted-foreground">Pulkit Shrivastava</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="font-medium">AI Research</h4>
                  <p className="text-sm text-muted-foreground">Aneeka Jain</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="font-medium">AI Research</h4>
                  <p className="text-sm text-muted-foreground">Janhavi Jayabal</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="font-medium">UI/UX Design</h4>
                  <p className="text-sm text-muted-foreground">Rithikaa Redde</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              &copy; 2023-2025 Vision Sentinel System. All rights reserved.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
