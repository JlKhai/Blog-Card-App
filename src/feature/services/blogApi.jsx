import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),

  tagTypes: ['blogApi'],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blogs',
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ['blogApi'],
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ['blogApi'],
    }),
    createBlog: builder.mutation({
      query: (blog) => ({
        url: `/blogs`,
        method: 'POST',
        body: blog,
      }),
      invalidatesTags: ['blogApi'],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['blogApi'],
    }),
    editBlog: builder.mutation({
      query: (newData) => ({
        url: `/blogs/${newData?.id}`,
        method: 'PATCH',
        body: newData,
      }),
      invalidatesTags: ['blogApi'],
    }),
  }),
})

export const {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useEditBlogMutation,
} = blogApi
