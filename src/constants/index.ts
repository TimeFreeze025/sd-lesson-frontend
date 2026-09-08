// export const DEPARTMENTS = [
//   "Computer Science",
//   "Mathematics",
//   "Physics",
//   "Chemistry",
//   "Biology",
//   "Economics",
//   "History",
//   "Literature",
//   "Philosophy",
//   "Psychology",
// ];

// export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((department) => ({
//   value: department,
//   label: department,
// }));

export const DEPARTMENTS = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Economics",
  "Business Administration",
  "Engineering",
  "Psychology",
  "Sociology",
  "Political Science",
  "Philosophy",
  "Education",
  "Fine Arts",
  "Music",
  "Physical Education",
  "Law",
] as const;

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const CLOUDINARY_UPLOAD_URL = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;
export const CLOUDINARY_UPLOAD_PRESET = import.meta.env
  .VITE_CLOUDINARY_UPLOAD_PRESET;
export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
