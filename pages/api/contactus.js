import connectDb from "@/middleware/mongoose";

const validateEmail = (email) => {
  // Regular expression for a basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateName = (name) => {
  // Regular expression for validating that the name contains only a-z characters (with spaces allowed)
  const nameRegex = /^[a-zA-Z ]+$/;
  // Trim the input to remove leading and trailing spaces
  const trimmedName = name.trim();
  return nameRegex.test(trimmedName);
};


const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      let NAME = req.body.name;
      let EMAIL = req.body.email;
      let MESSAGE = req.body.message;

      // Validate name
      if (!validateName(NAME)) {
        return res.status(400).json({ success: false, msg: "Invalid name format" });
      }

      // Validate email
      if (!validateEmail(EMAIL)) {
        return res.status(400).json({ success: false, msg: "Invalid email format" });
      }

      // Validate message length
      if (MESSAGE.length < 5) {
        return res.status(400).json({ success: false, msg: "Message is too short (minimum 5 characters)" });
      } else if (MESSAGE.length > 550) {
        return res.status(400).json({ success: false, msg: "Message is too long (maximum 550 characters)" });
      }
      

      // If all validations pass, proceed with the rest of your logic
      // console.log(NAME, EMAIL, MESSAGE);

        const fetch_api = await fetch(process.env.GOOGLE_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: NAME,
            email: EMAIL,
            message: MESSAGE
          }),
        });
  
        const data = await fetch_api;
        // console.log(data);
      return res.json({ success: true, msg: "Your Query is Submitted..." });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
  }
};

export default connectDb(handler);
