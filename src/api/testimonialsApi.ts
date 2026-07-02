import api from './axios';

export interface Testimonial {
  id: number;
  name: string;
  occupation: string;
  message: string;
  profileImage?: {
    id: number;
    name: string;
    url: string;
  } | null;
  createdAt: string;
  updatedAt: string;
}

export interface TestimonialsResponse {
  status: string;
  message: string;
  data: {
    total: number;
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    offset: number;
    result: Testimonial[];
  };
}

export interface FetchTestimonialsParams {
  limit?: number;
  page?: number;
}

export const fetchTestimonials = async (params: FetchTestimonialsParams = { limit: 10, page: 1 }): Promise<TestimonialsResponse> => {
  const response = await api.get('/testimonials', {
    params,
  });
  return response.data;
};
