export interface Course {
  order: number;
  id: string;
  icon: string;
  href: string;
  title: string;
  label: string;
  bulletIcon: string;
  classes?: string;
  degrees: Degree[];
}

export interface Province {
  id: string;
  label: string;
  courses: ProvinceCourseList[];
}

export interface ProvinceCourseList {
  label: string;
  href: string;
  list: string[];
}

export interface Degree {
  img: string;
  href: string;
  bulletPoints: BulletPointList[];
}

export interface BulletPointList {
  list: string[];
  label?: string;
}
