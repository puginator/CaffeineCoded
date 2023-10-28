export const POST = async (req, res) => {
  const bodyText = await req.text(); // Read body as text
  const body = JSON.parse(bodyText); // Parse text as JSON
  const { email } = body; // Destructure JSON object

  if (req.method === "POST") {
    try {
      const response = await fetch(
        `https://us21.api.mailchimp.com/3.0/lists/299d0b7226/members`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`
          },
          body: JSON.stringify({
            email_address: email,
            status: "subscribed",
          }),
        }
      );

      if (response.ok) {
        return {
          status: 200,
          success: true,
        };
      } else {
        const errorData = await response.json();
        console.error(errorData);
        return {
          status: 405,
          success: false,
        };
      }
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        success: false,
      };
    }
  } else {
    return {
      status: 405,
      success: false,
      error: "Method not allowed",
    };
  }
};
