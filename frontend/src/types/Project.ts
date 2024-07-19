export type Mood = "neutral" | "happy" | "sad";
export type Status = "active" | "inactive" | "paused";
export type Priority = "low" | "medium" | "high";

export type Project = {
  id: number;
  name: string;
  description?: string;
  status: Status;
  startDate: Date;
  endDate?: Date;
  priority?: Priority;
  mood: Mood;
};
