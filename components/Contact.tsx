"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "");
      }
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
      setErrorMessage(error.message || "");
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-surface-container/30 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 70%, var(--theme-contact-glow), transparent 50%)`,
        }}
      />

      <div className="page-container flex flex-col gap-12 text-center max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-latin text-headline-lg font-black text-on-surface">
            هل لديك مشروع في ذهنك؟
          </h2>
          <p className="font-arabic text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            دعنا نتعاون لبناء شيء مذهل معاً. املأ النموذج أدناه وسأتواصل معك في أقرب وقت ممكن.
          </p>
          <div className="w-20 h-1 bg-primary mt-2" />
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-6 text-right mt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-arabic text-body-md font-bold text-on-surface-variant">
                الاسم الكامل
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="أدخل اسمك هنا"
                className="input"
                required
                disabled={status === "sending"}
              />
            </div>
            
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-arabic text-body-md font-bold text-on-surface-variant">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="input text-left"
                required
                disabled={status === "sending"}
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-arabic text-body-md font-bold text-on-surface-variant">
              تفاصيل المشروع
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="اكتب تفاصيل مشروعك أو فكرتك هنا..."
              className="input resize-none"
              required
              disabled={status === "sending"}
            />
          </div>

          {/* Submit Button & Status Messages */}
          <div className="flex flex-col gap-4 items-stretch sm:items-start">
            <button 
              type="submit" 
              disabled={status === "sending"}
              className="btn-primary px-8 py-3 disabled:opacity-50 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {status === "sending" ? "جاري الإرسال..." : "إرسال الرسالة"}
            </button>

            {status === "success" && (
              <p className="text-emerald-500 font-arabic text-body-md transition-opacity duration-300">
                ✓ تم إرسال رسالتك بنجاح! سأتواصل معك في أقرب وقت.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 font-arabic text-body-md transition-opacity duration-300">
                ✗ حدث خطأ أثناء إرسال الرسالة: {errorMessage || "يرجى المحاولة مرة أخرى أو استخدام البريد الإلكتروني مباشرة."}
              </p>
            )}
          </div>
        </form>

      </div>
    </section>
  );
}

