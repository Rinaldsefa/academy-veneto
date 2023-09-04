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

export interface Degree {
  img: string;
  href: string;
  bulletPoints: BulletPointList[];
}

export interface BulletPointList {
  list: string[];
  label?: string;
}
