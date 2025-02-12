import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "blog",
  },
};

export default function Blog() {
  return <h1>Blog page</h1>;
}
