import { defineArrayMember, defineField, defineType } from 'sanity';

// Schema bài viết blog, có sẵn nhóm trường SEO cho nhân viên điền
export const post = defineType({
  name: 'post',
  title: 'Bài viết',
  type: 'document',
  groups: [
    { name: 'content', title: 'Nội dung', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Tiêu đề', type: 'string', group: 'content', validation: (r) => r.required().max(100) }),
    defineField({
      name: 'slug', title: 'Đường dẫn (slug)', type: 'slug', group: 'content',
      options: { source: 'title', maxLength: 96 }, validation: (r) => r.required(),
    }),
    defineField({ name: 'author', title: 'Tác giả', type: 'string', group: 'content' }),
    defineField({ name: 'publishedAt', title: 'Ngày đăng', type: 'datetime', group: 'content', initialValue: () => new Date().toISOString(), validation: (r) => r.required() }),
    defineField({
      name: 'excerpt', title: 'Mô tả ngắn', type: 'text', rows: 3, group: 'content',
      validation: (r) => r.required().max(200),
    }),
    defineField({
      name: 'mainImage', title: 'Ảnh đại diện', type: 'image', group: 'content', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Mô tả ảnh (alt, quan trọng cho SEO)', type: 'string', validation: (r) => r.required() })],
    }),
    defineField({
      name: 'body', title: 'Nội dung bài viết', type: 'array', group: 'content',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image', options: { hotspot: true },
          fields: [defineField({ name: 'alt', title: 'Mô tả ảnh (alt)', type: 'string' })],
        }),
      ],
    }),
    defineField({
      name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo',
      description: 'Nên dưới 60 ký tự. Bỏ trống sẽ dùng tiêu đề bài viết.',
      validation: (r) => r.max(60).warning('Nên dưới 60 ký tự'),
    }),
    defineField({
      name: 'seoDescription', title: 'SEO description', type: 'text', rows: 3, group: 'seo',
      description: 'Nên dưới 160 ký tự. Bỏ trống sẽ dùng mô tả ngắn.',
      validation: (r) => r.max(160).warning('Nên dưới 160 ký tự'),
    }),
    defineField({ name: 'noIndex', title: 'Ẩn khỏi Google (noindex)', type: 'boolean', group: 'seo', initialValue: false }),
  ],
  orderings: [{ title: 'Mới nhất', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'author', media: 'mainImage' } },
});
