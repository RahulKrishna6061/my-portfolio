import { useState } from "react";

export default function ContactMe() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add actual validation or API logic here
    // Show notification
    setSubmitted(true);
    // Optionally clear the form or keep it filled
    e.target.reset();
    // Hide the notification after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="text-lg">Get In Touch</p>
        <h1 className="contact--title">Contact Me</h1>
        <p className="contact--description">
          Please fill out the form with your name, email, subject, and message.
          If you prefer, you can also contact me directly via email or phone.
        </p>
      </div>

      {/* ✅ Success Notification */}
      {submitted && (
        <div
          style={{
            backgroundColor: "#2e3047",
            color: "#00c982",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          ✅ Your message has been sent successfully!
        </div>
      )}

      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md" required>
            <option value="">Select One...</option>
            <option value="collaboration">Collaboration Opportunity</option>
            <option value="freelance">Freelance Project Inquiry</option>
            <option value="feedback">Website Feedback</option>
            <option value="job-opportunity">Job/Internship Opportunity</option>
            <option value="bug-report">Bug Report</option>
            <option value="general">General Inquiry</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
