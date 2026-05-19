import { useState } from "react";
import { createPortal } from "react-dom";

interface SendEmailProps {
  quote: string;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

const SendEmail = ({ quote,className }: SendEmailProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
    setFormError("");
    setFormSuccess("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    try {
      setLoading(true);

      const response = await fetch(
        "https://nexora2.onrender.com/api/email/sendEmail",
        // "http://localhost:5000/api/email/sendEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setFormError(data?.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      setFormSuccess("Email sent successfully!");

      setTimeout(() => {
        setIsDialogOpen(false);
        setLoading(false);
      }, 1500);

    } catch (error) {
      setFormError("Server error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleDialogToggle}
        className={className}
      >
        {quote}
      </button>

      {/* Portal Modal */}
      {isDialogOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            style={{ zIndex: 99999 }}
            onClick={handleDialogToggle}
          >
            <div
              className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4">
                Free Estimate Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />

                <textarea
                  name="description"
                  placeholder="Description"
                  rows={3}
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition cursor-pointer"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>

              {formError && (
                <p className="text-red-500 text-sm mt-3">{formError}</p>
              )}
              {formSuccess && (
                <p className="text-green-500 text-sm mt-3">{formSuccess}</p>
              )}

              <button
                onClick={handleDialogToggle}
                className="absolute top-2 right-2 text-gray-500 cursor-pointer"
              >
                ✖
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default SendEmail;
   