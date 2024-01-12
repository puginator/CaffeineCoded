import { compareDesc, parseISO } from "date-fns"

export const cx = (...classNames) => classNames.filter(Boolean).join(' ')

export const sortBlogs = (blogs) => {
  return blogs.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
}

export const findSimilarBlogs = (blogs, targetBlog) => {
  return blogs.filter((blog) =>
    blog.tags.some((tag) => targetBlog.tags.includes(tag))
  );
};