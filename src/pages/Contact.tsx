import { FC, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const templateParams = {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          to_name: 'Jimoo Software',
          message: formData.message,
        };

        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID!,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
          templateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
        );

        setSubmitStatus({
          message: 'Thank you for your message. We will get back to you soon!',
          isError: false
        });

        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
        setErrors({});
      } catch (error) {
        setSubmitStatus({
          message: 'Sorry, something went wrong. Please try again later.',
          isError: true
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <p>
        Interested in working together? Fill out some info and we will be in
        touch shortly. We can't wait to hear from you!
      </p>
      {submitStatus && (
        <div className={`submit-status ${submitStatus.isError ? 'error' : 'success'}`}>
          {submitStatus.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name (required)</label>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                className={`form-control ${errors.firstName ? 'error' : ''}`}
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              {errors.firstName && <div className="error-message">{errors.firstName}</div>}
            </div>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                className={`form-control ${errors.lastName ? 'error' : ''}`}
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
              {errors.lastName && <div className="error-message">{errors.lastName}</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Email (required)</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'error' : ''}`}
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Message (required)</label>
          <textarea
            className={`form-control ${errors.message ? 'error' : ''}`}
            rows={6}
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Contact; 