export type Notice = {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
};

export type ScheduleItem = {
  id: string;
  time: string;
  title: string;
  description: string;
  speaker?: string;
  location?: string;
};

export type Sponsor = {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  logo: string;
  website?: string;
};