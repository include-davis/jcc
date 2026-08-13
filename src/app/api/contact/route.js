import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, phone, committee, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ucd.jcc@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${committee}`,
      html: `
        <h3>New Message from Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Committee:</strong> ${committee}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; padding: 10px; background: #f4f4f4; border-radius: 4px;">${message}</p>
      `
    });
    return Response.json({ success: true, id: data.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Internal server failed to dispatch email' }, { status: 500 });
  }
}
