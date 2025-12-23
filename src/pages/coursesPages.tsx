import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchCourses } from "../api/coursesApi";
import CourseCard from "./components/course-card";
import { FaSpinner, FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

const CoursesPages = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [userSearch, setUserSearch] = useState(""); // For triggering search on button click
  const [studentLevel, setStudentLevel] = useState("");
  const [duration, setDuration] = useState<number | undefined>();
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();

  const limit = 9;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['courses', page, limit, userSearch, studentLevel, duration, minPrice, maxPrice],
    queryFn: () => fetchCourses({
      page,
      limit,
      search: userSearch,
      studentLevel: studentLevel || undefined,
      duration,
      minPrice,
      maxPrice
    }),
    placeholderData: keepPreviousData,
  });

  const handleSearch = () => {
    setUserSearch(search);
    setPage(1);
  };

  const handlePrevPage = () => {
    if (data?.data.prevPage) {
      setPage(data.data.prevPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (data?.data.nextPage) {
      setPage(data.data.nextPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center bg-gray-50 pt-24 pb-20 gap-8 md:gap-16">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <img src="/assets/courseImg.png" alt="Courses Header" className="w-full h-[400px] md:h-[500px] object-cover" />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl max-w-5xl mb-6 tracking-tight">
            Master In-Demand Tech Skills
          </h1>
          <p className="text-lg md:text-xl max-w-2xl opacity-90 font-light">
            Gain job-ready skills with expert-led training, hands-on projects, and recognized certifications.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar / Filter Section */}
          <div className="lg:w-1/4 w-full space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaSearch className="text-primary" /> Filter Courses
              </h2>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-primary text-white p-3 rounded-xl hover:bg-opacity-90 transition-colors"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Level</label>
                <select
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                  value={studentLevel}
                  onChange={(e) => { setStudentLevel(e.target.value); setPage(1); }}
                >
                  <option value="">All Levels</option>
                  <option value="BEGINNER">Beginner</option>
                  <option value="INTERMEDIATE">Intermediate</option>
                  <option value="ADVANCED">Advanced</option>
                </select>
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (Weeks)</label>
                <input
                  type="number"
                  placeholder="e.g. 12"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                  value={duration || ''}
                  onChange={(e) => { setDuration(e.target.value ? Number(e.target.value) : undefined); setPage(1); }}
                />
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range (₦)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    value={minPrice || ''}
                    onChange={(e) => { setMinPrice(e.target.value ? Number(e.target.value) : undefined); setPage(1); }}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    value={maxPrice || ''}
                    onChange={(e) => { setMaxPrice(e.target.value ? Number(e.target.value) : undefined); setPage(1); }}
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  setSearch("");
                  setUserSearch("");
                  setStudentLevel("");
                  setDuration(undefined);
                  setMinPrice(undefined);
                  setMaxPrice(undefined);
                  setPage(1);
                }}
                className="w-full py-3 text-sm font-bold text-gray-500 hover:text-primary transition-colors border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                Reset Filters
              </button>

            </div>
          </div>

          {/* Results Section */}
          <div className="lg:w-3/4 w-full">
            {isLoading ? (
              <div className="flex justify-center items-center py-20 h-[50vh]">
                <FaSpinner className="animate-spin text-4xl text-primary" />
              </div>
            ) : isError ? (
              <div className="text-center py-20 text-red-500 text-xl font-bold bg-red-50 rounded-3xl p-10 border border-red-100">
                <p>Error loading courses.</p>
                <p className="text-sm mt-2 text-red-400">{(error as Error).message}</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6 px-2">
                  <p className="text-gray-500 font-medium">Showing <span className="font-bold text-gray-800">{data?.data.result.length}</span> of <span className="font-bold text-gray-800">{data?.data.totalRecords}</span> courses</p>
                </div>

                {data?.data.result.length === 0 ? (
                  <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-xl font-bold text-gray-400">No courses found matching your criteria.</p>
                    <button
                      onClick={() => {
                        setSearch(""); setUserSearch(""); setStudentLevel("");
                        setDuration(undefined); setMinPrice(undefined); setMaxPrice(undefined);
                      }}
                      className="mt-4 text-primary font-bold hover:underline"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {data?.data.result.map((course) => (
                      <CourseCard
                        key={course.id}
                        name={course.name}
                        description={course.description}
                        price={course.price}
                        duration={course.duration}
                      />
                    ))}
                  </div>
                )}

                {/* Pagination Controls */}
                {data && data.data.totalRecords > 0 && (
                  <div className="flex justify-center items-center mt-16 gap-4 sm:gap-6">
                    <button
                      onClick={handlePrevPage}
                      disabled={!data?.data.prevPage}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-lg shadow-md transition-all ${!data?.data.prevPage
                        ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                        : "bg-white text-primary hover:bg-primary hover:text-white"
                        }`}
                    >
                      <FaChevronLeft /> Prev
                    </button>

                    <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-600">
                      Page {data.data.currentPage} of {data.data.totalPages}
                    </div>

                    <button
                      onClick={handleNextPage}
                      disabled={!data?.data.nextPage}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-lg shadow-md transition-all ${!data?.data.nextPage
                        ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                        : "bg-white text-primary hover:bg-primary hover:text-white"
                        }`}
                    >
                      Next <FaChevronRight />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default CoursesPages
