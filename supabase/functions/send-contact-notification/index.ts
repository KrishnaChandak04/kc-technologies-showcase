import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactNotificationRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactNotificationRequest = await req.json();

    // Send notification to you (the site owner)
    const notificationEmail = await resend.emails.send({
      from: "krishbuilds <onboarding@resend.dev>",
      to: ["krishnachandak444@gmail.com"], // Your email
      subject: `New Contact: ${subject} from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background: #f9fafb; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <p style="margin: 0 0 10px;"><strong>From:</strong> ${name}</p>
            <p style="margin: 0 0 10px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
            <h3 style="margin: 0 0 10px; color: #374151;">Message:</h3>
            <p style="margin: 0; color: #4b5563; line-height: 1.6;">${message}</p>
          </div>
          
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    // Send confirmation to the person who submitted
    const confirmationEmail = await resend.emails.send({
      from: "krishbuilds <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a;">Hi ${name}! 👋</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Thanks for reaching out! I've received your message about <strong>"${subject}"</strong> and will get back to you within 24 hours.
          </p>
          
          <div style="background: #f9fafb; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px; color: #374151;">Your message:</h3>
            <p style="margin: 0; color: #6b7280; font-style: italic;">"${message}"</p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            In the meantime, feel free to check out my recent work on the portfolio.
          </p>
          
          <p style="color: #4b5563;">
            Best,<br/>
            <strong>krishbuilds</strong>
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);
    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        notification: notificationEmail,
        confirmation: confirmationEmail 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
