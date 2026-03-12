import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, address, gdpr } = body;

    // Validate required fields
    if (!name || !phone || !gdpr) {
      return NextResponse.json(
        { error: 'Toate câmpurile obligatorii trebuie completate.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'VitraFrame Website <onboarding@resend.dev>',
      to: ['scvisasrl@gmail.com'],
      subject: '[PVC VitraFrame] Solicitare nouă de ofertă',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1e3a8a; color: white; padding: 20px 30px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 22px;">🏠 Solicitare nouă de ofertă</h1>
            <p style="margin: 5px 0 0; opacity: 0.8; font-size: 14px;">Trimisă de pe website-ul VitraFrame</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 40%;">👤 Nume complet</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">📞 Telefon</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  <a href="tel:${phone}" style="color: #1e3a8a; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">🔧 Serviciu dorit</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">📍 Adresă</td>
                <td style="padding: 12px 0; color: #111827;">${address || 'Nespecificată'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 12px; background: #ecfdf5; border-radius: 8px; border: 1px solid #a7f3d0;">
              <p style="margin: 0; color: #065f46; font-size: 13px;">✅ Consimțământ GDPR acordat de client</p>
            </div>
          </div>
          
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
            Email generat automat de formularul de contact VitraFrame
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return NextResponse.json(
        { error: `Resend: ${error.message || JSON.stringify(error)}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Eroare internă. Încercați din nou mai târziu.' },
      { status: 500 }
    );
  }
}
