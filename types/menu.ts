import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type MenuItem = {
  label: string;
  url?: string;
  subMenu?: {
    imageSrc: string | StaticImport;
    title: string;
    links: { name: string; url: string }[];
  }[];
};
