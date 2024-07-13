type Mood = "neutral" | "happy" | "sad";
type Status = "active" | "inactive" | "paused";
type Priority = "low" | "medium" | "high";

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
