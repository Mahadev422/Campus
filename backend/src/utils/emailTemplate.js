export const signUpEmail = (name, email) =>  {
  const userName = email.split('@')[0];

  return ` <main style="margin:0; padding:0; background-color:#f0f4ff; font-family:'Segoe UI', Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f4ff; padding: 40px 0;">
    <tr>
      <td align="center">

        <!-- Email Card -->
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.1); max-width:560px; width:100%;">

          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 48px 48px 40px; text-align:center;">
              <!-- Logo -->
              <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin-bottom:28px;">
                <tr>
                  <td style="background:rgba(255,255,255,0.2); border-radius:12px; padding:10px 20px;">
                    <span style="font-size:22px; font-weight:700; color:#ffffff; letter-spacing:-0.5px;">&#9670; UniConnect</span>
                  </td>
                </tr>
              </table>

              <!-- Checkmark Icon -->
              <div style="width:64px; height:64px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 20px; line-height:64px; text-align:center; font-size:30px; color:#fff;">&#10003;</div>

              <h1 style="margin:0 0 8px; color:#ffffff; font-size:30px; font-weight:700; letter-spacing:-0.5px;">Welcome Aboard!</h1>
              <p style="margin:0; color:rgba(255,255,255,0.8); font-size:15px;">Your account has been created successfully.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 48px;">

              <!-- Greeting -->
              <p style="margin:0 0 20px; font-size:16px; color:#374151; line-height:1.7;">
                Hi <strong style="color:#4f46e5;">${name}</strong>,
              </p>
              <p style="margin:0 0 32px; font-size:15px; color:#6b7280; line-height:1.8;">
                Thank you for signing up! Your account is ready to use. Below are your login credentials. Please keep them safe and do not share them with anyone.
              </p>

              <!-- Credentials Section Label -->
              <p style="margin:0 0 12px; font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#4f46e5;">Your Login Credentials</p>

              <!-- Credentials Box -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8f7ff; border:1.5px solid #e0e7ff; border-radius:12px; overflow:hidden; margin-bottom:32px;">

                <!-- Username Row -->
                <tr>
                  <td style="padding:18px 20px; border-bottom:1px solid #e0e7ff;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="width:40px; vertical-align:middle;">
                          <div style="width:36px; height:36px; background:#ede9fe; border-radius:8px; text-align:center; line-height:36px; font-size:18px;">&#128100;</div>
                        </td>
                        <td style="padding-left:14px; vertical-align:middle;">
                          <p style="margin:0 0 2px; font-size:11px; font-weight:600; letter-spacing:1px; text-transform:uppercase; color:#9ca3af;">Username</p>
                          <p style="margin:0; font-size:16px; font-weight:600; color:#1f2937;">${userName}</p>
                        </td>
                        <td style="text-align:right; vertical-align:middle;">
                          <span style="background:#ede9fe; color:#6d28d9; font-size:11px; font-weight:600; padding:4px 10px; border-radius:20px;">Login ID</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Email Row -->
                <tr>
                  <td style="padding:18px 20px; border-bottom:1px solid #e0e7ff;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="width:40px; vertical-align:middle;">
                          <div style="width:36px; height:36px; background:#ede9fe; border-radius:8px; text-align:center; line-height:36px; font-size:18px;">&#9993;</div>
                        </td>
                        <td style="padding-left:14px; vertical-align:middle;">
                          <p style="margin:0 0 2px; font-size:11px; font-weight:600; letter-spacing:1px; text-transform:uppercase; color:#9ca3af;">Email Address</p>
                          <p style="margin:0; font-size:16px; font-weight:600; color:#1f2937;">${email}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Password Row -->
                <tr>
                  <td style="padding:18px 20px;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="width:40px; vertical-align:middle;">
                          <div style="width:36px; height:36px; background:#ede9fe; border-radius:8px; text-align:center; line-height:36px; font-size:18px;">&#128274;</div>
                        </td>
                        <td style="padding-left:14px; vertical-align:middle;">
                          <p style="margin:0 0 2px; font-size:11px; font-weight:600; letter-spacing:1px; text-transform:uppercase; color:#9ca3af;">Password</p>
                          <p style="margin:0; font-size:16px; font-weight:600; color:#1f2937; letter-spacing:2px;">${userName + '#iSM'}</p>
                        </td>
                        <td style="text-align:right; vertical-align:middle;">
                          <span style="background:#fef3c7; color:#d97706; font-size:11px; font-weight:600; padding:4px 10px; border-radius:20px;">Change Soon</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>

              <!-- Security Notice -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fff7ed; border-left:4px solid #f97316; border-radius:0 8px 8px 0; margin-bottom:32px;">
                <tr>
                  <td style="padding:14px 16px;">
                    <p style="margin:0; font-size:13px; color:#92400e; line-height:1.6;">
                      &#9888;&nbsp; <strong>Security Tip:</strong> For your safety, please change your password after your first login. Never share your credentials with anyone.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto 32px;">
                <tr>
                  <td style="background: linear-gradient(135deg, #4f46e5, #7c3aed); border-radius:10px;">
                    <a href="https://campus-hg1f.onrender.com/" style="display:inline-block; padding:14px 40px; font-size:15px; font-weight:700; color:#ffffff; text-decoration:none; letter-spacing:0.3px;">
                      Login &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none; border-top:1px solid #e5e7eb; margin-bottom:24px;" />

              <!-- Closing -->
              <p style="margin:0 0 6px; font-size:15px; color:#6b7280; line-height:1.7;">
                If you didn't create this account, please ignore this email or <a href="#" style="color:#4f46e5; text-decoration:none; font-weight:600;">contact support</a>.
              </p>
              <p style="margin:0; font-size:15px; color:#6b7280;">
                Cheers,<br/>
                <strong style="color:#374151;">The UniConnect Team</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb; padding:24px 48px; border-top:1px solid #e5e7eb; text-align:center;">
              <p style="margin:0 0 8px; font-size:12px; color:#9ca3af;">
                &copy; 2025 UniConnect, Inc. &bull; All rights reserved.
              </p>
              <p style="margin:0; font-size:12px; color:#9ca3af;">
                <a href="#" style="color:#6b7280; text-decoration:none;">Privacy Policy</a>
                &nbsp;&bull;&nbsp;
                <a href="#" style="color:#6b7280; text-decoration:none;">Terms of Service</a>
                &nbsp;&bull;&nbsp;
                <a href="#" style="color:#6b7280; text-decoration:none;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
        <!-- End Email Card -->

      </td>
    </tr>
  </table>

</main>`
}