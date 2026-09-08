import z from "zod";

const scheduleSchema = z.object({
  day: z.string().min(1, "Day is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
});

export const classSchema = z.object({
  name: z
    .string({ required_error: "Class name is required" })
    .min(2, "Class name must be at least 2 characters")
    .max(50, "Class name must be at most 50 characters"),
  description: z
    .string({ required_error: "Class description is required" })
    .min(5, "Description must be at least 5 characters"),
  subjectId: z
    .number({
      required_error: "Subject is required",
      invalid_type_error: "Subject must be a number",
    })
    .min(1, "Subject is required"),
  teacherId: z
    .string({ required_error: "Subject is required" })
    .min(1, "Teacher is required"),
  capacity: z.coerce
    .number({
      required_error: "Capacity is required",
      invalid_type_error: "Capacity must be a number",
    })
    .min(1, "Capacity must be at least 1"),
  status: z.enum(["active", "inactive"]),
  bannerUrl: z
    .string({ required_error: "Banner URL is required" })
    .min(1, "Class Banner URL is required"),
  bannerCldPubId: z
    .string({ required_error: "Banner Cloudinary Public ID is required" })
    .min(1, "Class Banner Cloudinary Public ID is required"),
  inviteCode: z.string().optional(),
  schedules: z.array(scheduleSchema).optional(),
});
