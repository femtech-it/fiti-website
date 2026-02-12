import api from './axios';

export interface Course {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  certificateName: string;
  status: boolean;
  displayName: string | null;
  timeSchedule: string | null;
  weekSchedule: string | null;
  hasCertificate: boolean;
  studentLevel: string;
  requirements: any[];
  classType: any[];
  courseOutlines: any[];
  courseOutcomes: any[];
  courseBenefits: any[];
}

export interface CoursesResponse {
  status: string;
  message: string;
  data: {
    total: number;
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    offset: number;
    nextPage: number | null;
    prevPage: number | null;
    result: Course[];
  };
}

interface FetchCoursesParams {
  page?: number;
  limit?: number;
  search?: string;
  studentLevel?: string;
  minPrice?: number;
  maxPrice?: number;
  duration?: number;
}

export const fetchCourses = async (params: FetchCoursesParams = {}): Promise<CoursesResponse> => {
  const { page = 1, limit = 10, ...rest } = params;

  // Clean up params to only send defined values
  const cleanParams: any = { page, limit };
  Object.keys(rest).forEach(key => {
    const value = (rest as any)[key];
    if (value !== undefined && value !== null && value !== "") {
      cleanParams[key] = value;
    }
  });

  const response = await api.get(`/courses`, {
    params: cleanParams,
  });
  return response.data;
};

export interface SingleCourseResponse {
  status: string;
  message: string;
  data: Course;
}

export const fetchCourseById = async (id: string | number): Promise<SingleCourseResponse> => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};
