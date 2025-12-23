import api from './axios';

export interface RegistrationPayload {
  fullName: string;
  email: string;
  phone: string;
  dob?: string | null;
  gender: "Male" | "Female";
  address: string;
  emergencyFullName: string;
  emergencyEmail?: string | null;
  emergencyPhone: string;
  emergencyAddress?: string | null;
  emergencyRelationship: string;
  courseOfInterestId: number;
  trainingBranchId: number;
  documentId: number;
  preferredTrainingMode: "VIRTUAL" | "PHYSICAL";
  hearAboutUs: string;
}

export const registerStudent = async (data: RegistrationPayload) => {
  const response = await api.post('/registration-requests', data);
  return response.data;
};

// Assuming a standard upload endpoint
export const uploadDocument = async (file: File, branchId: number) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', file.name || '');
  formData.append('branchId', branchId.toString());
  formData.append('type', "file");
  
  const response = await api.post('/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data; // Expecting { id: number } or similar
};

export interface Branch {
  id: number;
  name: string;
}

export const fetchBranches = async (): Promise<Branch[]> => {
    // Placeholder fetching or hardcoded data
    // Ideally this would be await api.get('/branches');
    // For now returning mock data to enable the UI
    return [
        { id: 1, name: "Ilorin" },
        { id: 2, name: "Lagos" },
        { id: 3, name: "Abuja" }
    ]; 
};
