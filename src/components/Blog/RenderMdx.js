'use client'
import {useMDXComponent} from 'next-contentlayer/hooks'
import React from 'react'
import Image from 'next/image'

const mdxComponents = {
  Image
}

const RenderMdx = ({blog}) => {

  const MDXContent = useMDXComponent(blog.body.code)
  return (
    <div className="first-letter:text-3xl sm:first-letter:text-5xl col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:border-accent prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent">
      <MDXContent components={mdxComponents} />
    </div>
  );
}

export default RenderMdx