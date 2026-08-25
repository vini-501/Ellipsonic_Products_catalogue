import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { email, product } = await req.json()

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const productName = product || 'Ellipsonic (General)'
    const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    await transporter.sendMail({
      from: `"Ellipsonic Catalogue" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `🟢 Demo Request — ${productName}`,
      html: `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:560px;margin:0 auto;color:#22231f">
          <div style="border-bottom:2px solid #e1ff55;padding:24px 0 16px">
            <h2 style="margin:0;font-size:22px;font-weight:700;letter-spacing:-0.03em">
              New Demo Request
            </h2>
          </div>
          <table style="width:100%;border-collapse:collapse;margin:24px 0">
            <tr>
              <td style="padding:10px 0;color:#777871;font-size:13px;width:130px;vertical-align:top">Product</td>
              <td style="padding:10px 0;font-weight:600;font-size:14px">${productName}</td>
            </tr>
            <tr style="border-top:1px solid #eeede8">
              <td style="padding:10px 0;color:#777871;font-size:13px;vertical-align:top">Requester Email</td>
              <td style="padding:10px 0;font-size:14px">
                <a href="mailto:${email}" style="color:#094cb2;text-decoration:none">${email}</a>
              </td>
            </tr>
            <tr style="border-top:1px solid #eeede8">
              <td style="padding:10px 0;color:#777871;font-size:13px;vertical-align:top">Submitted At</td>
              <td style="padding:10px 0;font-size:14px">${now} IST</td>
            </tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#f4f3ef;border-radius:8px;font-size:12px;color:#777871">
            This request was submitted via the <strong>Ellipsonic Product Catalogue</strong>.
            Reply directly to this email to reach the requester.
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    console.error('Demo request email failed:', err)
    const message = err instanceof Error ? err.message : 'Failed to send email'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
