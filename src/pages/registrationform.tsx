import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchCourses } from "../api/coursesApi";
import { registerStudent, uploadDocument, fetchBranches } from "../api/registrationApi";
import type { RegistrationPayload } from "../api/registrationApi";
import { toast } from "sonner";
import { FaSpinner } from "react-icons/fa";
import SEO from "../components/SEO";
import { PAGE_SEO, DEFAULT_SEO } from "../utils/seo-config";

const Registrationform = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const courseIdParam = searchParams.get('courseId');

  const [formData, setFormData] = useState<Partial<RegistrationPayload>>({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Male",
    address: "",
    emergencyFullName: "",
    emergencyEmail: "",
    emergencyPhone: "",
    emergencyAddress: "",
    emergencyRelationship: "",
    courseOfInterestId: undefined,
    trainingBranchId: undefined,
    documentId: undefined,
    preferredTrainingMode: "VIRTUAL",
    hearAboutUs: "EMAIL"
  });

  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Fetch Courses
  const { data: coursesData, isLoading: isLoadingCourses } = useQuery({
    queryKey: ['allCourses'],
    queryFn: () => fetchCourses({ limit: 50, page: 1 }),
  });

  // Fetch Branches
  const { data: branchesData } = useQuery({
    queryKey: ['branches'],
    queryFn: fetchBranches,
  });

  // Register Mutation
  const registerMutation = useMutation({
    mutationFn: registerStudent,
    onSuccess: () => {
      toast.success("Registration submitted successfully!");
      // Reset form or navigate
      setTimeout(() => navigate('/'), 2000);
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to submit registration.");
    }
  });

  useEffect(() => {
    if (courseIdParam && !formData.courseOfInterestId) {
      setFormData(prev => ({ ...prev, courseOfInterestId: Number(courseIdParam) }));
    }
  }, [courseIdParam]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'courseOfInterestId' || name === 'trainingBranchId' ? Number(value) : value
    }));
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (e.g., 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("File size exceeds 2MB limit.");
      return;
    }

    setIsUploading(true);
    setUploadError("");
    try {
      // Assuming uploadDocument returns { id: number } or similar structure
      // Adjust based on actual API response
      const response = await uploadDocument(file, Number(formData.trainingBranchId));
      // If response is just the ID or object containing ID
      const docId = response.data?.id || response.id;

      if (docId) {
        setFormData(prev => ({ ...prev, documentId: docId }));
        toast.success("Document uploaded successfully.");
      } else {
        throw new Error("Invalid response from upload server");
      }
    } catch (err) {
      console.error(err);
      setUploadError("Failed to upload document. Please try again.");
      toast.error("Document upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      toast.warning("Please agree to the terms and conditions.");
      return;
    }

    if (!formData.documentId) {
      toast.warning("Please upload a passport photograph.");
      return;
    }

    // Basic required field validation (can be enhanced)
    const requiredFields = ['fullName', 'email', 'phone', 'gender', 'emergencyFullName', 'emergencyPhone', 'courseOfInterestId', 'trainingBranchId'];
    const missing = requiredFields.filter(field => !formData[field as keyof RegistrationPayload]);

    if (missing.length > 0) {
      toast.warning(`Please fill in all required fields.`);
      return;
    }

    registerMutation.mutate(formData as RegistrationPayload);
  };

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-20">
      <SEO
        title={PAGE_SEO.registration.title}
        description={PAGE_SEO.registration.description}
        keywords={PAGE_SEO.registration.keywords}
        canonical={`${DEFAULT_SEO.siteUrl}/registration`}
        noindex={PAGE_SEO.registration.noindex}
      />
      <div className="relative mb-16">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img src="/assets/registartion_Img.png" alt="FITI Student Registration" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center -mt-6 md:-mt-10">
          <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-bold text-xl md:text-3xl lg:text-4xl shadow-2xl">
            REGISTRATION FORM
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl text-center mb-16">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
          You're just a few steps away from joining hundreds of students building real tech skills at FEMTECH! Fill out the form below to register for your preferred training program.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100">
          <form className="space-y-12" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input required name="fullName" value={formData.fullName} onChange={handleInputChange} type="text" placeholder="Enter full name" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Enter email" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone No *</label>
                  <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Enter phone no" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
                  <input name="dob" value={formData.dob || ''} onChange={handleInputChange} type="date" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Gender *</label>
                  <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Residential Address *</label>
                  <input required name="address" value={formData.address} onChange={handleInputChange} type="text" placeholder="Enter residential address" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block">Emergency Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Next of Kin Full Name *</label>
                  <input required name="emergencyFullName" value={formData.emergencyFullName} onChange={handleInputChange} type="text" placeholder="Enter full name" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input name="emergencyEmail" value={formData.emergencyEmail || ''} onChange={handleInputChange} type="email" placeholder="Enter email" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone No *</label>
                  <input required name="emergencyPhone" value={formData.emergencyPhone} onChange={handleInputChange} type="tel" placeholder="Enter phone no" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Relationship *</label>
                  <input required name="emergencyRelationship" value={formData.emergencyRelationship} onChange={handleInputChange} type="text" placeholder="e.g. Parent, Sibling" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Emergency Contact Address</label>
                  <input name="emergencyAddress" value={formData.emergencyAddress || ''} onChange={handleInputChange} type="text" placeholder="Address" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
              </div>
            </div>

            {/* Course and Training Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block">Course and Training Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Course of Interest *</label>
                  <select
                    name="courseOfInterestId"
                    value={formData.courseOfInterestId || ''}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm appearance-none"
                    required
                  >
                    <option value="">Select a Course</option>
                    {isLoadingCourses ? <option disabled>Loading...</option> :
                      coursesData?.data.result.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Training Branch *</label>
                  <select
                    name="trainingBranchId"
                    value={formData.trainingBranchId || ''}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm appearance-none"
                    required
                  >
                    <option value="">Select a Branch</option>
                    {branchesData?.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Training Mode *</label>
                  <select name="preferredTrainingMode" value={formData.preferredTrainingMode} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm">
                    <option value="VIRTUAL">Virtual</option>
                    <option value="PHYSICAL">Physical</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">How did you hear about us?</label>
                  <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm">
                    <option value="EMAIL">Email</option>
                    <option value="SOCIAL_MEDIA">Social Media</option>
                    <option value="FRIEND">Friend/Family</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block">Document Upload</h2>
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">Passport Photograph (Upload clear headshot – JPEG/PNG, max 2MB) *</p>
                <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary transition-colors" />
                {isUploading && <p className="text-primary flex items-center gap-2"><FaSpinner className="animate-spin" /> Uploading...</p>}
                {formData.documentId && <p className="text-green-600 font-bold">Document uploaded!</p>}
                {uploadError && <p className="text-red-500">{uploadError}</p>}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <div className="bg-primary/5 p-6 rounded-2xl space-y-4 mb-8">
                <p className="font-bold text-gray-800 text-lg">Agreement and Submission</p>
                <div className="flex gap-4 items-start">
                  <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1.5 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className="text-gray-700">I confirm that the information provided is accurate to the best of my knowledge. I agree to abide by the rules and ethics of FEMTECH Training Centre.</p>
                </div>
              </div>

              <div className="flex justify-center">
                <button disabled={registerMutation.isPending || isUploading} className="bg-secondary hover:bg-opacity-90 py-4 px-20 rounded-2xl text-white font-bold text-xl shadow-xl transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                  {registerMutation.isPending ? <><FaSpinner className="animate-spin" /> Submitting...</> : "Submit Registration"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Registrationform
