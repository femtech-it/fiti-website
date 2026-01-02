import api from './axios';

// Contact Us / Enquiry
export interface EnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const submitEnquiry = async (data: EnquiryPayload) => {
  const response = await api.post('/enquiry', data);
  return response.data;
};

// Email Subscription
export interface EmailSubscriptionPayload {
  email: string;
}

export const subscribeEmail = async (data: EmailSubscriptionPayload) => {
  const response = await api.post('/email-subscriptions', data);
  return response.data;
};
